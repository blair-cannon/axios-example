const myList = document.querySelector('#list'); // id's from html
const myPhotos = document.querySelector('#photoGallery');

async function myFetch(){
    let resp = await axios.get('https://jsonplaceholder.typicode.com/albums'); 
    if (!resp) {
        console.log(resp.status);
    }
    let albums = resp.data
    resp = await axios.get('https://jsonplaceholder.typicode.com/photos');
    if (!resp) {
        console.log(resp.status);
    }
    let photos = resp.data
    console.log(photos)
    
    
    for(let i = 1; i < 10; i++){
        const li = document.createElement('li')
        myList.appendChild(li)
        li.textContent += albums[albums.length -i].title;
    }
    
    for(let i = 1; i < 10; i++){
        const img = document.createElement('img')
        myPhotos.appendChild(img)
        img.style.width = "100px";
        img.src = photos[photos.length -i].url; 
    }
}

  myFetch()
    .catch(e => {
      console.log(e.message);
    });