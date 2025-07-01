const coursesListDiv = document.querySelector('.courses__list');

const coursesList = [
  {
    img: './img/courses/cybersecurity.png',
    courseName: 'Кибербезопасность',

    courseDescription: 'Ваш ребёнок узнает, как защитить себя в интернете, <b>распознавать угрозы</b>, создавать надёжные пароли, отличать фишинг и понимать, как работают антивирусы и цифровая безопасность.',

    courseAge: 'от 9 лет',
  },

  {
    img: './img/courses/prompt.png',
    courseName: 'Промт-инжиниринг',

    courseDescription: 'Ваш ребёнок научится эффективно <b>общаться с искусственным интеллектом</b>, формулировать запросы и использовать ИИ как помощника в учёбе, творчестве и жизни.',

    courseAge: 'от 9 лет',
  },

//   {
//     img: './img/courses/english.png',
//     courseName: 'Английский язык',

//     courseDescription: 'Регулярные занятия помогут ребёнку <b>свободно говорить, понимать и думать на английском языке</b>. Общение, игры, видео и увлекательные темы — от первых слов до уверенного владения языком.',

//     courseAge: 'от 7 лет',
//   },

//   {
//   img: './img/courses/spanish.png',
//   courseName: 'Испанский язык',

//   courseDescription: 'Ребёнок <b>начнёт говорить и понимать по-испански</b> с первого занятия — благодаря живому общению, играм и погружению в культуру. Курс ведёт преподаватель, проживший 26 лет в Аргентине и свободно владеющий языком.',

//   courseAge: 'от 7 лет',
// },





  {
    img: './img/courses/python.png',
    courseName: 'Python',

    courseDescription: 'Ваш ребёнок научится программировать на языке Python и создавать разнообразные проекты <b>с использованием кода</b>. Для этого ваш ребёнок освоит основы Python, работу с библиотеками, обработку данных и создание графических интерфейсов.',

    courseAge: 'от 12 лет',
  },
  {
    img: './img/courses/scratch.svg',
    courseName: 'Scratch',

    courseDescription: 'Scratch - это уникальная платформа, которая позволяет объяснять сложные вещи простым и наглядным языком. <b>Переменные, циклы, события и алгоритмы</b>. С помощью Scratch ваш маленький ребенок сможет понять что это такое!',

    courseAge: 'от 7 лет',
  },
  {
    img: './img/courses/math.svg',
    courseName: 'Математика',

    courseDescription: 'Ваш ребёнок сможет глубже и подробнее понять изучаемую в школе тему. Я <b>помогу ему выполнить</b> домашнее задание. Объясню сложные моменты просто и интересно. ',

    courseAge: 'от 8 лет',
  },
  {
    img: './img/courses/webIllustrator.svg',
    courseName: 'Веб иллюстрации',

    courseDescription: 'Ваш ребенок изучит инструменты <b>графического редактора Figma</b> и научится создавать красивые векторные иллюстрации. Познакомиться с цветовым кругом Иттена и узнает комбинации сочетания цветов.',

    courseAge: 'от 8 лет',
  },
  {
    img: './img/courses/webDesign.svg',
    courseName: 'WEB-Дизайн',

    courseDescription: 'Ваш ребенок узнает технологию UX/UI. Научится создавать красивый и интуитивно понятный <b>дизайн сайтов и приложений</b> в графическом редакторе Figma.<br> Освоит прототипирование и создаст портфолио со своими работами.',

    courseAge: 'от 10 лет',
  },
  {
    img: './img/courses/homestyler.svg',
    courseName: 'Дизайн интерьера',

    courseDescription: 'Ваш ребенок узнает основные <b>принципы эргономичного, удобного и эстетически приятного дизайна</b> интерьера. Научится использовать технологии умного дома и многозадачности пространства, а также подбирать правильные цветовые гаммы. И освоит программу Homestyler.',

    courseAge: 'от 10 лет',
  },
  {
    img: './img/courses/roblox.svg',
    courseName: 'Roblox',

    courseDescription: 'Ваш ребенок научится создавать 3D модели, а затем анимировать их прописывая программу на языке Lua. Научится продумывать сценарии игры. <b>Создаст собственные игры</b> и опубликует их. А также научиться зарабатывать на своих проектах.',

    courseAge: 'от 9 лет',
  },
  {
    img: './img/courses/blender.svg',
    courseName: '3D Моделирование',

    courseDescription: 'Ваш ребенок освоит программу Blender и научится <b>создавать трехмерные объекты, текстуры и анимации</b>. Все 3D-модели, которые создаст ваш ребенок, сможет интегрировать в игры, а также предложить для продажи на онлайн-рынках 3D-моделей.',

    courseAge: 'от 12 лет',
  },
  {
    img: './img/courses/frontend.svg',
    courseName: 'Создание сайтов',

    courseDescription: 'Ваш ребёнок научится создавать сложные и технологичные сайты <b>используя код</b>. Для этого ваш ребёнок освоит следующие языки - HTML, CSS, JavaScript.<br> Создаст сайт - портфолио и наполнит его своими работами, а затем опубликует этот сайт в интернет на бесплатном хостинге.',

    courseAge: 'от 12 лет',
  },
  {
    img: './img/courses/googleDocs.svg',
    courseName: 'Google документы',

    courseDescription: 'Ваш ребенок научится создавать и редактировать <b>документы, формы, таблицы и презентации</b>. Данный курс очень пригодиться подросткам, которые будут использовать Google документы в школе и других учебных заведениях.',

    courseAge: 'от 9 лет',
  },

];


function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'courses__item course-card';

  card.innerHTML = `
    <div class='course-card__description'>
      <img src="${course.img}" alt="">
      <h3>${course.courseName}</h3>
      <p>${course.courseDescription}</p>
      
    </div>
    <div class='course-card__description'>
      <p>Рекомендуемый возраст: <span>${course.courseAge}</span></p>
      <button class='course-card_more'>Подробнее</button>
    </div>
  `;

  return card;
}


function displayElements(storeList, listDiv) {
  storeList.forEach(item => {
    const itemDiv = createCourseCard(item);
    listDiv.appendChild(itemDiv);
  });
}


displayElements(coursesList, coursesListDiv);


