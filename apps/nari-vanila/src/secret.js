async function renderSecretPhoto(value) {
  let secretUrl = '/api/photos/secret';
  // 필터링 ..
  if (value === 'cat') {
    secretUrl = '/api/photos?filter=cat';
  } else if (value === 'dog') {
    secretUrl = '/api/photos?filter=dog';
  }

  const AccessToken = localStorage.getItem('AccessToken');

  function showPhotos(photourl) {
    const photoDiv = document.getElementById('photos');
    const newImage = document.createElement('img');
    newImage.src = photourl;
    photoDiv.appendChild(newImage);
  }

  const result = await fetch(secretUrl, {
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  });
  const body = await result.json();
  body.map((each) => showPhotos(each.src.tiny));

  function refreshPhotos() {
    const photoDiv = document.getElementById('photos');
    photoDiv.innerHTML = '';
  }

  // 선택값 변경시 리프레쉬 되도록
  const refresher = document.querySelectorAll('li');
  refresher.forEach(() => {
    addEventListener('click', refreshPhotos);
  });
}
