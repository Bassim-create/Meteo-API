let search = document.querySelector('#keyword');
const button = document.querySelector('#bouton');
const liste = document.querySelector('#list');
const body = document.querySelector('body');
button.addEventListener('click', (event)=>{
   event.preventDefault();
let recherche = search.value;
   liste.innerHTML = "";
let url ='http://api.openweathermap.org/data/2.5/weather?q='+recherche+'&units=metric&appid=bfe0f70e0b20b22795cd09a72dc6dc9a&lang=fr';

fetch(url).then(response => response.json()).then((data) => {
            liste.insertAdjacentHTML('beforeend', `
               <li>
               <h1>  ${(data.name)}</h1>
               <h1>  ${(data.main.temp)}°</h1>
               </li>`)
               if(data.main.temp < 10){ 
                  body.style.backgroundImage = "url('neige.jpg')";
               } else if (data.main.temp <= 20){
                  body.style.backgroundImage = "url('automne.jpg')";
               }
               else if (data.main.temp > 20){
                  body.style.backgroundImage = "url('plage.jpg')";
               }
            });
            search.value = "";
});


   