  const toggleBtn = document.getElementById('indexToggleBtn');
  const pageIndex = document.getElementById('pageIndex');

  toggleBtn.addEventListener('click', () => {
    const isOpen = pageIndex.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);

    toggleBtn.innerHTML = isOpen ? '&gt;' : '&lt;';
  });

  // Optional: close after clicking a link
  document.querySelectorAll('#pageIndex a').forEach(link => {
    link.addEventListener('click', () => {
      // pageIndex.classList.remove('open');
      // toggleBtn.classList.remove('open');
      // toggleBtn.innerHTML = '&lt;';
    });
  });


