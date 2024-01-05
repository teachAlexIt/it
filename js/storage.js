const coursesListDiv = document.querySelector('.courses__list');

const coursesList = [
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

    courseDescription: 'Ваш ребенок узнает основные <b>принципы эргономичного, удобного и эстетически приятного дизайна</b> интерьера. Научится использовать технологии умного дома и многозадачности пространства, а также подбирать правильные цветовые гаммы. И, конечно, освоит программу для создания дизайна интерьера Homestyler.',

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
      <button>Выбрать</button>
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


