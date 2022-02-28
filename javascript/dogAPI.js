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
 const Display100Data = DogList.slice(0,100);
  
 for(const Dog of Display100Data){
     const div = document.createElement ("div")
     div.className = "col-lg-4 d-flex justify-content-center";
     div.innerHTML =`
     <div class="card mb-3" style="width: 18rem; ">
     <img src="${Dog.image.url}" class="card-img-top" alt="...">
     <div class="card-body">
       <h4 class="card-title">Name:${Dog.name}</h4>
       <p class="card-text">Temperament:${Dog.temperament}</p>
       <a href="#" class="btn btn-primary">Learn More</a>
     </div>
   </div>
     `
     console.log(div);
     DisplayData .appendChild(div)

 }
}