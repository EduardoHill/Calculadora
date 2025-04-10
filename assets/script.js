const valorHipoteca = document.getElementById('Valor')
const anos = document.getElementById('anos')
const porcento = document.getElementById('porcento')
const botao = document.getElementById('Calcular')
const resultado = document.getElementById('Resultado')
const totalAnual = document.getElementById('total')
const clear = document.getElementById('clearAll')
const Repayment = document.getElementById('Repayment')
const Interest = document.getElementById('Interest')

clear.addEventListener('click', () => {
  valorHipoteca.value = ''
  anos.value = ''
  porcento.value = ''
  resultado.textContent = ''
  totalAnual.textContent = ''
})

botao.addEventListener('click', (event) => {
  event.defaultPrevented
  const valor = valorHipoteca.value
  let meses = anos.value * 12
  let taxa = porcento.value / 12 / 100
  console.log(Interest.value)
  let parcela =
    (valor * (taxa * Math.pow(1 + taxa, meses))) /
    (Math.pow(1 + taxa, meses) - 1)
  parcela = parcela.toFixed(3)

  const total = parcela * 12
  totalAnual.textContent = total.toFixed(3)
  resultado.textContent = parcela
})
