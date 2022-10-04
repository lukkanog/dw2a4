export default class Validations {
  constructor() {
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      const field  = input.dataset.js

      if (field) 
        input.addEventListener('input', e => this[field](e.target))
    })
  }

  errorClass =  'errorInput'

  cpf(input) {
    if (input.value.length > 14) {
      input.classList.add(this.errorClass)
      return
    }

    input.classList.remove(this.errorClass)
  }

  date(input) {
    if (input.value.length > 10) {
      input.classList.add(this.errorClass)
      return
    }

    input.classList.remove(this.errorClass)
  }

  email(input) {
    if (input.value.length > 50 || !input.value.includes('@') || !input.value.includes('.')) {
      input.classList.add(this.errorClass)
      return
    }

    input.classList.remove(this.errorClass)
  }

  fone(input) {
    if (input.value.length > 15) {
      input.classList.add(this.errorClass)
      return
    }

    input.classList.remove(this.errorClass)
  }
  
  cep(input) {
    if (input.value.length > 9) {
      input.classList.add(this.errorClass)
      return
    }

    input.classList.remove(this.errorClass)
  }

}