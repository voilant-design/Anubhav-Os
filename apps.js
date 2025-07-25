function showScreen(id){ document.querySelectorAll('.hidden').forEach(e=>e.classList.add('hidden')); document.getElementById(id).classList.remove('hidden'); }

window.addEventListener('load', ()=>{
  setTimeout(()=> showScreen('lock-screen'), 2000);
});

document.getElementById('lock-screen').addEventListener('click', ()=> showScreen('desktop'));
