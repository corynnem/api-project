const url = 'https://api.nasa.gov/planetary/apod?api_key=OY31yW68GoDGw4O0APqvvhM0VgNYWyT7PRxWoV0s';
const key = 'OY31yW68GoDGw4O0APqvvhM0VgNYWyT7PRxWoV0s';


let image = document.getElementById('img');
let copyright = document.getElementById('copyright');
let title = document.getElementById('title')
let explanation = document.getElementById('explanation');


function fetchResults(e) {
  console.log('hello')
  fetch(url)
    .then(function (result) {
      console.log(result)
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      // displayResults(json);

      image.innerHTML = "<img src ='" + json.url + "' style = 'width: 40%'/>";
      copyright.innerHTML = "By " + json.copyright;
      title.innerHTML = json.title;
      explanation.innerHTML = json.explanation;

    })


}

fetchResults();
