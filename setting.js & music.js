function openSettings(){
  const win = document.getElementById('app-window');
  win.innerHTML = `<h3>Settings</h3>
    <button onclick="closeApp()">Close</button>
    <div>
      <label>Animation Speed:
        <select onchange="setSpeed(this.value)"><option>1x</option><option>1.5x</option></select>
      </label>
    </div>`;
  win.classList.remove('hidden');
}
