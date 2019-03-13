// JS by Dan Høegh
// UCN MMD 2019

// This code is for educational purposes
// All code decision are based on the current level of the students

let NASAkey = DEMO_KEY;

window.onload = function(){
    getDataNASA();
    getDataWiki("David Braben");
}

function getDataNASA(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // we're ok, lets get the data
       data = JSON.parse(this.responseText);
       console.log("--------------------------------------------------------");
       console.log("NASA:");
       console.log(data);
       console.log(data.explanation);
       console.log(data.url);
      }
    };
    xhttp.open("GET", `https://api.nasa.gov/planetary/apod?api_key=${NASAkey}`, true);
    xhttp.send();
}


function getDataWiki(searchTerm){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // we're ok, lets get the data
       data = JSON.parse(this.responseText);
       console.log("--------------------------------------------------------");
       console.log("Wiki:");
       console.log(data);
       console.log(data.query.searchinfo.totalhits + " articles found");
       let results = data.query.search;
       for (let i=0; i < results.length; i++){
        console.log(results[i].title);
       }
      }
    };
    xhttp.open("GET", `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchTerm}`, true);
    xhttp.send();
}