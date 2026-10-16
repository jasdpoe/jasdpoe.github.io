'use strict';
Object.assign(STRINGS.es,{
  modernHero1:'La física detrás',modernHero2:'de cada bit.',modernExplore:'Explorar mis notas',modernSignature:'Jhoan Salinas · Entre la teoría y el silicio.',modernFigure:'Transmisor → Canal → Receptor',modernConcept:'Esquema conceptual',modernAboutLabel:'01 / SOBRE MÍ',modernAboutTitle:'Del modelo al mundo físico.',modernLearningLabel:'02 / APRENDIZAJE',modernLearningTitle:'Ideas que vale la pena entender.',modernNotes:'Notas de ingeniería, de cerca.',modernRead:'Leer el artículo',modernProjectsLabel:'04 / PROYECTOS',modernProjectsTitle:'También construyo herramientas.',modernContactLabel:'05 / CONTACTO',modernContactTitle:'Sigamos la conversación.',modernContactText:'Sobre circuitos, software y lo que hay entre los dos.'
});
Object.assign(STRINGS.en,{
  modernHero1:'The physics behind',modernHero2:'every bit.',modernExplore:'Explore my notes',modernSignature:'Jhoan Salinas · Between theory and silicon.',modernFigure:'Transmitter → Channel → Receiver',modernConcept:'Conceptual illustration',modernAboutLabel:'01 / ABOUT',modernAboutTitle:'From the model to the physical world.',modernLearningLabel:'02 / LEARNING',modernLearningTitle:'Ideas worth understanding.',modernNotes:'Engineering notes, up close.',modernRead:'Read the article',modernProjectsLabel:'04 / PROJECTS',modernProjectsTitle:'I build tools, too.',modernContactLabel:'05 / CONTACT',modernContactTitle:'Let’s keep talking.',modernContactText:'About circuits, software, and everything in between.'
});
Object.assign(STRINGS.es, {
  "dailyLabel": "03 / REFLEXIONES DIARIAS",
  "dailyBrowse": "Ver todas las reflexiones",
  "dailyIntro": "Reflexiones sobre tecnología, ingeniería y las preguntas que me acompañan cada día.",
  "dailyDate": "15 de octubre de 2026",
  "dailyTime": "4 min de lectura",
  "dailyTitle": "La IA, las matemáticas y el futuro del diseño de circuitos",
  "dailySummary": "Lo que los avances de la IA en matemáticas me hacen pensar sobre el diseño de circuitos: nuevas posibilidades y el riesgo de dejar de entender nuestras propias soluciones.",
  "dailyRead": "Leer la reflexión"
});
Object.assign(STRINGS.en, {
  "dailyLabel": "03 / DAILY REFLECTIONS",
  "dailyBrowse": "Browse all reflections",
  "dailyIntro": "Reflections on technology, engineering, and the questions that stay with me each day.",
  "dailyDate": "October 15, 2026",
  "dailyTime": "4 min read",
  "dailyTitle": "AI, Mathematics, and the Future of Circuit Design",
  "dailySummary": "What advances in AI and mathematics make me think about circuit design: new possibilities and the risk of no longer understanding our own solutions.",
  "dailyRead": "Read the reflection"
});
setLang(document.documentElement.lang);
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.section-grid,.featured-note,.project-row,.contact-panel').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
}
