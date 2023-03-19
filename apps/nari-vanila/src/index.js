// function getFilterValue() {
//     const filterNode = document.getElementsByName('filter')
//     filterNode.forEach((node) => {
//     if (node.checked){
//         console.log(node.value)
//         return node.value
//     }})
// }

async function fetchPhotos(value) {
  const url = '/api/photos';
  let requrl = '/api/photos';

  // 필터링 ..
  if (value === 'cat') {
    requrl = '/api/photos?filter=cat';
  } else if (value === 'dog') {
    requrl = '/api/photos?filter=dog';
  } else {
    requrl = url;
  }

  // 사진 렌더링 함수
  function showPhotos(photourl) {
    const photoDiv = document.getElementById('photos');
    const newImage = document.createElement('img');
    newImage.src = photourl;
    photoDiv.appendChild(newImage);
  }

  // 선택값 변할 때 이전 사진 지우는 함수
  function refreshPhotos() {
    const photoDiv = document.getElementById('photos');
    photoDiv.innerHTML = '';
  }

  // 사진 렌더링
  const result = await fetch(requrl).then((res) => res.json());
  result.map((each) => showPhotos(each.src.tiny));

  // 선택값 변경시 리프레쉬 되도록
  const refresher = document.querySelectorAll('li');
  refresher.forEach(() => {
    addEventListener('click', refreshPhotos);
  });
}
