//Clikcked button function.........

const Load_button =()=>{
    const url = "https://api.thedogapi.com/v1/breeds"
fetch(url)
.then(Response => Response.json())
.then(data =>displayDogs(data));
}

//display dog list......
const displayDogs = (DogList) => {
 const DisplayData = document.getElementById("display_Data");
 const Display10Data = DogList.slice(0,10);
  
 for(const Dog of Display10Data){
     const div = document.createElement ("div")
     div.innerHTML =`
     <div class="card" style="width: 18rem; d-flex">
     <img src="${Dog.image.url}" class="card-img-top" alt="...">
     <div class="card-body">
       <h4 class="card-title">Name:${Dog.name}</h4>
       <p class="card-text">Temperament:${Dog.temperament}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     `
     console.log(div);
     DisplayData .appendChild(div)

 }
}