function openCalculator() {
  const win = document.getElementById('app-window');
  win.innerHTML = '<h2>Calculator</h2><div id="calc-output"></div><input id="calc-input" placeholder="Type expression"/><button onclick="calculate()">=</button>';
  win.classList.remove('hidden');
}

function openMusic() {
  const win = document.getElementById('app-window');
  win.innerHTML = '<h2>Music Player</h2><audio controls><source src="song.mp3" type="audio/mpeg">Your browser does not support audio.</audio>';
  win.classList.remove('hidden');
}

function openSettings() {
  const win = document.getElementById('app-window');
  win.innerHTML = '<h2>Settings</h2><p>Dark Mode, Time Format, etc. coming soon!</p>';
  win.classList.remove('hidden');
}
