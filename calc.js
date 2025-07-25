function openCalculator(){
  const win = document.getElementById('app-window');
  win.innerHTML = `<div><h3>Calculator</h3>
    <button onclick="closeApp()">Close</button>
    <div id="calc-display">0</div>
    <div id="calc-buttons"></div></div>`;
  // add button grid and logic...
  win.classList.remove('hidden');
}

function closeApp(){ document.getElementById('app-window').classList.add('hidden'); }
