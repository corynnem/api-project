const url = 'https://api.nasa.gov/planetary/apod?api_key=OY31yW68GoDGw4O0APqvvhM0VgNYWyT7PRxWoV0s';
const key = 'OY31yW68GoDGw4O0APqvvhM0VgNYWyT7PRxWoV0s';


let image = document.getElementById('img');
let copyright = document.getElementById('copyright');
let title = document.getElementById('title')
let explanation = document.getElementById('explanation');


function fetchResults(e) {
  console.log('hello')
  console.log(url)
  fetch(url)
    .then(function (result) {
      console.log(result)
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      // displayResults(json);

      image.innerHTML = "<img src ='" + json.url + "' style = 'width: 40%'/>";
      
      title.innerHTML = json.title;
      explanation.innerHTML = json.explanation;
      
      console.log(json.copyright)
      if(json.copyright !== undefined){
        copyright.innerHTML = "By " + json.copyright;
       
      }else{
        copyright.innerHTML = 'NASA';
      }
      
    })


}

fetchResults();
