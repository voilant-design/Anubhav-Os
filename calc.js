function calculate() {
  const input = document.getElementById('calc-input').value;
  let result;
  try {
    result = eval(input);
  } catch (e) {
    result = 'Error';
  }
  document.getElementById('calc-output').innerText = result;
}
