const API_KEY = "fccc374edc1849b89afbac179d760e8a";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchData(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    return data;
}

// Initial data fetch
fetchData("all").then((data) => renderMain(data.articles));

// Menu button functionality
let mobilemenu = document.querySelector(".mobile");
let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
    mobilemenu.classList.toggle("hidden");
});

// Render news function
function renderMain(arr) {
    let mainHTML = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].urlToImage) {
            mainHTML += `<div class="card">
                            <a href=${arr[i].url}>
                                <img src=${arr[i].urlToImage} lazy="loading" />
                                <h4>${arr[i].title}</h4>
                                <div class="publishbyDate">
                                    <p>${arr[i].source.name}</p>
                                    <span>•</span>
                                    <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                                </div>
                                <div class="desc">
                                    ${arr[i].description}
                                </div>
                            </a>
                        </div>`;
        }
    }

    document.querySelector("main").innerHTML = mainHTML;
}

// Search button functionality
const searchForm = document.getElementById("searchForm");
const searchFormMobile = document.getElementById("searchFormMobile");
const searchInput = document.getElementById("searchInput");
const searchInputMobile = document.getElementById("searchInputMobile");

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(searchInput.value); // Debugging
    const data = await fetchData(searchInput.value);
    renderMain(data.articles);
});

searchFormMobile.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(searchInputMobile.value); // Debugging
    const data = await fetchData(searchInputMobile.value);
    renderMain(data.articles);
});

// Function to handle category searches
async function Search(query) {
    const data = await fetchData(query);
    renderMain(data.articles);
}

















































// const API_KEY = "fccc374edc1849b89afbac179d760e8a"
// const url = "https://newsapi.org/v2/everything?q="



// async function fetchData(query){
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
//     const data = await res.json()
//     return data
// }
// fetchData("all").then(data => renderMain(data.articles))

// //menu btn
// let mobilemenu = document.querySelector(".mobile")
// let menuBtn = document.querySelector(".menuBtn")
// let menuBtnDisplay = true;

// menuBtn.addEventListener("click",()=>{
//     mobilemenu.classList.toggle("hidden")
// })


// //render news 
// function renderMain(arr){
//     let mainHTML = ''
//     for(let i = 0 ; i < arr.length ;i++){
//         if(arr[i].urlToImage){
//         mainHTML += ` <div class="card">
//                         <a href=${arr[i].url}>
//                         <img src=${arr[i].urlToImage} lazy="loading" />
//                         <h4>${arr[i].title}</h4>
//                         <div class="publishbyDate">
//                             <p>${arr[i].source.name}</p>
//                             <span>•</span>
//                             <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
//                         </div>
//                         <div class="desc">
//                            ${arr[i].description}
//                         </div>
//                         </a>
//                      </div>
//         `
//         }
//     }

//     document.querySelector("main").innerHTML = mainHTML
// }


// const searchBtn = document.getElementById("searchForm")
// const searchBtnMobile = document.getElementById("searchFormMobile")
// const searchInputMobile = document.getElementById("searchInputMobile") 
// const searchInput = document.getElementById("searchInput")

// searchBtn.addEventListener("submit",async(e)=>{
//     e.preventDefault()
//     console.log(searchInput.value)

//     const data = await fetchData(searchInput.value)
//     renderMain(data.articles)

// })
// searchBtnMobile.addEventListener("submit",async(e)=>{
//     e.preventDefault()
//     const data = await fetchData(searchInputMobile.value)
//     renderMain(data.articles)
// })


// async function Search(query){
//     const data = await fetchData(query)
//     renderMain(data.articles)
// }


