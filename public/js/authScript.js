const logout = document.querySelector('.logout');
const regForm = document.querySelector('#regForm');

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, password, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('.errRega').textContent = data.message;
    }
  });
}

if (logout) {
  logout.addEventListener('click', async () => {
    const res = await fetch('/auth/logout');
    const data = await res.json();
    if (data.message === 'Успешный выход') {
      window.location.assign('/');
    }
  });
}
