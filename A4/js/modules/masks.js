export default class Masks {
  constructor() {
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      const field  = input.dataset.js

      if (field) {
        input.addEventListener('input', e => {
          e.target.value = this[field](e.target.value)
        })
      }
    })
  }
  
  cep(val) {
    val = val.replace(/\D/g, '')
    val = val.replace(/^(\d{5})(\d)/, '$1-$2')
    return val
  }
}