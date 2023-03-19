async function renderSecretPhoto() {
  const secretUrl = '/api/photos/secret';
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
  console.log(body);
  body.map((each) => showPhotos(each.src.tiny));
}
