const APP=document.getElementById('app');
const STORE='industrialInformaticsQuiz_v2';
const LEGACY_STORE='ii_quiz_state_v1';
const DEFAULT_STATE={version:2,stats:{},history:[],examScores:[],totalSessions:0,bestScore:0,settings:{}};
let state=loadState(),session=null,timerHandle=null;
const COURSES=[...new Set(QUESTION_BANK.map(q=>q.course))];

function normalizeState(raw){const base=structuredClone(DEFAULT_STATE),x=raw&&typeof raw==='object'?raw:{};base.stats=x.stats&&typeof x.stats==='object'?x.stats:{};base.history=Array.isArray(x.history)?x.history:[];base.examScores=Array.isArray(x.examScores)?x.examScores:base.history.filter(h=>h.mode==='exam');base.totalSessions=Number.isFinite(x.totalSessions)?x.totalSessions:base.history.length;base.bestScore=Number.isFinite(x.bestScore)?x.bestScore:base.examScores.reduce((m,h)=>Math.max(m,h.score||0),0);base.settings=x.settings&&typeof x.settings==='object'?x.settings:{};return base}
function loadState(){try{const current=JSON.parse(localStorage.getItem(STORE));if(current&&current.stats)return normalizeState(current)}catch{}try{const legacy=JSON.parse(localStorage.getItem(LEGACY_STORE));if(legacy&&legacy.stats){const migrated=normalizeState(legacy);localStorage.setItem(STORE,JSON.stringify(migrated));return migrated}}catch{}return structuredClone(DEFAULT_STATE)}
function saveState(){try{localStorage.setItem(STORE,JSON.stringify(state))}catch{}}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function uniqueByText(a){const seen=new Set;return a.filter(q=>{const k=q.text.trim().toLowerCase();if(seen.has(k))return false;seen.add(k);return true})}
function pct(a,b){return b?Math.round(a*100/b):0}
function statFor(id){return state.stats[id]||{seen:0,correct:0,wrong:0,streak:0,lastAnsweredAt:null,markedForReview:false}}
function activeMistakes(){return QUESTION_BANK.filter(q=>{const s=statFor(q.id);return s.wrong>0&&s.streak<2})}
function answeredTotal(){return Object.values(state.stats).filter(s=>s.seen>0).length}
function globalTotals(){const a=Object.values(state.stats);return {seen:a.reduce((n,s)=>n+s.seen,0),correct:a.reduce((n,s)=>n+s.correct,0),wrong:a.reduce((n,s)=>n+s.wrong,0)}}
function record(q,ok){const s=statFor(q.id);s.seen++;s.lastAnsweredAt=new Date().toISOString();if(ok){s.correct++;s.streak++;if(s.streak>=2)s.markedForReview=false}else{s.wrong++;s.streak=0;s.markedForReview=true}state.stats[q.id]=s;saveState()}
function clearTimers(){if(timerHandle)clearInterval(timerHandle);timerHandle=null}
function goHome(){clearTimers();session=null;renderHome()}
document.getElementById('homeBtn').onclick=goHome;
document.getElementById('statsBtn').onclick=renderStats;

function renderHome(){
 const t=globalTotals(),official=QUESTION_BANK.filter(q=>q.official).length,mist=activeMistakes().length;
 APP.innerHTML=`
 <div class="notice"><strong>Format verificat:</strong> toate grilele au patru variante și un singur răspuns corect. Marcajele scrise de mână din fotografii nu au fost tratate ca barem; răspunsurile tehnic greșite au fost corectate.</div>
 <section class="stats-grid">
  <div class="stat"><div class="v">${QUESTION_BANK.length}</div><div class="k">întrebări totale</div></div>
  <div class="stat"><div class="v">${official}</div><div class="k">din subiectele fotografiate</div></div>
  <div class="stat"><div class="v">${QUESTION_BANK.length-official}</div><div class="k">grile noi din cursuri</div></div>
  <div class="stat"><div class="v">${answeredTotal()}</div><div class="k">întrebări întâlnite</div></div>
  <div class="stat"><div class="v">${pct(t.correct,t.seen)}%</div><div class="k">acuratețe totală</div></div>
  <div class="stat"><div class="v">${mist}</div><div class="k">greșeli active</div></div>
 </section>
 <section class="mode-grid">
  <article class="card mode-card"><h2>Simulare examen</h2><p>25, 30 sau 50 de grile, ordine aleatoare, răspunsuri amestecate și rezultat doar la final.</p><div class="meta"><span class="tag">fără feedback</span><span class="tag">cronometru opțional</span></div><button class="btn primary" onclick="openExamSetup()">Configurează examenul</button></article>
  <article class="card mode-card"><h2>Antrenament adaptiv</h2><p>Prioritizează grilele greșite, apoi pe cele nevăzute și pe cele cu rată slabă de reușită.</p><div class="meta"><span class="tag">25 grile</span><span class="tag">feedback rapid</span></div><button class="btn primary" onclick="startAdaptive(25)">Începe antrenamentul</button></article>
  <article class="card mode-card"><h2>Greșelile mele</h2><p>Reiei întrebările ratate. O grilă este considerată consolidată după două răspunsuri corecte consecutive.</p><div class="meta"><span class="tag">${mist} active</span></div><button class="btn primary" ${mist?'':'disabled'} onclick="startMistakes()">Refă greșelile</button></article>
  <article class="card mode-card"><h2>Antrenament pe cursuri</h2><p>Alegi exact capitolul și numărul de întrebări. Progresul este calculat separat pentru fiecare curs.</p><div class="meta"><span class="tag">${COURSES.length} capitole</span></div><button class="btn primary" onclick="renderCourses()">Alege cursul</button></article>
  <article class="card mode-card"><h2>Subiecte fotografiate</h2><p>Subiectul A cu 25 de grile și subiectul B cu 50 de grile, în variantă de examen sau antrenament.</p><div class="meta"><span class="tag">75 originale</span></div><button class="btn primary" onclick="renderOriginals()">Deschide subiectele</button></article>
  <article class="card mode-card"><h2>Statistici și progres</h2><p>Vezi acuratețea pe capitole, istoricul sesiunilor și poți exporta sau importa progresul.</p><div class="meta"><span class="tag">salvare locală</span></div><button class="btn primary" onclick="renderStats()">Vezi statisticile</button></article>
 </section>`;
}

function openExamSetup(){
 APP.innerHTML=`<section class="card"><div class="section-head"><div><h2>Configurare simulare examen</h2><p>Întrebările și variantele sunt reamestecate la fiecare pornire.</p></div><button class="btn" onclick="goHome()">Înapoi</button></div>
 <div class="form-grid">
  <div class="field"><label>Număr de întrebări</label><select id="examCount"><option>25</option><option>30</option><option selected>50</option><option value="all">Toate</option></select></div>
  <div class="field"><label>Sursa grilelor</label><select id="examSource"><option value="all">Toată banca</option><option value="official">Doar subiectele fotografiate</option><option value="generated">Doar grilele noi din cursuri</option></select></div>
  <div class="field"><label>Dificultate</label><select id="examDifficulty"><option value="all">Mixtă</option><option value="mediu">Mediu și dificil</option><option value="ușor">Mai ales recapitulare</option></select></div>
  <div class="field"><label>Cronometru</label><select id="examTimer"><option value="0">Fără limită</option><option value="30">30 minute</option><option value="45">45 minute</option><option value="60">60 minute</option></select><small>La expirare, examenul se încheie automat.</small></div>
 </div><div class="setup-actions"><button class="btn" onclick="goHome()">Renunță</button><button class="btn primary" onclick="startConfiguredExam()">Pornește examenul</button></div></section>`;
}
function startConfiguredExam(){
 const countValue=document.getElementById('examCount').value,src=document.getElementById('examSource').value,diff=document.getElementById('examDifficulty').value,mins=+document.getElementById('examTimer').value;
 let pool=uniqueByText(QUESTION_BANK.filter(q=>src==='all'||(src==='official'&&q.official)||(src==='generated'&&!q.official)));
 if(diff==='mediu')pool=pool.filter(q=>q.difficulty!=='ușor');
 if(diff==='ușor'){const easy=pool.filter(q=>q.difficulty==='ușor'),other=pool.filter(q=>q.difficulty!=='ușor');pool=[...easy,...shuffle(other).slice(0,Math.ceil(easy.length/2))]}
 const n=countValue==='all'?pool.length:+countValue;
 startSession(balancedSample(pool,Math.min(n,pool.length)),{mode:'exam',name:'Simulare examen',timer:mins*60});
}
function balancedSample(pool,n){
 const groups={};shuffle(pool).forEach(q=>(groups[q.course]??=[]).push(q));const keys=shuffle(Object.keys(groups)),out=[];
 while(out.length<n){let moved=false;for(const k of keys){if(groups[k].length&&out.length<n){out.push(groups[k].pop());moved=true}}if(!moved)break}
 return shuffle(out);
}
function weightedSample(pool,n){
 const bag=pool.map(q=>{const s=statFor(q.id);let w=1;if(!s.seen)w+=4;if(s.wrong)w+=Math.min(8,s.wrong*2);if(s.seen&&s.correct/s.seen<.65)w+=3;if(s.streak>=2)w*=.3;return {q,w}}),out=[];
 while(out.length<n&&bag.length){const sum=bag.reduce((a,x)=>a+x.w,0);let r=Math.random()*sum,i=0;for(;i<bag.length;i++){r-=bag[i].w;if(r<=0)break}out.push(bag.splice(Math.min(i,bag.length-1),1)[0].q)}return out;
}
function startAdaptive(n){const p=uniqueByText(QUESTION_BANK);startSession(weightedSample(p,Math.min(n,p.length)),{mode:'train',name:'Antrenament adaptiv'})}
function startMistakes(){const p=uniqueByText(activeMistakes());if(p.length)startSession(weightedSample(p,p.length),{mode:'train',name:'Refacerea greșelilor'})}

function renderCourses(){
 const cards=COURSES.map((c,i)=>{const qs=QUESTION_BANK.filter(q=>q.course===c),ss=qs.map(q=>statFor(q.id)),seen=ss.reduce((a,s)=>a+s.seen,0),ok=ss.reduce((a,s)=>a+s.correct,0);return `<article class="course-item"><div class="course-top"><div class="course-name">${esc(c)}</div><div class="course-count">${qs.length} grile</div></div><div class="bar"><i style="width:${pct(ok,seen)}%"></i></div><div class="course-count">Acuratețe: ${pct(ok,seen)}% · Întâlnite: ${ss.filter(s=>s.seen).length}/${qs.length}</div><div class="course-actions"><button class="btn small" onclick="startCourse(${i},10)">10 grile</button><button class="btn small" onclick="startCourse(${i},20)">20 grile</button><button class="btn small primary" onclick="startCourse(${i},999)">Toate</button></div></article>`}).join('');
 APP.innerHTML=`<section><div class="section-head"><div><h2>Antrenament pe cursuri</h2><p>Alege capitolul. Răspunsul corect și explicația apar imediat.</p></div><button class="btn" onclick="goHome()">Înapoi</button></div><div class="course-grid">${cards}</div></section>`;
}
function startCourse(i,n){const c=COURSES[i],p=uniqueByText(QUESTION_BANK.filter(q=>q.course===c));startSession(shuffle(p).slice(0,Math.min(n,p.length)),{mode:'train',name:c})}
function renderOriginals(){
 const mk=(e,n)=>`<article class="card mode-card"><h2>Subiectul ${e}</h2><p>${n} întrebări transcrise din fotografii. Variantele se amestecă, dar formularea este păstrată.</p><div class="meta"><span class="tag">${n} grile</span><span class="tag">un singur răspuns</span></div><div style="display:flex;gap:8px"><button class="btn" onclick="startOriginal('${e}','train')">Antrenament</button><button class="btn primary" onclick="startOriginal('${e}','exam')">Examen</button></div></article>`;
 APP.innerHTML=`<section><div class="section-head"><div><h2>Subiecte fotografiate</h2><p>Răspunsurile au fost verificate conceptual; marcajele de pe foi nu reprezintă un barem sigur.</p></div><button class="btn" onclick="goHome()">Înapoi</button></div><div class="mode-grid">${mk('A',25)}${mk('B',50)}</div></section>`;
}
function startOriginal(e,mode){const p=QUESTION_BANK.filter(q=>q.exam===e);startSession(shuffle(p),{mode,name:`Subiectul ${e} – ${mode==='exam'?'examen':'antrenament'}`})}

function startSession(qs,opts){
 clearTimers();session={...opts,questions:qs.map(q=>({...q,displayOptions:shuffle(q.options)})),index:0,answers:{},locked:{},started:Date.now(),remaining:opts.timer||0};renderQuestion();
 if(session.remaining){timerHandle=setInterval(()=>{session.remaining--;const el=document.getElementById('timer');if(el)el.textContent=formatTime(session.remaining);if(session.remaining<=0){clearTimers();finishSession(true)}},1000)}
}
function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
function renderQuestion(){
 const q=session.questions[session.index],chosen=session.answers[q.id],locked=!!session.locked[q.id],isExam=session.mode==='exam',isLast=session.index===session.questions.length-1;
 const opts=q.displayOptions.map((o,i)=>{let cls='option';if(chosen===o)cls+=' selected';if(locked){if(o===q.correct)cls+=' correct';else if(chosen===o)cls+=' wrong'}return `<button class="${cls}" ${locked?'disabled':''} onclick="chooseAnswer(${JSON.stringify(o).replace(/"/g,'&quot;')})"><span class="letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`}).join('');
 let fb='';if(locked){const ok=chosen===q.correct;fb=`<div class="feedback ${ok?'good':'bad'}"><strong>${ok?'Corect.':'Greșit. Răspuns corect: '+esc(q.correct)}</strong><span>${esc(q.explanation)}</span>${q.note?`<div class="feedback-note">Notă: ${esc(q.note)}</div>`:''}</div>`}
 APP.innerHTML=`<section class="quiz-wrap"><div class="quiz-head"><div><div class="quiz-title">${esc(session.name)}</div><div class="q-badges"><span class="tag">${esc(q.course)}</span><span class="tag">${q.official?'din subiect':'grilă nouă'}</span><span class="tag">${esc(q.difficulty)}</span></div></div><div class="quiz-meta"><div>Întrebarea ${session.index+1} / ${session.questions.length}</div>${session.remaining?`<div id="timer" class="timer">${formatTime(session.remaining)}</div>`:''}</div></div><div class="progress"><i style="width:${(session.index+1)*100/session.questions.length}%"></i></div><article class="question-card"><div class="q-text">${esc(q.text)}</div><div class="options">${opts}</div>${fb}</article><div class="quiz-nav"><button class="btn" ${session.index===0?'disabled':''} onclick="moveQuestion(-1)">Înapoi</button><div class="nav-mid"><button class="btn danger" onclick="confirmExit()">Ieși</button>${isExam?`<button class="btn primary" onclick="confirmFinish()">Finalizează</button>`:''}</div>${!isExam&&locked&&isLast?`<button class="btn primary" onclick="finishSession(false)">Finalizează</button>`:`<button class="btn" ${isLast?'disabled':''} onclick="moveQuestion(1)">${locked&&!isExam?'Următoarea întrebare':'Următoarea'}</button>`}</div></section>`;
}
function chooseAnswer(option){
 const q=session.questions[session.index];if(session.locked[q.id])return;session.answers[q.id]=option;
 if(session.mode==='train'){session.locked[q.id]=true;record(q,option===q.correct)}
 renderQuestion()
}
function moveQuestion(d){session.index=Math.max(0,Math.min(session.questions.length-1,session.index+d));renderQuestion()}
function confirmExit(){showDialog('Ieșire din sesiune','Progresul acestei sesiuni neterminate nu va apărea în istoric.',()=>goHome())}
function confirmFinish(){showDialog('Finalizezi examenul?','După finalizare vei vedea scorul, răspunsurile greșite și explicațiile.',()=>finishSession(false))}
function showDialog(title,text,onOk){document.body.insertAdjacentHTML('beforeend',`<div class="dialog-back" id="dlg"><div class="dialog"><h3>${esc(title)}</h3><p>${esc(text)}</p><div class="row"><button class="btn" onclick="document.getElementById('dlg').remove()">Anulează</button><button class="btn primary" id="dlgOk">Continuă</button></div></div></div>`);document.getElementById('dlgOk').onclick=()=>{document.getElementById('dlg').remove();onOk()}}
function finishSession(timeout=false){
 clearTimers();const qs=session.questions;let correct=0,answered=0;const errors=[];
 for(const q of qs){const a=session.answers[q.id];if(a!==undefined){answered++;if(a===q.correct)correct++;else errors.push({q,a})}else errors.push({q,a:null});if(session.mode==='exam'&&a!==undefined)record(q,a===q.correct)}
 const score=pct(correct,qs.length),duration=Math.max(1,Math.round((Date.now()-session.started)/1000));
 const summary={date:new Date().toISOString(),name:session.name,score,correct,total:qs.length,duration,mode:session.mode};
 state.totalSessions=(state.totalSessions||0)+1;state.history.unshift(summary);state.history=state.history.slice(0,30);
 if(session.mode==='exam'){state.examScores.unshift(summary);state.examScores=state.examScores.slice(0,50);state.bestScore=Math.max(state.bestScore||0,score)}
 saveState();
 APP.innerHTML=`<section class="card"><div class="result-score"><div class="big">${score}%</div><h2>${correct} / ${qs.length} corecte</h2><p>${answered} răspunsuri date · ${Math.floor(duration/60)} min ${duration%60} sec${timeout?' · timpul a expirat':''}</p><div class="result-actions"><button class="btn" onclick="goHome()">Acasă</button><button class="btn" onclick="renderStats()">Statistici</button><button class="btn primary" onclick="repeatSession()">Repetă setul</button></div></div><div class="section-head"><div><h2>Ce trebuie revăzut</h2><p>${errors.length?`${errors.length} răspunsuri greșite sau lipsă.`:'Nu ai greșit nicio întrebare.'}</p></div></div>${errors.length?`<div class="error-list">${errors.map((x,i)=>`<article class="error-item"><h4>${i+1}. ${esc(x.q.text)}</h4><div class="ans-line"><b>Răspunsul tău:</b> <span class="bad-text">${x.a===null?'Fără răspuns':esc(x.a)}</span></div><div class="ans-line"><b>Răspuns corect:</b> <span class="ok-text">${esc(x.q.correct)}</span></div><div class="ans-line">${esc(x.q.explanation)}</div>${x.q.note?`<div class="feedback-note">Notă: ${esc(x.q.note)}</div>`:''}</article>`).join('')}</div>`:'<div class="empty">Set rezolvat integral corect.</div>'}</section>`;
 session.lastQuestions=qs.map(({displayOptions,...q})=>q);session.finished=true;
}
function repeatSession(){const qs=session.lastQuestions||session.questions;startSession(shuffle(qs),{mode:session.mode,name:session.name,timer:0})}

function renderStats(){
 clearTimers();const rows=COURSES.map(c=>{const qs=QUESTION_BANK.filter(q=>q.course===c),ss=qs.map(q=>statFor(q.id)),seen=ss.reduce((a,s)=>a+s.seen,0),ok=ss.reduce((a,s)=>a+s.correct,0),wrong=ss.reduce((a,s)=>a+s.wrong,0);return `<tr><td>${esc(c)}</td><td>${qs.length}</td><td>${ss.filter(s=>s.seen).length}</td><td>${ok}</td><td>${wrong}</td><td><b>${pct(ok,seen)}%</b></td></tr>`}).join('');
 const hist=state.history.length?state.history.map(h=>`<div class="history-row"><div><b>${esc(h.name)}</b><div class="course-count">${new Date(h.date).toLocaleString('ro-RO')} · ${Math.floor(h.duration/60)}m ${h.duration%60}s</div></div><div><b>${h.score}%</b><div class="course-count">${h.correct}/${h.total}</div></div></div>`).join(''):'<div class="empty">Nu există încă sesiuni finalizate.</div>';
 const total=globalTotals(),examAvg=state.examScores.length?Math.round(state.examScores.reduce((a,h)=>a+h.score,0)/state.examScores.length):0,learned=Object.values(state.stats).filter(s=>s.streak>=2).length;
 APP.innerHTML=`<section><div class="section-head"><div><h2>Statistici și progres</h2><p>Greșelile active dispar după două răspunsuri corecte consecutive.</p></div><button class="btn" onclick="goHome()">Înapoi</button></div><section class="stats-grid"><div class="stat"><div class="v">${pct(total.correct,total.seen)}%</div><div class="k">acuratețe generală</div></div><div class="stat"><div class="v">${activeMistakes().length}</div><div class="k">greșeli active</div></div><div class="stat"><div class="v">${learned}</div><div class="k">întrebări consolidate</div></div><div class="stat"><div class="v">${state.totalSessions||0}</div><div class="k">sesiuni finalizate</div></div><div class="stat"><div class="v">${state.bestScore||0}%</div><div class="k">cea mai bună notă</div></div><div class="stat"><div class="v">${examAvg}%</div><div class="k">media examenelor</div></div></section><article class="card"><h3>Progres pe capitole</h3><div class="table-wrap"><table class="stats-table"><thead><tr><th>Capitol</th><th>Grile</th><th>Întâlnite</th><th>Corecte</th><th>Greșite</th><th>Acuratețe</th></tr></thead><tbody>${rows}</tbody></table></div></article><article class="card" style="margin-top:16px"><h3>Istoric recent</h3><div class="history">${hist}</div></article><article class="card" style="margin-top:16px"><h3>Administrare progres</h3><p style="color:var(--muted)">Exportul permite mutarea statisticilor în alt browser. Fișierul nu conține întrebările, doar progresul.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="exportProgress()">Exportă progresul</button><button class="btn" onclick="document.getElementById('importFile').click()">Importă progresul</button><input class="hidden" id="importFile" type="file" accept="application/json" onchange="importProgress(event)"><button class="btn danger" onclick="resetProgress()">Șterge progresul</button></div></article></section>`;
}
function exportProgress(){const blob=new Blob([JSON.stringify(normalizeState(state),null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='progres_informatica_industriala.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
function importProgress(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!x||typeof x!=='object'||!x.stats||typeof x.stats!=='object')throw 0;for(const [id,s] of Object.entries(x.stats)){if(!QUESTION_BANK.some(q=>q.id===id)||!Number.isFinite(s.seen)||!Number.isFinite(s.correct)||!Number.isFinite(s.wrong))throw 0}state=normalizeState(x);saveState();renderStats()}catch{alert('Fișierul nu conține un progres valid.')}};r.readAsText(f)}
function resetProgress(){showDialog('Ștergi tot progresul?','Statisticile, greșelile și istoricul vor fi eliminate din acest browser.',()=>{state=structuredClone(DEFAULT_STATE);saveState();renderStats()})}

renderHome();
