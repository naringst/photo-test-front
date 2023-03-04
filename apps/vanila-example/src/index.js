const result = await fetch('/api/photos');
const body = await result.json();
console.log(body);
