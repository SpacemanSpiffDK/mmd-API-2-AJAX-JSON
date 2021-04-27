// JS by Dan Høegh
// UCN MMD 2021

// This code is for educational purposes
// All code decision are based on the current level of the students

// DANISH:  https://www.youtube.com/watch?v=VLvweih3yfk
// ENGLISH: https://www.youtube.com/watch?v=NiGj9OIxHcU


let wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

getDataWiki("David Braben");

function getDataWiki(searchTerm) {
  fetch(`${wikiUrl}${searchTerm}`) // fetch returns a promise containing the response as a response object. 
  .then(response => response.json()) // take the response and return is as in JSON format
  .then(data => {
    console.log(data);
    console.log(data.query.searchinfo.totalhits + " articles found");
    let results = data.query.search;
    results.forEach((item) => {
      console.log(item.title);
    });
  });
}

let NASAkey = "DEMO_KEY"; // Replace this with your own key
let NASAurl = "https://api.nasa.gov/planetary/apod";

getDataNASA();

function getDataNASA() {
  fetch(`${NASAurl}?api_key=${NASAkey}`) // fetch returns a promise containing the response as a response object. 
    .then(response => response.json()) // take the response and return is as in JSON format
    .then(data => {
      console.log("NASA:");
      console.log(data);
      // do what ever you want to do with the returned data
      // console.log(data.title);
      // console.log(data.date);
      // console.log(data.explanation);
      // console.log(data.media_type);
      // console.log(data.url);
      showAPOD(data);
    });
}

function showAPOD(data){
  // new string that contains the HTML that needs to go into our page
  let content = `
    <h1>${data.title}</h1>
    <h2>
      <date>${data.date}</date>
    </h2>`;
  
  // switch-case with the different possible types of APOD content (image/video)
  switch (data.media_type.toLowerCase()) {
    case "image":
      // If it is an image, then add an img tag to the content string
      content += `<img src="${data.url}" alt="${data.title}">`;      
      break;
      case "video":
        // If it is a video, then add a standard Youtube embed iframe-tag to the content string
        content += `<iframe width="960" height="540" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;
        break;
      default:
        // unknow media type, so let's tell the user that
        content += `<p>ERROR: Unknown media type</p>`;      
  }
  content += `<p>${data.explanation}</p>`; // add the description text to the string
  document.querySelector('#root').innerHTML = content; // output the string in the #root element
}
