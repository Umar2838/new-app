getNews = (search)=>{
  let loader = document.getElementById("loader")
  let content = document.getElementById("content")
fetch(`https://api.currentsapi.services/v1/search?keywords=${search}&language=en&page_size=12&apiKey=_B3cXkK3aezrD-JbTrdj_ONN79n_d9dwBUC9bePBWkPLdplg`)
// https://api.currentsapi.services/v1/search?' +
//             'keywords=Amazon&language=en&' + 
//             'apiKey=API_KEY';
.then(data=> data.json())
.then(data=> {
  console.log(data)
  loader.style.display = "none"
  content.style.display = "block"
  let news = document.getElementById("news")
  const articles = data.news
for(i=0;i<articles.length;i++)

news.innerHTML += `
<div class="card newsCard mt-2 bg-primary " style="width: 18rem;">
<a href="${articles[i].url}" >
<img src="${articles[i].image}" class="card-img-top news-img" alt="...">
</a>
<div class="card-body">
  <h5 class="card-title text-light">${articles[i].title.slice(0,20)+"...."}</h5>
  <p class="card-text text-light">${articles[i].description.slice(0,50)}</p>
  <span class="badge text-bg-light mb-2 ">${moment(data.news[i].published).fromNow()}</span>
  </br>

</div>
</div> 
`
})


.catch(err=>console.log(err))
}
getNews("news")

let page = 1;

newsSearch = ()=>{
  let search = document.getElementById("search")
  news.innerHTML = ""

  loader.style.display = "flex"
  content.style.display = "none"
  getNews(search.value)
}

let loadMore = () =>{
  let search = document.getElementById("search")
  page++;
  getNews(search.value,page)
  loader.style.display = "flex"
  content.style.display = "none"
}

window.onscroll = function(data){
  if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
loadMore()
  }
  };