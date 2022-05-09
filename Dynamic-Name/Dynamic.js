const params = new URLSearchParams(window.location.search);

const firstNameEl = document.getElementById('first-name');
firstNameEl.textContent = params.get('firstName');