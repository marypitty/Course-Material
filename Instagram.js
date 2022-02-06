 let foto = []

 async function getData() {
     let response = await fetch('https://api.unsplash.com/collections?client_id=HDHRkbYTckPzkf4KvP-1mT8vqUa9t6yyiSEjNAC3oM0')
     foto = await response.json()
     downloadImg(foto)

 }

 /* function downloadImg(foto) {
        let collect = document.getElementById("fotoCollection")
        for (let i = 0; i < foto.length; i++) {


            collect.insertAdjacentHTML('beforeend',
                `<img src="${foto[i].cover_photo.urls.small}">`
            );
        }

    }
 */

 function downloadImg(foto) {
     let collect = document.getElementById("fotoCollection")
     let inputimg = document.getElementById("input").value;
     for (let i = 0; i < foto.length; i++) {

         if (inputimg === foto[i].title) {
             collect.insertAdjacentHTML('beforeend',
                 `<img src="${foto[i].cover_photo.urls.small}" class="main-img">`
             );

         }


     }

 }

 /* function searchImage() {
     let collect = document.getElementById("fotoCollection");


     for (let i = 0; i < foto.length; i++) {
         let inputimg = document.getElementById("input").value;

         if (inputimg === foto[i].title) {
             collect.insertAdjacentHTML('beforeend',
                 `<img src="${foto[i].cover_photo.urls.small}">`
             );

         }



     }
 } */