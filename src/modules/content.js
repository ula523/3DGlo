const content = () => {
  const calcInput = document.querySelectorAll('.calc-block input')
  const typeText = document.querySelectorAll('input[type="text"], [placeholder="Ваше сообщение"]')
  const typeEmail = document.querySelectorAll('input[type="email"]')
  const typeTel = document.querySelectorAll('input[type="tel"]')


 // разрешен ввод цифр 
calcInput.forEach((input) => {

  input.addEventListener('input', (e) => {
   
    e.target.value = e.target.value.replace(/[^\d()-]/g, '');
  })
})


// ввод только кириллицы в любом регистре, дефиса и пробела
typeText.forEach((input) => {
  input.addEventListener('input', (e) => {
    
    e.target.value = e.target.value.replace(/[^а-яё\s-]/gi, '');
  })
})

   //ввод только латиницы в любом регистре, цифры и спецсимволы

typeEmail.forEach((input) => {
  input.addEventListener('input', (e) => {
     
    e.target.value = e.target.value.replace(/[^a-z0-9@_.\!~*'-]/gi, '');
  })
})

//ввод только цифр, круглых скобок и дефис

typeTel.forEach((input) => {

  input.addEventListener('input', (e) => {
   
    e.target.value = e.target.value.replace(/[^\d()-]/g, '');
  })
})

console.log(calcInput);


}

module.exports = content;