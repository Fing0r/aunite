import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


$(".datepicker").datepicker({
  showOn: "button",
  buttonImage: "img/calendar.svg",
  buttonImageOnly: true,
  buttonText: "Select date"
});


// const countrySel = document.querySelector('.form__country')
// const regionSel = document.querySelector('.form__region')
// const citySel = document.querySelector('.form__city')

// if (countrySel) {
//   const defaultSelect = () => {
//     const choices1 = new Choices(countrySel, {
//       searchEnabled: false,
//       placeholder: false,
//       position: 'bottom',
//     })

//     const choices2 = new Choices(regionSel, {
//       searchEnabled: false,
//       placeholder: false,
//       position: 'bottom',
//     })

//     const choices3 = new Choices(citySel, {
//       searchEnabled: false,
//       placeholder: false,
//       position: 'bottom',
//     })
//   }

//   defaultSelect()
// }

const multiDefault = () => {
  const selects = document.querySelectorAll('.form__multi');
  selects.forEach(select => {
    const choices = new Choices(select, {
      searchEnabled: false,
      placeholder: false,
      position: 'bottom',
    })
  });
}
multiDefault()

function myFunction(id) {
  const copyBtns = document.querySelectorAll('.action__btn')
  copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener('click', function () {
      const copyText = document.getElementById(id);
      copyText.select();
      document.execCommand("copy");
    })
  });

}
myFunction('mobile')
myFunction('health')
myFunction('cashback')


// const form = document.querySelector('.register__form')
// const formInputs = document.querySelectorAll('.input-check')
// const inputEmail = document.querySelector('.form__input--email')
// const inputPassword = document.querySelector('.form__input--new-pass')
// const inputConfimPassword = document.querySelector('.form__input--confirm')
// const inputPhone = document.querySelector('.form__input--phone')
// const inputName = document.querySelector('.form__input--name')
// const inputLogin = document.querySelector('.form__input--login')
// // const inputCheckbox = document.querySelector('.js-input-checkbox')

// function validateEmail(email) {
//   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// function validateName(name) {
//   let re = /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/;
//   return re.test(String(name));
// }

// function validatePassword(password) {
//   let re = /(?=.*[,.<>/?;:'"[\]{}|`~!@#$%^&*\()-_+=])(?=.*[a-z])[a-z,.<>/?;:'"[\]{}|`~!@#$%^&*()-_+=]{6,}/g;
//   return re.test(String(password));
// }

// function validatePhone(phone) {
//   let re = /^[0-9\s]*$/;
//   return re.test(String(phone));
// }

// form.onsubmit = function () {
//   let emailVal = inputEmail.value
//   let phoneVal = inputPhone.value
//   let passwordVal = inputPassword.value
//   let confirmdVal = inputConfimPassword.value
//   let nameVal = inputName.value
//   let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  // formInputs.forEach(function (input) {
  //   if (input.value === '') {
  //     input.classList.add('error');
  //   } else {
  //     input.classList.remove('error');
  //   }
  // });

  // if (emptyInputs.length !== 0) {
  //   console.log('inputs not filled');
  //   return false;
  // }

  // if (!validateEmail(emailVal)) {
  //   console.log('email not valid');
  //   inputEmail.classList.add('error');
  //   return false;
  // } else {
  //   inputEmail.classList.remove('error');
  // }


  // if (!validateName(nameVal)) {
  //   console.log('name not valid');
  //   inputName.classList.add('error');
  //   return false;
  // } else {
  //   inputName.classList.remove('error');
  // }






  // if (validateCountry(emailVal)) {
  //   console.log('email from Columbia');
  //   inputEmail.classList.add('error');
  //   return false;
  // } else {
  //   inputEmail.classList.remove('error');
  // }

  // if (passwordVal) {
  //   if (!validatePassword(passwordVal)) {
  //     console.log('password not valid');
  //     inputPassword.classList.add('error');
  //     return false;
  //   } else {
  //     inputPassword.classList.remove('error');
  //   }
  // }

  // if (confirmdVal !== passwordVal) {
  //   console.log('confirm password not valid');
  //   inputConfimPassword.classList.add('error');
  //   return false;
  // } else {
  //   inputConfimPassword.classList.remove('error');
  // }


  // if (!validatePhone(phoneVal)) {
  //   console.log('phone not valid');
  //   inputPhone.classList.add('error');
  //   return false;
  // } else {
  //   inputPhone.classList.remove('error');
  // }

  // if (!inputCheckbox.checked) {
  //   console.log('checkbox not checked');
  //   inputCheckbox.classList.add('error');
  //   return false;
  // } else {
  //   inputCheckbox.classList.remove('error')
  // }
// }
