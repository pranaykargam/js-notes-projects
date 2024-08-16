const accesskey = "6AMicgNPEJ4UcguHPnMURGLbh6k-HM6_1LAMpdVie8o";

const formElement = document.querySelector("form");
const inputElement = document.getElementById("search-input");
const searchresults = document.querySelector(".search-results");
const ShowMore = document.getElementById("Show-More-Button");


let inputData = "";
let page = 1;

 async function searchImages() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query= ${inputData}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;

    if (page ===1){
        searchresults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;


        imageWrapper.appendChild(image );
        imageWrapper.appendChild(imageLink);
        searchresults.appendChild(imageWrapper);

    });

    page++
    if(page>1){
        ShowMore.style.display = "block";
    }
}

formElement.addEventListener("submit" ,(event) => {
      event.preventDefault();
      page =1;
      searchImages();
});


ShowMore.addEventListener("click",() =>{
    searchImages();
});





