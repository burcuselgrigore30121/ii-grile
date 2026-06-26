import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../js/questions.js', import.meta.url), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nthis.QUESTION_BANK = QUESTION_BANK;`, context);

const questions = context.QUESTION_BANK;
const errors = [];
const ids = new Set();
const texts = new Set();
const distribution = [0, 0, 0, 0];
let correctIsLongest = 0;

if (!Array.isArray(questions)) {
  throw new Error('QUESTION_BANK must be an array.');
}

for (const q of questions) {
  if (!q.id || ids.has(q.id)) errors.push(`ID duplicat sau lipsa: ${q.id}`);
  ids.add(q.id);

  const normalizedText = String(q.text || '').trim().toLowerCase();
  if (!normalizedText || texts.has(normalizedText)) errors.push(`Intrebare duplicata sau lipsa: ${q.id}`);
  texts.add(normalizedText);

  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${q.id}: trebuie exact 4 variante`);
  const correctIndex = q.options?.indexOf(q.correct);
  if (correctIndex < 0) errors.push(`${q.id}: raspunsul corect nu exista in variante`);
  if (correctIndex >= 0) distribution[correctIndex]++;

  const longest = Math.max(...(q.options || ['']).map(o => String(o).length));
  if (q.correct && String(q.correct).length === longest) correctIsLongest++;

  for (const field of ['course', 'difficulty', 'explanation', 'source']) {
    if (!q[field]) errors.push(`${q.id}: lipseste campul ${field}`);
  }
}

console.log(`Intrebari: ${questions.length}`);
console.log(`Distributie raspunsuri corecte A/B/C/D: ${distribution.join('/')}`);
console.log(`Corectul este una dintre cele mai lungi variante: ${correctIsLongest}/${questions.length}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

