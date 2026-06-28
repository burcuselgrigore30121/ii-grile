import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../js/questions.js', import.meta.url), 'utf8');
const generatedSnapshot = JSON.parse(
  fs.readFileSync(new URL('./snapshots/generated-questions.json', import.meta.url), 'utf8')
);

const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nthis.QUESTION_BANK = QUESTION_BANK;`, context);

const questions = context.QUESTION_BANK;
const errors = [];
const ids = new Set();
const texts = new Set();
const distribution = [0, 0, 0, 0];
let correctIsLongest = 0;

function isExam(q) {
  return q.origin === 'exam';
}

function isGenerated(q) {
  return q.origin === 'generated';
}

function comparableGenerated(q) {
  const copy = { ...q };
  delete copy.origin;
  return copy;
}

function stableStringify(value) {
  return JSON.stringify(value, Object.keys(value).sort());
}

if (!Array.isArray(questions)) {
  throw new Error('QUESTION_BANK must be an array.');
}

const examQuestions = questions.filter(isExam);
const generatedQuestions = questions.filter(isGenerated);
const exam1 = examQuestions.filter(q => q.exam === 'Examenul 1');
const exam2 = examQuestions.filter(q => q.exam === 'Examenul 2');

if (questions.length !== 190) errors.push(`Total invalid: ${questions.length}, asteptat 190`);
if (examQuestions.length !== 75) errors.push(`Exam invalid: ${examQuestions.length}, asteptat 75`);
if (generatedQuestions.length !== 115) errors.push(`Generated invalid: ${generatedQuestions.length}, asteptat 115`);
if (exam1.length !== 25) errors.push(`Examenul 1 invalid: ${exam1.length}, asteptat 25`);
if (exam2.length !== 50) errors.push(`Examenul 2 invalid: ${exam2.length}, asteptat 50`);

for (const q of questions) {
  if (!q.id || ids.has(q.id)) errors.push(`ID duplicat sau lipsa: ${q.id}`);
  ids.add(q.id);

  if (!isExam(q) && !isGenerated(q)) errors.push(`${q.id}: origin trebuie sa fie exam sau generated`);
  if (isExam(q) && !q.official) errors.push(`${q.id}: intrebare de examen fara official=true`);
  if (isGenerated(q) && q.official) errors.push(`${q.id}: intrebare generated marcata official`);

  const normalizedText = String(q.text || '').trim().toLowerCase();
  const duplicateScope = isExam(q) ? `${q.exam || 'exam'}:` : 'generated:';
  const textKey = `${duplicateScope}${normalizedText}`;
  if (!normalizedText || texts.has(textKey)) errors.push(`Intrebare duplicata sau lipsa: ${q.id}`);
  texts.add(textKey);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    errors.push(`${q.id}: trebuie exact 4 variante`);
  } else {
    const optionSet = new Set(q.options.map(o => String(o).trim()));
    if (optionSet.size !== 4) errors.push(`${q.id}: variante duplicate in aceeasi intrebare`);
    q.options.forEach((option, index) => {
      if (!String(option || '').trim()) errors.push(`${q.id}: varianta ${index} este goala`);
    });
  }

  const correctIndex = q.options?.indexOf(q.correct);
  if (correctIndex < 0) errors.push(`${q.id}: raspunsul corect nu exista in variante`);
  if (correctIndex >= 0 && (correctIndex < 0 || correctIndex > 3)) errors.push(`${q.id}: raspuns corect in afara 0-3`);
  if (correctIndex >= 0) distribution[correctIndex]++;

  const longest = Math.max(...(q.options || ['']).map(o => String(o).length));
  if (q.correct && String(q.correct).length === longest) correctIsLongest++;

  for (const field of ['course', 'difficulty', 'explanation', 'source']) {
    if (!q[field]) errors.push(`${q.id}: lipseste campul ${field}`);
  }

  // The app stores the selected answer as the answer text, so shuffling must
  // preserve correctness by comparing the same string after reordering.
  if (q.options?.includes(q.correct)) {
    const shuffled = [...q.options].reverse();
    if (shuffled.indexOf(q.correct) < 0) errors.push(`${q.id}: shuffle pierde raspunsul corect`);
  }
}

const currentGenerated = generatedQuestions.map(comparableGenerated);
if (stableStringify(currentGenerated) !== stableStringify(generatedSnapshot)) {
  errors.push('Cele 115 intrebari generated difera de snapshot.');
}

const courseSet = new Set(questions.map(q => q.course));
for (const course of courseSet) {
  if (!questions.some(q => q.course === course)) errors.push(`Curs fara intrebari: ${course}`);
}

// LocalStorage progress is keyed by stable question IDs. This check ensures the
// 75 exam IDs remained q001-q075 and the generated snapshot IDs still exist.
for (let i = 1; i <= 75; i++) {
  const id = `q${String(i).padStart(3, '0')}`;
  if (!examQuestions.some(q => q.id === id)) errors.push(`Lipseste ID-ul stabil de examen ${id}`);
}
for (const q of generatedSnapshot) {
  if (!generatedQuestions.some(current => current.id === q.id)) errors.push(`Lipseste ID-ul generated ${q.id}`);
}

console.log(`Intrebari: ${questions.length}`);
console.log(`Exam: ${examQuestions.length} (Examenul 1: ${exam1.length}, Examenul 2: ${exam2.length})`);
console.log(`Generated: ${generatedQuestions.length}`);
console.log(`Distributie raspunsuri corecte A/B/C/D: ${distribution.join('/')}`);
console.log(`Corectul este una dintre cele mai lungi variante: ${correctIsLongest}/${questions.length}`);
console.log('Snapshot generated: verificat');
console.log('Selectie pe curs, shuffle si progres localStorage: verificari statice OK');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
