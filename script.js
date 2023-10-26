
const movies=[
    {
        id:3,
        image:"assest/veersimhareddy.jfif",
        name:"Veer Simha Reddy",
        language:"HI",
        url:"movies/Veera-Simha-Reddy.mp4"
    },
    {
        id:3,
        image:"assest/veersimhareddy.jfif",
        name:"Veer Simha Reddy",
        language:"HI",
        url:"movies/Veera-Simha-Reddy.mp4"
    },
    {
        id:2,
        image:"assest/blue_beetle_poster_.avif",
        name:"Blue Beetle",
        language:"EN",
        url:"movies/mealplaner.mp4"
    },
    {
        id:1,
        image:"assest/Hari-Hara-Veera-Mallu.avif",
        name:"Veera Mallu",
        language:"TL",
        url:"movies/bhulbhulaya.mp4"
    }
]

const container=document.querySelector(".container")

movies.map((data,index)=>{
    // console.log(data)
    const movie_container= document.createElement("div")
    movie_container.classList.add("movie_container")
    movie_container.innerHTML=`
    <img src=${data.image} alt="Poster Not Available" class="poster"/>
            <div class="description_container">
            <div class="description">
                <h2><a href=#hero""alt="_blank" onclick="getID(${movies[index].id})">${data.name} </a></h2>
                <div class="language_sec">
                    <p class="lang_f">LN</p>
                    <p class="lang_l">${data.language}</p>
                </div>
            </div>
            <div class="description">
                <div class="Download"><a href=${data.url} download><i class="fa fa-download "></i> Download</a></div>
                <a href="#hero" class="watch" onclick="getID(${movies[index].id})"><i class="fa fa-video-camera" aria-hidden="true"></i> Watch</a>
            </div>
        </div>
    </div>
    `
    container.appendChild(movie_container)

}
)


 function getID(id) {
        console.log(id);
        const selectedMovie = movies.find(movie => movie.id === id); // Fix the variable name here
    console.log(selectedMovie); // Log the selected movie object
    if (selectedMovie && selectedMovie.url) {
        const hero= document.querySelector("#vedio")
        hero.src=selectedMovie.url
        console.log(movieurl)
    } else {
        console.log('Invalid movie ID or URL.');
    } 
}
// console.log(movieurl)
//     const box = document.createElement('div');
//         box.classList.add('box');
//         box.innerHTML = `
//             <video controls>
//                 <source src="${movieurl}" type="video/mp4">
//                 Your browser does not support the video tag.
//             </video>
//         `;
//         hero.appendChild(box);
    
    
    
    
    
    // Fix the variable name here
    // console.log(selectedMovieurl); // Log the selected movie object
    // if (selectedMovieurl) {
    //     const box = document.createElement('div');
    //     box.classList.add('box');
    //     box.innerHTML = `
    //         <video controls>
    //             <source src="${selectedMovieurl}" type="video/mp4">
    //             Your browser does not support the video tag.
    //         </video>
    //     `;
    //     hero.appendChild(box);
    // } else {
    //     console.log('Invalid movie ID or URL.');
    // }
    



