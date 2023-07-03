let loader = document.getElementById("loader")
let NewsContainer = document.getElementById("container-News")

let getnews = ()=>{


fetch(`https://api.currentsapi.services/v1/search?keyword=${search}&language=en&apiKey=_B3cXkK3aezrD-JbTrdj_ONN79n_d9dwBUC9bePBWkPLdplg`)
.then(data=> data.json())
.then( data=>{
  loader.style.display = "none"
  // NewsContainer.style.display = "block"
    let news = document.getElementById("news")
   
   const article = data.news
    for(var i=0 ; i< article.length ; i++ ){
        const { title,image,description,published } = article[i]
   news.innerHTML += ` 
   <div class="card mt-4" style="width: 18rem;">
  

   <img id="newsImage" src= "${article[i].image}" class="card-img-top news-img" alt="...">
   <div class="card-body">
     <h5 class="card-title"> "${article[i].title}"</h5>
     <p class="card-text">"${article[i].description.slice(0,100)+"....."}"</p>
     <p class="badge rounded-pill text-bg-secondary newsdate ">${moment(data.news[i].published).fromNow()}</p>
   </div>
   </img>

 `
//  if(urlToImage == null){

// document.getElementById("newsImage").style.src = "none"

//  }
    }

})
.catch(err=>(console.log(err)))
}


let newsSearch = ()=>{
    let news = document.getElementById("news")
    let search = document.getElementById("search")
 
    news.innerHTML=""

    getnews(search.value)
    
}
getnews()


