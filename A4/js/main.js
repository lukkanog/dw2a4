import Masks from './modules/masks.js'
import Validations from './modules/validations.js'

const masks = new Masks()
const validations = new Validations()

const cepElement = document.querySelector('[data-js="cep"]')

var uf = {}

cepElement.addEventListener('focusout', async e => {
  const cep = e.target.value
  const url = `https://viacep.com.br/ws/${cep}/json/`

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      fetchCovidData(data.uf)
    })
    .catch(err => {
      alert("Ocorreu um erro!")
      console.log(err)
    })

  console.log(uf)

  if (!uf) {
    alert("Erro ao obter UF") 
    return
  }

  
})


const fetchCovidData = async (uf) => {
  const endPoint = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`

  await fetch(endPoint)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { cases, deaths, suspects, refuses } = data
      console.log(cases, deaths, suspects, refuses)

      //make a paragraph for each data
      const casesElement = document.createElement('p')
      const deathsElement = document.createElement('p')
      const suspectsElement = document.createElement('p')
      const refusesElement = document.createElement('p')

      casesElement.textContent = `Casos: ${cases}`
      deathsElement.textContent = `Mortes: ${deaths}`
      suspectsElement.textContent = `Suspeitos: ${suspects}`
      refusesElement.textContent = `Recusados: ${refuses}`

      const resultElement = document.querySelector('#result')
      resultElement.innerHTML = ''
      resultElement.appendChild(casesElement)
      resultElement.appendChild(deathsElement)
      resultElement.appendChild(suspectsElement)
      resultElement.appendChild(refusesElement)

    })
    .catch(err => {
      alert("Ocorreu um erro!")
      console.log(err)
    })
}