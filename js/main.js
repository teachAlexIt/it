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


  const chatId = '396606827';

  console.log(chatToken);
  const Name = formContact.querySelector('#name').value;
  const Tel = formContact.querySelector('#tel').value;
  const messageText = `💥🎉Новая заявка с сайта\n🔘Имя - ${Name}\n🔘Почта - ${Tel}\n🔘Курсы - ${visitCourses}`;

  const url = `https://api.telegram.org/bot${chatToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: messageText,
  };
  axios.post(url, params)
    .then(response => {

    })
    .catch(error => {

    });
  return false

}





