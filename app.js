/* -----------------------------
   Helpers para crear preguntas
--------------------------------*/
function qMC(prompt, options, correctIndex, edu){return({type:"mc",prompt,options,correctIndex,edu})}
function qWORD(prompt, options, correctIndex, edu){return({type:"word",prompt,options,correctIndex,edu})}
function qSentence(answer, words){return({type:"sentence",prompt:"Ordena la oración:", answer, words})}

/* -----------------------------
   Estado y navegación
--------------------------------*/
let xp=0, hearts=5;
let currentLesson=null, idx=0;
let selectedIndex=null;
let sentencePicked=[];

// UI refs
const screens = {
  start: document.getElementById('screen-start'),
  map: document.getElementById('screen-map'),
  quiz: document.getElementById('screen-quiz'),
  finish: document.getElementById('screen-finish'),
};
const xpEl=document.getElementById('xp');
const heartsEl=document.getElementById('hearts');
const grid=document.getElementById('lessonGrid');
const btnStart=document.getElementById('btnStart');
const backToStart=document.getElementById('backToStart');
const backToMap=document.getElementById('backToMap');
const btnCheck=document.getElementById('btnCheck');
const btnContinue=document.getElementById('btnContinue');
const btnResetSentence=document.getElementById('btnResetSentence');
const promptEl=document.getElementById('prompt');
const choicesEl=document.getElementById('choices');
const feedbackEl=document.getElementById('feedback');
const progressBar=document.getElementById('progressBar');
const lessonBadge=document.getElementById('lessonBadge');
const earnedXpEl=document.getElementById('earnedXp');

function show(name){
  Object.values(screens).forEach(s=>s.classList.remove('active'));
  screens[name].classList.add('active');
}

// construir mapa (ejemplo simple con 1 lección demo)
function buildMap(){
  grid.innerHTML='';
  const lesson={id:1,title:"Demo",badge:"L1",items:[
    qMC("Si un desconocido te ofrece dulces, ¿qué haces?",
        ["Digo que no y busco un adulto.","Voy con él.","Le doy mi nombre."],
        0,"Nunca aceptes cosas de extraños."),
    qWORD("¿Qué número llamas en una emergencia?",["911","123","000"],0,"Aprende a pedir ayuda: 9-1-1.")
  ]};
  const card=document.createElement('article');
  card.className='lesson-card';
  card.innerHTML=`
    <div class="badge">${lesson.badge}</div>
    <h3>${lesson.title}</h3>
    <button class="btn btn-primary go">Empezar</button>
  `;
  card.querySelector('.go').onclick=()=>startLesson(lesson);
  grid.appendChild(card);
}

function startLesson(lesson){
  currentLesson=lesson;
  idx=0; selectedIndex=null; sentencePicked=[];
  lessonBadge.textContent=currentLesson.badge;
  progress(0);
  show('quiz');
  renderQuestion();
}

function progress(k){
  const total=currentLesson.items.length;
  progressBar.style.width=`${(k/total)*100}%`;
}

function renderQuestion(){
  feedback('');
  btnCheck.disabled=true; btnContinue.disabled=true;
  btnResetSentence.hidden=true;
  choicesEl.innerHTML='';
  const q=currentLesson.items[idx];

  if(q.type==='mc' || q.type==='word'){
    promptEl.textContent=q.prompt;
    q.options.forEach((t,i)=>{
      const b=document.createElement('button');
      b.className='choice';
      b.textContent=t;
      b.onclick=()=>{
        document.querySelectorAll('.choice').forEach(c=>c.classList.remove('selected'));
        b.classList.add('selected'); selectedIndex=i; btnCheck.disabled=false;
      };
      choicesEl.appendChild(b);
    });
  }

  if(q.type==='sentence'){
    promptEl.textContent=q.prompt;
    const board=document.createElement('div');
    board.className='sentence-board';
    board.id='board';
    choicesEl.appendChild(board);

    const bank=document.createElement('div');
    bank.className='bank';
    choicesEl.appendChild(bank);

    sentencePicked=[];
    [...q.words].forEach((w)=>{
      const chip=document.createElement('button');
      chip.className='chip';
      chip.textContent=w;
      chip.onclick=()=>{
        if(chip.dataset.used==='1') return;
        chip.dataset.used='1'; chip.style.opacity=.5;
        const picked=document.createElement('button');
        picked.className='chip';
        picked.textContent=w;
        picked.onclick=()=>{ chip.dataset.used='0'; chip.style.opacity=1; picked.remove();
          sentencePicked = sentencePicked.filter(x=>x!==w);
          btnCheck.disabled = sentencePicked.length===0;
        };
        board.appendChild(picked);
        sentencePicked.push(w);
        btnCheck.disabled=false;
      };
      bank.appendChild(chip);
    });

    btnResetSentence.hidden=false;
    btnResetSentence.onclick=()=>renderQuestion();
  }
}

function checkAnswer(){
  const q=currentLesson.items[idx];

  if(q.type==='mc' || q.type==='word'){
    const correct = selectedIndex===q.correctIndex;
    markChoices(q.correctIndex, selectedIndex);
    if(correct){
      xp+=10; feedback('¡Bien hecho!', true);
      xpEl.textContent=xp;
      setTimeout(nextQuestion,1000); // avanza automático
    }else{
      hearts--; feedback(q.edu || 'Inténtalo otra vez.', false);
      heartsEl.textContent=hearts;
      btnContinue.disabled=false; btnCheck.disabled=true;
    }
  }

  if(q.type==='sentence'){
    const built = sentencePicked.join(' ');
    const correct = normalize(built)===normalize(q.answer);
    if(correct){
      xp+=12; feedback('¡Oración correcta!', true);
      xpEl.textContent=xp;
      setTimeout(nextQuestion,1000);
    }else{
      feedback('Revisa el orden. 💡 Correcto: "'+q.answer+'"', false);
      btnContinue.disabled=false; btnCheck.disabled=true;
    }
  }
}

function markChoices(correctIdx, selectedIdx){
  document.querySelectorAll('.choice').forEach((c,i)=>{
    c.classList.remove('selected');
    if(i===correctIdx) c.classList.add('correct');
    if(i===selectedIdx && i!==correctIdx) c.classList.add('wrong');
  });
}

function normalize(s){ return s.toLowerCase().trim().replace(/\s+/g,' ') }

function feedback(msg, ok){
  feedbackEl.textContent=msg||'';
  feedbackEl.className='feedback ' + (msg? (ok?'ok':'bad') : '');
}

function nextQuestion(){
  idx++;
  const total=currentLesson.items.length;
  progress(idx);
  if(idx>=total){
    earnedXpEl.textContent = 10;
    show('finish');
  }else{
    selectedIndex=null; sentencePicked=[];
    renderQuestion();
  }
}

/* -----------------------------
   Wire up
--------------------------------*/
btnStart.onclick=()=>{ show('map'); };
backToStart.onclick=()=>{ show('start'); };
backToMap.onclick = ()=>{ show('map'); };

btnCheck.onclick=checkAnswer;
btnContinue.onclick=nextQuestion;

buildMap();
show('start');
