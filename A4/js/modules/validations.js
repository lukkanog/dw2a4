export default class Validations {
  constructor() {
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      const field  = input.dataset.js

      if (field) 
        input.addEventListener('focusout', e => this[field](e.target))
    })
  }

  errorClass =  'errorInput'

  cep(input) {
    if (input.value.length != 9) 
      alert("CEP Inválido")
  }

}