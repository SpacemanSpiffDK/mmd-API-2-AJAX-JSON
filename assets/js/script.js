// JS by Dan Høegh
// UCN MMD 2021

// This code is for educational purposes
// All code decision are based on the current level of the students

// DANISH:  https://www.youtube.com/watch?v=VLvweih3yfk
// ENGLISH: https://www.youtube.com/watch?v=NiGj9OIxHcU

let NASAkey = "DEMO_KEY"; // Replace this with your own key

let NASAurl = "https://api.nasa.gov/planetary/apod";
let wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

// getDataNASA();
getDataWiki("David Braben");

function getDataNASA() {
  fetch(`${NASAurl}?api_key=${NASAkey}`) // fetch returns a promise containing the response as a response object. 
    .then(response => response.json()) // take the response and return is as in JSON format
    .then(data => {
      console.log("NASA:");
      console.log(data);
      // do what ever you want to do with the returned data
      console.log(data.title);
      console.log(data.explanation);
    });
}

function getDataWiki(searchTerm) {
  fetch(`${wikiUrl}${searchTerm}`) // fetch returns a promise containing the response as a response object. 
    .then(response => response.json()) // take the response and return is as in JSON format
    .then(data => {
      console.log("--------------------------------------------------------");
      console.log("Wiki:");
      console.log(data);
      console.log(data.query.searchinfo.totalhits + " articles found");
      let results = data.query.search;
      results.forEach((item) => {
        console.log(item.title);
      });
    });
}