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


  cpf(val) {
    val = val.replace(/\D/g, '')
    val = val.replace(/(\d{3})(\d)/, '$1.$2')
    val = val.replace(/(\d{3})(\d)/, '$1.$2')
    val = val.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    return val
  }

  date(val) {
    val = val.replace(/\D/g, '')
    val = val.replace(/(\d{2})(\d)/, '$1/$2')
    val = val.replace(/(\d{2})(\d)/, '$1/$2')
    return val
  }

  email(val) {
    val = val.replace(/\s/g, '')
    return val
  }

  fone(val) {
    val = val.replace(/\D/g, '')
    val = val.replace(/^(\d{2})(\d)/g, '($1) $2')
    val = val.replace(/(\d)(\d{4})$/, '$1-$2')
    return val
  }

  cep(val) {
    val = val.replace(/\D/g, '')
    val = val.replace(/^(\d{5})(\d)/, '$1-$2')
    return val
  }
}