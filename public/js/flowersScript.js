const formAddFlower = document.querySelector('#addFlower');
const flowersList = document.querySelector('.flowersList');
const flowerUpdate = document.querySelector('#updateFlower');

if (formAddFlower) {
  formAddFlower.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, url, description, action } = e.target;
    const res = await fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      flowersList.insertAdjacentHTML('beforeend', data.html);
    } else {
      document.querySelector('#errorFlowers').textContent = data.message;
    }
  });
}

if (flowersList) {
  flowersList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delFlower')) {
      const { idflower } = e.target.dataset;

      const res = await fetch(`/flowers/${idflower}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.data > 0) {
        e.target.closest('.cardFlower').remove();
      }
    }
  });
}

if (flowerUpdate) {
  flowerUpdate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, description, url } = e.target;
    const { id } = e.target.dataset;

    const res = await fetch(`/api/flowers/${id}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        url: url.value,
      }),
    });
    const data = await res.json();
    if (data.data && data.data[0] > 0) {
      window.location.assign('/flowers');
    } else {
      document.querySelector('.errorUpdate').textContent = data.message;
    }
  });
}
