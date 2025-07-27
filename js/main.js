// hamburger
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__links");
const navContact = document.querySelector('.nav__contact');
const navLogo = document.querySelector('.nav__logo');
const linkAll = document.querySelectorAll('.nav__links a');
const navContactLinks = document.querySelectorAll('.nav__contact a');
hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger_active");
  navLink.classList.toggle("nav__links_active");
  navContact.classList.toggle("nav__contact_active");
  navLogo.classList.toggle("nav__logo_active");
}
navLogo.onclick = function () {
  navLogo.classList.remove("nav__logo_active");
  hamburger.classList.remove("hamburger_active");
  navContact.classList.remove("nav__contact_active");
  navLink.classList.remove("nav__links_active");
}
for (let i = 0; i < linkAll.length; i++) {
  linkAll[i].onclick = function () {
    hamburger.classList.remove("hamburger_active");
    navLink.classList.remove("nav__links_active");
    navContact.classList.remove("nav__contact_active");
    navLogo.classList.remove("nav__logo_active");
  }
}
for (let i = 0; i < navContactLinks.length; i++) {
  navContactLinks[i].onclick = function () {
    hamburger.classList.remove("hamburger_active");
    navLink.classList.remove("nav__links_active");
    navContact.classList.remove("nav__contact_active");
    navLogo.classList.remove("nav__logo_active");
  }
}







const body = document.querySelector('body');
// ProtectionText
const mainWrapper = document.querySelector('.main-wrapper');
const protectionSpan = document.querySelector('.protection');
const modalBlock = document.querySelector('.modal-block');
import courseDescriptionStore from './courseDescriptStorage.js';
protectionSpan.onclick = function () {
  modalBlock.innerHTML = courseDescriptionStore[courseDescriptionStore.length - 1];
  modalBlock.scrollTop = 0;
  mainWrapper.classList.add('_show');
  body.classList.add('_fixid');
  modalBlock.classList.add('_show');
}
mainWrapper.onclick = function (e) {
  if (e.target.classList.contains('main-wrapper')) {
    mainWrapper.classList.remove('_show');
    body.classList.remove('_fixid');
    modalBlock.classList.remove('_show');
  }
}

// 


const courseDescriptionButton = document.querySelectorAll('.course-card_more');
let visitCourses = '';
for (let i = 0; i < courseDescriptionButton.length; i++) {
  courseDescriptionButton[i].onclick = function () {
    courseDescriptionButton[i].classList.add('_visit');
    const visitCoursesButton = document.querySelectorAll('.courses ._visit');
    visitCourses = '';
    for (let i = 0; i < visitCoursesButton.length; i++) {
      visitCourses = visitCourses + (visitCoursesButton[i].parentNode.parentNode.querySelector('h3').innerText) + ' / ';
    }
    modalBlock.scrollTop = 0;
    mainWrapper.classList.add('_show');
    body.classList.add('_fixid');
    modalBlock.innerHTML = courseDescriptionStore[i];
    modalBlock.classList.add('_show');
  }

}






// formSubmit
const formContact = document.querySelector('.contact form');
let chatToken = '';
document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './js/chatToken.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      var a = response.trim(); // Убираем возможные лишние пробелы и переносы строки
      chatToken = a;
    }
  };
  xhr.send();
});

formContact.onsubmit = function () {
  const formSubmitBlock = formContact.querySelector('.form-submit');
  formSubmitBlock.classList.add('_show');

  setTimeout(() => {
    formContact.reset();
    formSubmitBlock.classList.remove('_show');
  }, 3000);

  const chatIdTG = '396606827';
  const Name = formContact.querySelector('#name').value;
  const Tel = formContact.querySelector('#tel').value;
  const messageText = `💥🎉Новая заявка с сайта\n🔘Имя - ${Name}\n🔘Почта - ${Tel}\n🔘Курсы - ${visitCourses}`;
  sendMessageToTG(messageText, chatIdTG)
}


// Функция отправки сообшения в TG
function sendMessageToTG(messageText, chatIdTG) {
  setTimeout(() => {
    fetch('https://send-message-to-tg.alekseiteacherit.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: chatIdTG,
        messageText: messageText,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {


        } else {
          console.log(data);

        }
      })
      .catch(error => {

      });
  }, 1000);
}


async function updateRubPrices() {
  try {
    // Получаем XML-курс USD к RUB с сайта ЦБ РФ
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    const rate = data.Valute?.USD?.Value;
    if (typeof rate !== 'number') throw new Error('Неверный формат курса');

    document.querySelectorAll('.cost-item').forEach(item => {
      const dollarEl = item.querySelector('.cost_dollar');
      const rubEl = item.querySelector('.cost_rub');

      if (dollarEl && rubEl) {
        const dollarText = dollarEl.textContent.replace(/[^0-9.]/g, '');
        const dollarValue = parseFloat(dollarText);

        if (!isNaN(dollarValue)) {
          const rubValue = Math.round(dollarValue * rate);
          rubEl.textContent = `${rubValue.toLocaleString('ru-RU')}₽`;
        }
      }
    });
  } catch (err) {
    console.error('Ошибка при обновлении стоимости в рублях:', err);
  }
}

updateRubPrices();





function coursesListScroll(direction) {
  const coursesListDiv = document.querySelector('.courses__list');
  const courseCard = document.querySelector('.course-card');
  // Получаем текущее значение горизонтальной прокрутки
  const scrollLeft = coursesListDiv.scrollLeft;
  const computedStyle = window.getComputedStyle(courseCard);
  const gap = parseFloat(computedStyle.getPropertyValue('gap'));
  let newScrollLeft = 0;
  if (direction == 'next') {

    newScrollLeft = scrollLeft + courseCard.getBoundingClientRect().width + gap;
    console.log(courseCard.getBoundingClientRect().width, gap, newScrollLeft);
  } else {
    newScrollLeft = scrollLeft - courseCard.getBoundingClientRect().width - gap;
  }
  coursesListDiv.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth' // Опционально: для плавной анимации прокрутки
  });
}

// document.querySelector('.courses__next-button').onclick = function () {
//   coursesListScroll('next')
// }
// document.querySelector('.courses__prev-button').onclick = function () {
//   coursesListScroll('prev')
// }

