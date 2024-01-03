// hamburger
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__links");
const navContact = document.querySelector('.nav__contact');
const navLogo = document.querySelector('.nav__logo');
const linkAll = document.querySelectorAll('.nav__links a');
const navContactLinks = document.querySelectorAll('.nav__contact a');
hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_active"); 
    navLink.classList.toggle("nav__links_active");
    navContact.classList.toggle("nav__contact_active");
    navLogo.classList.toggle("nav__logo_active");
}
navLogo.onclick = function() {
    navLogo.classList.remove("nav__logo_active");
    hamburger.classList.remove("hamburger_active");
    navContact.classList.remove("nav__contact_active");
    navLink.classList.remove("nav__links_active");
}
for(let i = 0; i<linkAll.length;i++){
    linkAll[i].onclick = function() {
        hamburger.classList.remove("hamburger_active"); 
        navLink.classList.remove("nav__links_active");
        navContact.classList.remove("nav__contact_active");
        navLogo.classList.remove("nav__logo_active");
    }
}
for(let i = 0; i<navContactLinks.length;i++){
    navContactLinks[i].onclick = function() {
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
const modalBlocks = document.querySelectorAll('.modal-block');
protectionSpan.onclick = function () {
  mainWrapper.classList.add('_show');
  body.classList.add('_fixid');
  modalBlocks[0].classList.add('_show');
}
mainWrapper.onclick = function (e) {
  if (e.target.classList.contains('main-wrapper')) {
    mainWrapper.classList.remove('_show');
    body.classList.remove('_fixid');
    modalBlocks[0].classList.remove('_show');
  }
}


// choiceCourses

let choiceCourses = '';

const coursesLinkAll = document.querySelectorAll('.courses button');
for (let i = 0; i < coursesLinkAll.length; i++) {
  coursesLinkAll[i].onclick = function () {
    coursesLinkAll[i].classList.toggle('_choice');
    if (coursesLinkAll[i].classList.contains('_choice')) {
      coursesLinkAll[i].innerHTML = '<i class="fa-regular fa-circle-check"></i>Выбран<i class="fa-regular fa-circle-check"></i>';
    } else {
      coursesLinkAll[i].innerHTML = 'Выбрать';
    }
    const courseschoiceButton = document.querySelectorAll('.courses ._choice');
    choiceCourses = '';
    for (let i = 0; i < courseschoiceButton.length; i++) {
      choiceCourses = choiceCourses + (courseschoiceButton[i].parentNode.parentNode.querySelector('h3').innerText) + ' / ';
    }
    console.log(choiceCourses);
  }
}

// formSubmit
const formContact = document.querySelector('.contact form');

formContact.onsubmit = function () {
  const formSubmitBlock = formContact.querySelector('.form-submit');
  formSubmitBlock.classList.add('_show');

  setTimeout(() => {
    formContact.reset();
    formSubmitBlock.classList.remove('_show');
  }, 3000);

  const chatToken = '6787781737:AAGpLJ84BHUon0i6p9mxa3EecA-GPrDTgL4';
  const chatId = '396606827';

  const Name = formContact.querySelector('#name').value;
  const Tel = formContact.querySelector('#tel').value;
  const messageText = `💥🎉Новая заявка с сайта\n🔘Имя - ${Name}\n🔘Почта - ${Tel}\n🔘Курс - ${choiceCourses}`;

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