// Tasas de cambio fijas respecto al USD
const tasas = {
  "USD": 1.00,
  "EUR": 0.93,
  "COP": 4150.00,
  "MXN": 18.20,
  "JPY": 150.30,
  "GBP": 0.79,
  "BRL": 5.60,
  "AUD": 1.55,
  "CAD": 1.37,
  "CHF": 0.90
};

function convertir() {
  const cantidad = parseFloat(document.getElementById('amount').value);
  const desde = document.getElementById('from').value;
  const hacia = document.getElementById('to').value;
  const resultadoDiv = document.getElementById('result');

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoDiv.innerHTML = `<span class="text-danger">⚠️ Ingrese una cantidad válida.</span>`;
    return;
  }

  const valorUSD = cantidad / tasas[desde];
  const convertido = valorUSD * tasas[hacia];

  resultadoDiv.innerHTML = `
    💱 <strong>${cantidad.toFixed(2)} ${desde}</strong> 
    = <span class="text-success">${convertido.toFixed(2)} ${hacia}</span>
  `;
}
