const valorHipoteca = document.getElementById('Valor')
const anos = document.getElementById('anos')
const porcento = document.getElementById('porcento')
const botao = document.getElementById('Calcular')
const resultado = document.getElementById('Resultado')
const totalAnual = document.getElementById('total')
const clear = document.getElementById('clearAll')
const Repayment = document.getElementById('Repayment')
const Interest = document.getElementById('Interest')
const Primereinput = document.getElementById('PrimareInput')
const SecundaryInput = document.querySelectorAll('.SecunderyInput')
const Icon = document.querySelectorAll('.Icon')

const errorState = document.querySelectorAll('.errorState')
errorState.forEach((elem) => {
  elem.style.display = 'none'
})

const textArea = document.getElementById('textArea')
const html = textArea.innerHTML

clear.addEventListener('click', () => {
  valorHipoteca.value = ''
  anos.value = ''
  porcento.value = ''

  Primereinput.style.border = '1px solid #a9aaab'
  SecundaryInput.forEach((elem) => {
    elem.style.border = '1px solid #a9aaab'
  })
  Icon.forEach((elem) => {
    elem.style.backgroundColor = '#e3f4fc'
  })
  errorState.forEach((elem) => {
    elem.style.display = 'none'
  })
  textArea.innerHTML = html
})

botao.addEventListener('click', (event) => {
  event.defaultPrevented
  const valor = valorHipoteca.value
  let meses = anos.value * 12
  let taxa = porcento.value / 12 / 100

  if (
    valorHipoteca.value === '' ||
    anos.value === '' ||
    porcento.value === ''
  ) {
    Primereinput.style.border = '1px solid red'
    SecundaryInput.forEach((elem) => {
      elem.style.border = '1px solid red'
    })
    Icon.forEach((elem) => {
      elem.style.backgroundColor = 'red'
    })

    errorState.forEach((elem) => {
      elem.style.display = 'block'
    })
  } else {
    Primereinput.style.border = '1px solid #a9aaab'
    SecundaryInput.forEach((elem) => {
      elem.style.border = '1px solid #a9aaab'
    })
    Icon.forEach((elem) => {
      elem.style.backgroundColor = '#e3f4fc'
    })
    errorState.forEach((elem) => {
      elem.style.display = 'none'
    })
  }

  if (
    Repayment.checked &&
    valorHipoteca.value != '' &&
    anos.value != '' &&
    porcento.value != ''
  ) {
    let parcela =
      (valor * (taxa * Math.pow(1 + taxa, meses))) /
      (Math.pow(1 + taxa, meses) - 1)
    parcela = parcela.toFixed(3)

    let total = parcela * 12
    total = total.toFixed(2)

    document.getElementById('textArea').innerHTML = `
  <div id="Results">
        <h1>Your Results</h1>
        <p>
          Your results are show below based on the information your provided. To
          adjust the results, edit the form and click "Calculate Repayments"
          again
        </p>
        <div id="ResultsData">
          <p>Your monthly repayments</p>
          <div id="PrimereResult">
            <i class="ph ph-currency-eur"></i><span id="Resultado">${parcela}</span>
          </div>
          <p>Total you'll repay over the term</p>
          <div id="SecundaryResult">
            <i class="ph ph-currency-eur"></i><span id="total">${total}</span>
          </div>
        </div>
      </div>
      `
  } else if (
    Interest.checked &&
    valorHipoteca.value != '' &&
    anos.value != '' &&
    porcento.value != ''
  ) {
    let parcela = valor * taxa
    parcela = parcela.toFixed(2)

    document.getElementById('textArea').innerHTML = `
  <div id="Results">
        <h1>Your Results</h1>
        <p>
          Your results are show below based on the information your provided. To
          adjust the results, edit the form and click "Calculate Repayments"
          again
        </p>
        <div id="ResultsData">
          <p>Your monthly repayments</p>
          <div id="PrimereResult">
            <i class="ph ph-currency-eur"></i><span id="Resultado">${parcela}</span>
          </div>          
        </div>
      </div>
      `
  }
})

/*
results.innerHTML = html
*/
