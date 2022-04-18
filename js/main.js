
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const movie = document.querySelector('input').value
  const url = `https://imdb-api.com/en/API/SearchMovie/k_3k414l0w/${movie}`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data.results)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}


