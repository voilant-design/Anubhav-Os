function openApp(appName) {
  const win = document.createElement("div");
  win.className = "window";
  win.innerHTML = `
    <div class="title-bar" onmousedown="startDrag(event, this.parentElement)">
      ${appName}
      <button onclick="this.parentElement.parentElement.remove()">X</button>
    </div>
    <div class="content">Welcome to ${appName} in Anubhav OS ✨</div>
  `;
  document.body.appendChild(win);
}

let offsetX, offsetY, draggedWindow;

function startDrag(e, target) {
  draggedWindow = target;
  offsetX = e.clientX - target.offsetLeft;
  offsetY = e.clientY - target.offsetTop;
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);
}

function drag(e) {
  if (draggedWindow) {
    draggedWindow.style.left = `${e.clientX - offsetX}px`;
    draggedWindow.style.top = `${e.clientY - offsetY}px`;
  }
}

function stopDrag() {
  draggedWindow = null;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDrag);
}
