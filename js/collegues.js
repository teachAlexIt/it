const colleagues = [
  {
    name: 'Валерий',
    img: './img/Valery.png',
    desc: 'Опытный и очень добрый преподаватель, котрый найдет подход к каждому ученику',
    subjects: ['Математика', 'Скорочтение', 'Ментальная арифметика']
  },
  {
    name: 'Василий',
    img: './img/Василий.png',
    desc: 'Специалист по разработке мобильных приложений для iOS. ',
    subjects: ['Python', 'Кибербезопасность', 'Промт-инжиниринг']
  },
  // {
  //   name: 'Анна Сидорова',
  //   img: './img/colleague2.jpg',
  //   desc: 'Специалист по веб-разработке и дизайну интерфейсов',
  //   subjects: ['HTML/CSS', 'JavaScript', 'UI/UX дизайн']
  // },
  // {
  //   name: 'Михаил Иванов',
  //   img: './img/colleague3.jpg',
  //   desc: 'Эксперт по мобильной разработке и кибербезопасности',
  //   subjects: ['Android', 'iOS', 'Кибербезопасность']
  // }
];

function renderColleagues(list) {
  const container = document.querySelector('.colleagues__list');
  container.innerHTML = ''; // Очистим, если уже что-то есть

  list.forEach(colleague => {
    const card = document.createElement('div');
    card.className = 'colleagues__item';

    card.innerHTML = `
      <img src="${colleague.img}" alt="Фото коллеги">
      <h3>${colleague.name}</h3>
      <p>${colleague.desc}</p>
      <ul>
        ${colleague.subjects.map(subject => `<li>${subject}</li>`).join('')}
      </ul>
    `;

    container.appendChild(card);
  });
}

renderColleagues(colleagues);
