/* ---------------------------------------
   Helpers para crear preguntas
----------------------------------------*/
function qMC(prompt, options, correctIndex, edu){return({type:"mc",prompt,options,correctIndex,edu})}
function qWORD(prompt, options, correctIndex, edu){return({type:"word",prompt,options,correctIndex,edu})}
function qSentence(answer, words){return({type:"sentence",prompt:"Ordena la oración:", answer, words})}

/* ---------------------------------------
   Banco de lecciones (5 lecciones, 7 items)
----------------------------------------*/
const LESSONS = [
  {
    id: 1, title: "Conozcamos lo seguro", badge: "L1",
    items: [
      qMC("Si un desconocido te ofrece dulces, ¿qué haces?",
          ["Digo que no y busco un adulto.", "Voy con él.", "Le doy mi nombre y dirección."],
          0, "Nunca aceptes cosas de extraños. Busca un adulto de confianza."),
      qMC("Si te piden ir a un lugar sin tus padres…",
          ["Voy rápido.", "Digo NO y me alejo.", "Me escondo con el extraño."],
          1, "Si algo te incomoda, di NO y aléjate."),
      qMC("Alguien te pide tocarte para un juego.",
          ["No acepto y digo NO.", "Acepto si es amigo.", "Guardo el secreto."],
          0, "Tu cuerpo es tuyo. Si no quieres: NO."),
      qWORD("¿Qué número llamas en una emergencia?", ["911", "123", "000"], 0,
            "Aprende a pedir ayuda: 9-1-1."),
      qMC("¿Con quién puedes hablar si tienes miedo?",
          ["Con un adulto de confianza.", "Con cualquiera en la calle.", "Con nadie."],
          0, "Busca a tu mamá, papá, maestra o tutor."),
      qMC("Si te pierdes en un supermercado…",
          ["Busco a un trabajador con credencial.", "Salgo del lugar solo.", "Voy con un desconocido."],
          0, "Quédate en un lugar visible y pide ayuda."),
      qWORD("¿Qué palabra usas si algo no te gusta?", ["NO", "SÍ", "QUIZÁ"], 0,
            "Tú puedes decir NO.")
    ]
  },
  {
    id: 2, title: "Personas de confianza", badge: "L2",
    items: [
      qMC("Un adulto de confianza es…",
          ["Alguien que te cuida y te escucha.", "Cualquiera con sonrisa.", "Cualquiera con dulces."],
          0, "Adulto de confianza = familia/tutor/maestra."),
      qMC("Si alguien te pide un secreto que te incomoda…",
          ["Lo cuento a un adulto de confianza.", "Lo guardo siempre.", "Lo escribo en internet."],
          0, "Los secretos que incomodan se cuentan para estar seguro."),
      qWORD("¿A quién pides ayuda en la escuela?",
            ["Maestra", "Desconocido afuera", "Nadie"], 0, "Pide ayuda a tu maestra o personal escolar."),
      qMC("Si un vecino te pide entrar a su casa solo…",
          ["Voy con mis papás.", "Voy solo.", "No digo nada y voy."],
          0, "Siempre con tus papás/tutor."),
      qMC("Si alguien te habla por tu nombre desde un auto…",
          ["No me acerco y busco un adulto.", "Me acerco al auto.", "Subo si me conocen."],
          0, "No te acerques a autos de extraños."),
      qWORD("Si algo pasa, debo ___ a un adulto.", ["contar", "esconder", "ignorar"], 0,
            "Hablar ayuda a cuidarte."),
      qMC("¿Cuál es una señal segura?", ["Policía con uniforme", "Persona sin identificar", "Nadie"],
          0, "Pide ayuda a personas identificables.")
    ]
  },
  {
    id: 3, title: "Qué hacer si me pierdo", badge: "L3",
    items: [
      qMC("Si te pierdes en la calle…",
          ["Quédate donde te vean y llama a un adulto.", "Camina con un extraño.", "Te escondes."],
          0, "Quédate visible y pide ayuda."),
      qWORD("Busca a un ___ del lugar para pedir ayuda.",
            ["trabajador", "desconocido", "niño"], 0, "Trabajadores llevan credencial."),
      qMC("Si tienes un número de contacto…",
          ["Lo dices a un adulto del lugar.", "Lo gritas al aire.", "Lo publicas en internet."],
          0, "Comparte el número solo a personal de ayuda."),
      qMC("Si estás en un parque…",
          ["Ve a un punto de encuentro y espera.", "Te vas con cualquiera.", "Te escondes lejos."],
          0, "Acércate a puntos visibles."),
      qWORD("Si me siento asustado, respiro y busco ___", ["ayuda", "jugar", "correr"], 0,
            "Respira, piensa y busca ayuda."),
      qMC("¿Qué NO debes hacer?",
          ["Gritar si te sientes en peligro.", "Irte con un extraño.", "Buscar un adulto de confianza."],
          1, "Nunca vayas con extraños."),
      qMC("¿Qué dices si alguien insiste?",
          ["NO, me voy ahora.", "Bueno, un ratito.", "Está bien."],
          0, "Di NO con voz firme y aléjate.")
    ]
  },
  {
    id: 4, title: "Mi información segura", badge: "L4",
    items: [
      qMC("¿Qué datos puedes saber de memoria?",
          ["Nombre y teléfono de un adulto.", "Tu dirección para cualquiera.", "Contraseñas de tus papás."],
          0, "Aprende contacto de tus tutores."),
      qWORD("Internet: no compartas tu ___", ["dirección", "color favorito", "dibujo"], 0,
            "Direcciones y datos privados se guardan."),
      qMC("Si alguien te pide una foto rara…",
          ["Digo NO y aviso a un adulto.", "La mando si promete algo.", "La publico."],
          0, "Nunca envíes fotos que te incomoden."),
      qMC("¿Está bien hablar con extraños en línea?",
          ["Solo con un adulto presente.", "Siempre.", "Si tienen tu edad."],
          0, "Habla con guía de un adulto."),
      qWORD("Si recibes un mensaje malo, debes ___", ["contarlo", "guardarlo", "responder"], 0,
            "Cuéntalo, no respondas."),
      qMC("¿Es seguro compartir tu escuela en redes?",
          ["No, es privado.", "Sí, siempre.", "Solo con cualquiera."],
          0, "Cuida tu privacidad."),
      qMC("Si te piden salir sin avisar…",
          ["Aviso a mis tutores y no voy.", "Voy si parece amable.", "Voy rápido sin decir."],
          0, "Siempre avisa y decide con adultos.")
    ]
  },
  {
    id: 5, title: "Arma la oración", badge: "L5",
    items: [
      qSentence("Digo NO y busco ayuda", ["Digo","NO","y","busco","ayuda"]),
      qSentence("No hablo con extraños", ["No","hablo","con","extraños"]),
      qSentence("Me quedo en un lugar visible", ["Me","quedo","en","un","lugar","visible"]),
      qSentence("Llamo al nueve uno uno", ["Llamo","al","nueve","uno","uno"]),
      qSentence("No comparto mi dirección", ["No","comparto","mi","dirección"]),
      qSentence("Busco a un adulto de confianza", ["Busco","a","un","adulto","de","confianza"]),
      qSentence("Si tengo miedo hablo con mamá o papá", ["Si","tengo","miedo","hablo","con","mamá","o","papá"])
    ]
  }
];

/* ---------------------------------------
   Estado y refs de UI
----------------------------------------*/
let xp=0;
let hearts=5;                 // Se resetea al iniciar cada lección
let currentLesson=null;
let idx=0;
let selectedIndex=null;
let sentencePicked=[];
let pendingAdvance=null;      // para limpiar el auto-avance si te vas al mapa
const AUTO_MS = 900;

// Pantallas
const screens = {
  start:  document.getElementById('screen-start'),
  map:    document.getElementById('screen-map'),
  quiz:   document.getElementById('screen-quiz'),
  finish: document.getElementById('screen-finish'),
};

// HUD
const xpEl       = document.getElementById('xp');
const heartsEl   = document.getElementById('hearts');

// Controles
const grid             = document.getElementById('lessonGrid');
const btnStart         = document.getElementById('btnStart');
const backToStart      = document.getElementById('backToStart');
const backToMap        = document.getElementById('backToMap');
const btnCheck         = document.getElementById('btnCheck');
const btnContinue      = document.getElementById('btnContinue');
const btnResetSentence = document.getElementById('btnResetSentence');

// Quiz UI
const promptEl    = document.getElementById('prompt');
const choicesEl   = document.getElementById('choices');
const feedbackEl  = document.getElementById('feedback');
const progressBar = document.getElementById('progressBar');
const lessonBadge = document.getElementById('lessonBadge');
const earnedXpEl  = document.getElementById('earnedXp');

/* ---------------------------------------
   Navegación y helpers
----------------------------------------*/
function show(name){
  Object.values(screens).forEach(s=>s.classList.remove('active'));
  screens[name].classList.add('active');
}
function clearAdvance(){
  if(pendingAdvance){ clearTimeout(pendingAdvance); pendingAdvance=null; }
}
function normalize(s){ return (s||"").toLowerCase().trim().replace(/\s+/g,' ') }
function feedback(msg, ok){
  feedbackEl.textContent = msg||'';
  feedbackEl.className   = 'feedback ' + (msg? (ok?'ok':'bad') : '');
}

/* ---------------------------------------
   Construir mapa de lecciones
----------------------------------------*/
function buildMap(){
  grid.innerHTML = '';
  LESSONS.forEach(lesson=>{
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.innerHTML = `
      <div class="badge">${lesson.badge}</div>
      <h3>${lesson.title}</h3>
      <button class="btn btn-primary go">Empezar</button>
    `;
    card.querySelector('.go').onclick = ()=>startLesson(lesson.id);
    grid.appendChild(card);
  });
}

/* ---------------------------------------
   Iniciar lección / Progreso
----------------------------------------*/
function startLesson(id){
  clearAdvance();
  currentLesson = LESSONS.find(l=>l.id===id);
  idx = 0;
  selectedIndex = null;
  sentencePicked = [];
  hearts = 5;                        // ♥ reset por lección
  heartsEl.textContent = hearts;     // ♥ UI inmediata
  lessonBadge.textContent = currentLesson.badge;
  progress(0);
  show('quiz');
  renderQuestion();
}

function progress(k){
  const total = currentLesson.items.length;
  progressBar.style.width = `${(k/total)*100}%`;
}

/* ---------------------------------------
   Render de preguntas
----------------------------------------*/
function renderQuestion(){
  clearAdvance();
  feedback('');
  btnCheck.disabled = true;
  btnContinue.disabled = true;
  btnResetSentence.hidden = true;
  choicesEl.innerHTML = '';

  const q = currentLesson.items[idx];

  // Opción múltiple / palabra
  if(q.type==='mc' || q.type==='word'){
    promptEl.textContent = q.prompt;
    q.options.forEach((t,i)=>{
      const b = document.createElement('button');
      b.className = 'choice';
      b.textContent = t;
      b.onclick = ()=>{
        document.querySelectorAll('.choice').forEach(c=>c.classList.remove('selected'));
        b.classList.add('selected');
        selectedIndex = i;
        btnCheck.disabled = false;
      };
      choicesEl.appendChild(b);
    });
    return;
  }

  // Construir oración
  if(q.type==='sentence'){
    promptEl.textContent = q.prompt;
    const board = document.createElement('div');
    board.className = 'sentence-board';
    board.id = 'board';
    choicesEl.appendChild(board);

    const bank = document.createElement('div');
    bank.className = 'bank';
    choicesEl.appendChild(bank);

    sentencePicked = [];
    q.words.forEach(w=>{
      const chip = document.createElement('button');
      chip.className = 'chip';
      chip.textContent = w;
      chip.onclick = ()=>{
        if(chip.dataset.used==='1') return;
        chip.dataset.used='1';
        chip.style.opacity=.5;

        const picked = document.createElement('button');
        picked.className = 'chip';
        picked.textContent = w;
        picked.onclick = ()=>{
          chip.dataset.used='0'; chip.style.opacity=1;
          picked.remove();
          sentencePicked = sentencePicked.filter(x=>x!==w);
          btnCheck.disabled = sentencePicked.length===0;
        };
        board.appendChild(picked);
        sentencePicked.push(w);
        btnCheck.disabled = false;
      };
      bank.appendChild(chip);
    });

    btnResetSentence.hidden = false;
    btnResetSentence.onclick = ()=>renderQuestion(); // resetea la oración actual
  }
}

/* ---------------------------------------
   Corrección y avance
----------------------------------------*/
function markChoices(correctIdx, selectedIdx){
  document.querySelectorAll('.choice').forEach((c,i)=>{
    c.classList.remove('selected');
    if(i===correctIdx) c.classList.add('correct');
    if(i===selectedIdx && i!==correctIdx) c.classList.add('wrong');
  });
}

function checkAnswer(){
  const q = currentLesson.items[idx];

  // MC / WORD
  if(q.type==='mc' || q.type==='word'){
    const correct = selectedIndex===q.correctIndex;
    markChoices(q.correctIndex, selectedIndex);

    if(correct){
      xp += 10;
      xpEl.textContent = xp;
      feedback('¡Bien hecho!', true);
      btnCheck.disabled = true;
      btnContinue.disabled = true;     // auto-avanza
      pendingAdvance = setTimeout(nextQuestion, AUTO_MS);
    }else{
      hearts--;                         // ♥ baja de inmediato
      heartsEl.textContent = hearts;    // ♥ UI inmediata
      feedback(q.edu || 'Inténtalo otra vez.', false);
      btnContinue.disabled = false;     // NO avanza solo
      btnCheck.disabled = true;

      if(hearts<=0){
        // “derrota” suave: vuelve al mapa
        feedback('Sin intentos. Volvemos al mapa.', false);
        setTimeout(()=>{ show('map'); }, 900);
      }
    }
    return;
  }

  // SENTENCE
  if(q.type==='sentence'){
    const built   = sentencePicked.join(' ');
    const correct = normalize(built)===normalize(q.answer);

    if(correct){
      xp += 12;
      xpEl.textContent = xp;
      feedback('¡Oración correcta!', true);
      btnCheck.disabled = true;
      btnContinue.disabled = true;
      pendingAdvance = setTimeout(nextQuestion, AUTO_MS);
    }else{
      hearts--;
      heartsEl.textContent = hearts;   // ♥ inmediata
      feedback('Revisa el orden. 💡 Correcto: "'+q.answer+'"', false);
      btnContinue.disabled = false;
      btnCheck.disabled = true;

      if(hearts<=0){
        feedback('Sin intentos. Volvemos al mapa.', false);
        setTimeout(()=>{ show('map'); }, 900);
      }
    }
  }
}

function nextQuestion(){
  clearAdvance();
  idx++;
  const total = currentLesson.items.length;
  progress(idx);
  if(idx>=total){
    earnedXpEl.textContent = 10; // referencia visual
    show('finish');
  }else{
    selectedIndex=null;
    sentencePicked=[];
    renderQuestion();
  }
}

/* ---------------------------------------
   Wire-up
----------------------------------------*/
btnStart.onclick    = ()=>{ show('map'); };
backToStart.onclick = ()=>{ show('start'); };
backToMap.onclick   = (e)=>{
  e.preventDefault();
  clearAdvance();           // cancela auto-avance si estaba corriendo
  show('map');
};

btnCheck.onclick    = checkAnswer;
btnContinue.onclick = nextQuestion;

// Arranque
buildMap();
show('start');
