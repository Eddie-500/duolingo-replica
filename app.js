/* ---------------------------------------
   Constructores de preguntas
----------------------------------------*/
const XP_GAIN = { mc:10, word:10, sentence:12 };
function qMC(prompt, options, correctIndex, edu){return({type:"mc",prompt,options,correctIndex,edu})}
function qWORD(prompt, options, correctIndex, edu){return({type:"word",prompt,options,correctIndex,edu})}
function qSentence(answer, words){return({type:"sentence",prompt:"Ordena la oración:", answer, words})}

/* ---------------------------------------
   Banco de lecciones ampliado
----------------------------------------*/
const LESSONS = [
  {
    id: 1, title: "Conozcamos lo seguro", badge: "L1",
    items: [
      qMC("Si un desconocido te ofrece dulces, ¿qué haces?",
          ["Digo que no y busco un adulto.", "Voy con él.", "Le doy mi nombre y dirección."],
          0, "Nunca aceptes cosas de extraños. Busca un adulto de confianza y aléjate."),
      qMC("Si te piden ir a un lugar sin tus padres…",
          ["Voy rápido.", "Digo NO y me alejo.", "Me escondo con el extraño."],
          1, "Si algo te incomoda, di NO y aléjate hacia un espacio seguro."),
      qMC("Alguien te pide tocarte para un juego.",
          ["No acepto y digo NO.", "Acepto si es amigo.", "Guardo el secreto."],
          0, "Tu cuerpo es tuyo. Si no quieres: NO y avisa a un adulto."),
      qWORD("¿Qué número llamas en una emergencia?", ["911", "123", "000"], 0,
            "Aprende a pedir ayuda: 9-1-1."),
      qMC("¿Con quién puedes hablar si tienes miedo?",
          ["Con un adulto de confianza.", "Con cualquiera en la calle.", "Con nadie."],
          0, "Busca a tu mamá, papá, maestra o tutor para sentirte acompañado."),
      qMC("Si te pierdes en un supermercado…",
          ["Busco a un trabajador con credencial.", "Salgo del lugar solo.", "Voy con un desconocido."],
          0, "Quédate en un lugar visible, di tu nombre y espera a tus tutores."),
      qWORD("¿Qué palabra usas si algo no te gusta?", ["NO", "SÍ", "QUIZÁ"], 0,
            "Tú puedes decir NO con voz firme.")
    ]
  },
  {
    id: 2, title: "Personas de confianza", badge: "L2",
    items: [
      qMC("Un adulto de confianza es…",
          ["Alguien que te cuida y te escucha.", "Cualquiera con sonrisa.", "Cualquiera con dulces."],
          0, "Adulto de confianza = familia, tutor o maestra que te protege."),
      qMC("Si alguien te pide un secreto que te incomoda…",
          ["Lo cuento a un adulto de confianza.", "Lo guardo siempre.", "Lo escribo en internet."],
          0, "Los secretos que incomodan se cuentan para estar seguro."),
      qWORD("¿A quién pides ayuda en la escuela?",
            ["Maestra", "Desconocido afuera", "Nadie"], 0, "Pide ayuda a tu maestra o personal escolar."),
      qMC("Si un vecino te pide entrar a su casa solo…",
          ["Voy con mis papás.", "Voy solo.", "No digo nada y voy."],
          0, "Si visitas a alguien, que sea con tus papás o tutores."),
      qMC("Si alguien te habla por tu nombre desde un auto…",
          ["No me acerco y busco un adulto.", "Me acerco al auto.", "Subo si me conocen."],
          0, "Aléjate de autos desconocidos y busca ayuda."),
      qWORD("Si algo pasa, debo ___ a un adulto.", ["contar", "esconder", "ignorar"], 0,
            "Hablar ayuda a cuidarte."),
      qMC("¿Cuál es una señal segura?", ["Policía con uniforme", "Persona sin identificar", "Nadie"],
          0, "Pide ayuda a personas identificables y con credencial."),
      qMC("Si alguien insiste en guardar un secreto incómodo…",
          ["Lo cuento aunque me pidan callar.", "Lo guardo si me amenaza.", "Espero unos días."],
          0, "Contar el secreto a tus adultos de confianza te mantiene seguro.")
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
          0, "Di NO con voz firme y aléjate."),
      qMC("Si no encuentras a tu familia después de unos minutos…",
          ["Pido ayuda a personal con uniforme.", "Me voy a casa solo.", "Me quedo sin hacer nada."],
          0, "Busca a quien tenga credencial o uniforme para ayudarte.")
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
      qMC("¿Qué dato SÍ puedes compartir en internet?",
          ["Tu color favorito.", "Tus contraseñas.", "La escuela donde estudias."],
          0, "Comparte solo información general. Nunca contraseñas ni datos personales."),
      qMC("¿Está bien hablar con extraños en línea?",
          ["Solo con un adulto presente.", "Siempre.", "Si tienen tu edad."],
          0, "Habla con guía de un adulto."),
      qWORD("Si recibes un mensaje malo, debes ___", ["contarlo", "guardarlo", "responder"], 0,
            "Cuéntalo, no respondas."),
      qMC("Si te piden salir sin avisar…",
          ["Aviso a mis tutores y no voy.", "Voy si parece amable.", "Voy rápido sin decir."],
          0, "Siempre avisa y decide con adultos."),
      qWORD("Protejo mis cuentas con contraseñas ___", ["fuertes", "fáciles", "iguales"], 0,
            "Usa combinaciones de letras, números y símbolos difíciles de adivinar.")
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
  },
  {
    id: 6, title: "Camino seguro a casa", badge: "L6",
    items: [
      qMC("Cuando cruzas la calle debes…",
          ["Tomar la mano de un adulto y mirar ambos lados.", "Correr sin mirar.", "Cruzar entre los autos."],
          0, "Cruza por las esquinas o cebras, mirando a ambos lados."),
      qWORD("Si el semáforo está en rojo para autos yo ___", ["cruzo", "espero", "corro"], 1,
            "Espera la luz verde para peatones."),
      qMC("Si alguien te sigue mientras caminas…",
          ["Entro a un negocio y pido ayuda.", "Camino más rápido sin decir nada.", "Voy a un callejón."],
          0, "Ve a un lugar con más gente y pide ayuda a un adulto."),
      qMC("Antes de salir de la escuela debes…",
          ["Acordar un punto de encuentro.", "Salir sin avisar.", "Cambiar de camino diario."],
          0, "Habla con tus tutores y acuerden dónde se encontrarán."),
      qWORD("Camino solo si tengo ___ de mi familia.", ["permiso", "ganas", "tiempo"], 0,
            "Solo sal si un adulto sabe a dónde vas."),
      qMC("Si llegas tarde a casa…",
          ["Aviso por teléfono y busco un lugar seguro.", "No digo nada.", "Apago el celular."],
          0, "Comunícate y espera en un sitio seguro con luz."),
      qMC("¿Qué haces si ves algo peligroso en el camino?",
          ["Busco otro camino y aviso.", "Lo toco para verlo.", "Lo ignoro."],
          0, "Evita el peligro y avisa a un adulto o autoridad."),
      qWORD("Si llueve fuerte busco un ___ seguro", ["refugio", "charco", "juego"], 0,
            "Entra a un negocio o espacio techado y avisa a tu familia.")
    ]
  },
  {
    id: 7, title: "Transporte seguro", badge: "L7",
    items: [
      qMC("Al esperar el autobús debes…",
          ["Mantenerte en la banqueta lejos de la orilla.", "Pararte en el borde.", "Jugar en la calle."],
          0, "Mantente lejos de los vehículos en movimiento."),
      qMC("Si un conductor desconocido ofrece llevarte…",
          ["Dices NO y buscas a tu adulto.", "Aceptas si el auto es bonito.", "Te subes rápido."],
          0, "Nunca subas a vehículos de desconocidos."),
      qWORD("En un taxi seguro verifico la ___ del conductor.", ["credencial", "música", "ropa"], 0,
            "Busca la credencial y comparte el viaje con tu familia."),
      qMC("Al subir a un transporte público…",
          ["Me siento y cuido mis pertenencias.", "Dejo mi mochila abierta.", "Miro mi celular todo el tiempo."],
          0, "Mantén tus cosas cerradas y a la vista."),
      qMC("Si alguien invade tu espacio personal…",
          ["Te mueves, dices NO y pides ayuda.", "Te quedas callado.", "Lo empujas fuerte."],
          0, "Aléjate y busca a un adulto o autoridad del transporte."),
      qWORD("Cuando salgo uso el cinturón de ___", ["seguridad", "colores", "amigos"], 0,
            "Siempre abróchate el cinturón."),
      qMC("¿Qué compartes con tu familia al viajar?",
          ["Ruta, horario y con quién vas.", "Nada, es secreto.", "Solo una foto."],
          0, "Comparte detalles de tu trayecto para que sepan dónde estás."),
      qMC("Si el transporte va muy lleno…",
          ["Busco un lugar más seguro o espero otro.", "Me quedo aunque me aplasten.", "Voy en la puerta abierta."],
          0, "Espera otro vehículo o colócate lejos de las puertas abiertas."),
      qWORD("Si voy en bici uso mi ___", ["casco", "juguete", "teléfono"], 0,
            "El casco protege tu cabeza en caso de caída.")
    ]
  },
  {
    id: 8, title: "En comunidad", badge: "L8",
    items: [
      qMC("Si alguien necesita ayuda y eres menor…",
          ["Busco a un adulto o autoridad.", "Intento resolverlo solo.", "Lo ignoro."],
          0, "Busca siempre apoyo de una persona adulta responsable."),
      qWORD("En un espacio público cuido mis ___", ["pertenencias", "dibujos", "zapatos"], 0,
            "Mantén tus cosas cerca para evitar pérdidas."),
      qMC("Si un amigo quiere ir a un lugar riesgoso…",
          ["Le propongo avisar a un adulto.", "Voy sin preguntar.", "Nos separamos."],
          0, "Dialoga y busquen la guía de un adulto."),
      qMC("Al recibir ayuda de alguien que no conoces…",
          ["Verifico que haya otras personas alrededor.", "Voy solo con esa persona.", "Le doy mis datos personales."],
          0, "Busca ayuda en lugares iluminados y con más personas."),
      qWORD("Si siento incomodidad debo confiar en mi ___", ["instinto", "canción", "juego"], 0,
            "Escuchar tus sentimientos te ayuda a decidir."),
      qMC("Si ocurre un simulacro o emergencia real…",
          ["Sigo instrucciones de los adultos y autoridades.", "Corro sin escuchar.", "Uso el ascensor."],
          0, "Mantén la calma y escucha las indicaciones."),
      qMC("Si algo te pasó y ya terminó…",
          ["Igual lo cuento a alguien de confianza.", "Lo guardo para olvidarlo.", "No vuelvo a salir."],
          0, "Hablarlo ayuda a mantenerte seguro y recibir apoyo."),
      qWORD("En una emergencia localizo un ___ seguro", ["lugar", "secreto", "silencio"], 0,
            "Identifica salidas, puntos de reunión o negocios cercanos."),
      qMC("Para moverte en grupo en la comunidad…",
          ["Acuerden un punto de reunión y horarios.", "Cada quien se va sin avisar.", "Se esconden para jugar."],
          0, "Planear horarios y lugares de encuentro mantiene a todos seguros."),
      qMC("Si ves una situación insegura en la calle…",
          ["Busco a la policía, adultos o llamo al 911.", "La grabo sin avisar.", "Sigo caminando sin mirar."],
          0, "Pedir ayuda a autoridades es la forma más segura de actuar." )
    ]
  }
];


/* ---------------------------------------
   Estado y refs
----------------------------------------*/
let xp = 0;
let hearts = 5;              // se resetea al empezar lección
let currentLesson = null;
let idx = 0;
let selectedIndex = null;
let sentencePicked = [];
let pendingAdvance = null;
let lessonXpEarned = 0;
const AUTO_MS = 900;         // auto-avance en acierto

// Pantallas
const screens = {
  start:  document.getElementById('screen-start'),
  map:    document.getElementById('screen-map'),
  quiz:   document.getElementById('screen-quiz'),
  finish: document.getElementById('screen-finish'),
};

// HUD
const xpEl     = document.getElementById('xp');
const heartsEl = document.getElementById('hearts');

// Map / Quiz / Finish refs
const lessonGrid        = document.getElementById('lessonGrid');
const btnStart          = document.getElementById('btnStart');
const backToStart       = document.getElementById('backToStart');
const backToMap         = document.getElementById('backToMap');        // botón del quiz
const btnFinishToMap    = document.getElementById('btnFinishToMap');   // botón de la pantalla final
const promptEl          = document.getElementById('prompt');
const choicesEl         = document.getElementById('choices');
const feedbackEl        = document.getElementById('feedback');
const progressBar       = document.getElementById('progressBar');
const lessonBadge       = document.getElementById('lessonBadge');
const btnCheck          = document.getElementById('btnCheck');
const btnContinue       = document.getElementById('btnContinue');
const btnResetSentence  = document.getElementById('btnResetSentence');
const earnedXpEl        = document.getElementById('earnedXp');

/* ---------------------------------------
   Navegación
----------------------------------------*/
function show(name){
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}
function clearAdvance(){
  if (pendingAdvance){ clearTimeout(pendingAdvance); pendingAdvance=null; }
}
function progress(k){
  const total = currentLesson.items.length;
  progressBar.style.width = `${(k/total)*100}%`;
}
function normalize(s){ return (s||'').toLowerCase().trim().replace(/\s+/g,' ') }
function bump(el){
  if (!el) return;
  el.classList.remove('stat-bump');
  void el.offsetWidth;
  el.classList.add('stat-bump');
}
function feedback(msg, ok){
  feedbackEl.textContent = msg||'';
  const status = msg ? (ok ? ' ok' : ' bad') : '';
  feedbackEl.className = 'feedback' + status;
  if (msg){
    feedbackEl.classList.remove('show');
    void feedbackEl.offsetWidth;
    feedbackEl.classList.add('show');
  }else{
    feedbackEl.classList.remove('show');
  }
}

/* ---------------------------------------
   Mapa de lecciones
----------------------------------------*/
function buildMap(){
  lessonGrid.innerHTML = '';
  LESSONS.forEach((lesson, i)=>{
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.innerHTML = `
      <div class="badge">${lesson.badge}</div>
      <h3>${lesson.title}</h3>
      <button class="btn btn-primary go">Empezar</button>
    `;
    card.querySelector('.go').onclick = ()=> startLesson(lesson.id);
    lessonGrid.appendChild(card);
    setTimeout(()=> card.classList.add('appear'), 70*i);
  });
}

/* ---------------------------------------
   Lección
----------------------------------------*/
function startLesson(id){
  clearAdvance();
  currentLesson = LESSONS.find(l=>l.id===id);
  idx = 0;
  selectedIndex = null;
  sentencePicked = [];
  hearts = 5;
  heartsEl.textContent = hearts;      // ♥ actualiza inmediato
  bump(heartsEl);
  lessonXpEarned = 0;
  lessonBadge.textContent = currentLesson.badge;
  progress(0);
  show('quiz');
  renderQuestion();
}

function renderQuestion(){
  clearAdvance();
  feedback('');
  btnCheck.disabled = true;
  btnContinue.disabled = true;
  btnResetSentence.hidden = true;
  choicesEl.innerHTML = '';

  const q = currentLesson.items[idx];

  // Opción múltiple / palabra
  if (q.type==='mc' || q.type==='word'){
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
      setTimeout(()=> b.classList.add('appear'), 50*i);
    });
    return;
  }

  // Construir oración
  if (q.type==='sentence'){
    promptEl.textContent = q.prompt;

    const board = document.createElement('div');
    board.className = 'sentence-board';
    board.id = 'board';
    choicesEl.appendChild(board);

    const bank = document.createElement('div');
    bank.className = 'bank';
    choicesEl.appendChild(bank);

    sentencePicked = [];
    q.words.forEach((w,i)=>{
      const chip = document.createElement('button');
      chip.className = 'chip';
      chip.textContent = w;
      chip.onclick = ()=>{
        if (chip.dataset.used==='1') return;
        chip.dataset.used='1';
        chip.style.opacity=.5;

        const picked = document.createElement('button');
        picked.className='chip appear';
        picked.textContent=w;
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
      setTimeout(()=> chip.classList.add('appear'), 50*i);
    });

    btnResetSentence.hidden = false;
    btnResetSentence.onclick = ()=> renderQuestion(); // reinicia la oración actual
  }
}

/* ---------------------------------------
   Corrección
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
  const gain = XP_GAIN[q.type] || 10;

  // MC / WORD
  if (q.type==='mc' || q.type==='word'){
    const correct = selectedIndex===q.correctIndex;
    markChoices(q.correctIndex, selectedIndex);

    if (correct){
      xp += gain; xpEl.textContent = xp;
      lessonXpEarned += gain;
      bump(xpEl);
      feedback('¡Bien hecho!', true);
      btnCheck.disabled = true;
      btnContinue.disabled = true;           // auto-avanza
      pendingAdvance = setTimeout(nextQuestion, AUTO_MS);
    }else{
      hearts--; heartsEl.textContent = hearts;   // ♥ al instante
      bump(heartsEl);
      feedback(q.edu || 'Inténtalo otra vez.', false);
      btnContinue.disabled = false; btnCheck.disabled = true;

      if (hearts<=0){
        feedback('Sin intentos. Volvemos al mapa…', false);
        setTimeout(()=> show('map'), 900);
      }
    }
    return;
  }

  // SENTENCE
  if (q.type==='sentence'){
    const built = sentencePicked.join(' ');
    const correct = normalize(built)===normalize(q.answer);

    if (correct){
      xp += gain; xpEl.textContent = xp;
      lessonXpEarned += gain;
      bump(xpEl);
      feedback('¡Oración correcta!', true);
      btnCheck.disabled = true; btnContinue.disabled = true;
      pendingAdvance = setTimeout(nextQuestion, AUTO_MS);
    }else{
      hearts--; heartsEl.textContent = hearts;
      bump(heartsEl);
      feedback('Revisa el orden. 💡 Correcto: "'+q.answer+'"', false);
      btnContinue.disabled = false; btnCheck.disabled = true;

      if (hearts<=0){
        feedback('Sin intentos. Volvemos al mapa…', false);
        setTimeout(()=> show('map'), 900);
      }
    }
  }
}

function nextQuestion(){
  clearAdvance();
  idx++;
  const total = currentLesson.items.length;
  progress(idx);
  if (idx>=total){
    earnedXpEl.textContent = lessonXpEarned;
    show('finish');
  }else{
    selectedIndex = null;
    sentencePicked = [];
    renderQuestion();
  }
}

/* ---------------------------------------
   Listeners
----------------------------------------*/
btnStart.onclick      = ()=> show('map');
backToStart.onclick   = ()=> show('start');

backToMap.onclick = (e)=>{         // botón "← Lecciones" en el QUIZ
  e.preventDefault();
  clearAdvance();
  show('map');
};

btnFinishToMap.onclick = ()=>{     // botón "Volver al mapa" de la pantalla FINAL
  clearAdvance();
  show('map');
};

btnCheck.onclick      = checkAnswer;
btnContinue.onclick   = nextQuestion;

/* ---------------------------------------
   Boot
----------------------------------------*/
buildMap();
show('start');
