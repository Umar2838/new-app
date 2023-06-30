
let getnews = (search)=>{


fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=12&apiKey=2d78b79c68ea4932904beba61638df28`)
.then(data=> data.json())
.then( data=>{
    let news = document.getElementById("news")
   const article = data.articles 
    for(var i=0 ; i< article.length ; i++ ){
        // const { title,urlToImage,description } = article[i]
   news.innerHTML += ` 
   <div class="card mt-4" style="width: 18rem;">
   <img id="newsImage" src= "${article[i]?.urlToImage}" class="card-img-top news-img" alt="...">
   <div class="card-body">
     <h5 class="card-title"> "${article[i]?.title}"</h5>
     <p class="card-text">"${article[i]?.description}"</p>
   
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
getnews()

let newsSearch = ()=>{
    let news = document.getElementById("news")
    let search = document.getElementById("search")
 
    news.innerHTML=""
    getnews(search.value)
    
}




    let BusinessNews = () =>{
        var business = document.getElementById("business")
fetch("https://newsapi.org/v2/top-headlines?category=business&apiKey=2d78b79c68ea4932904beba61638df28")
.then(busdata=> busdata.json())
.then(busdata=>{
    const article = busdata.articles 
    for(var i=0 ; i<=article.length ; i++ ){
    
   news.innerHTML += ` 
   <div class="card mt-4" style="width: 18rem;">
   <img id="newsImage" src="${article[i].urlToImage}" class="card-img-top news-img" alt="...">
   <div class="card-body">
     <h5 class="card-title">${article[0].title}</h5>
     <p class="card-text">${article[0].description}</p>
   
   </div>
 </div>
 `

    }
})
.catch(err=>(console.log(err)))
}
// Business()

let Business = ()=> {
  let news = document.getElementById("news")

}