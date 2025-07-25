window.addEventListener('load', () => {
  const loading = document.getElementById('loading-screen');
  const lock = document.getElementById('lock-screen');

  setTimeout(() => {
    loading.style.display = 'none';
    lock.classList.remove('hidden');
  }, 2000);

  lock.addEventListener('click', () => {
    lock.style.display = 'none';
    document.getElementById('desktop').classList.remove('hidden');
  });
});
