const filterParams = {
    filter : 'cat'
}
async function  fetchPhotos() {
const result =  await fetch('/api/photos').then(res => res.json())
// const filterValue = getFilterValue();
// const filteredPhoto = result.filter(data => data.filter == filterValue)

result.map(each =>  showPhotos(each.src.tiny))     
}

function showPhotos(url){
    Image = document.createElement('img');
    Image.src = url
    document.body.appendChild(Image);
}

function getFilterValue() {
    const filterNode = document.getElementsByName('filter')
    filterNode.forEach((node) => {
    if (node.checked){
        console.log(node.value)
        return node.value
       
    }
})
}