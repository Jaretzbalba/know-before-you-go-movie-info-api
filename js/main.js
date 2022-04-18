
// add click event for movie search button
document.querySelector('button').addEventListener('click', getFetch)

//function to grab movie options from api based on search input
function getFetch(){

  const movie = document.querySelector('input').value
  const url1 = `https://imdb-api.com/en/API/SearchMovie/k_3k414l0w/${movie}`
  
  fetch(url1)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)

        fetch(url1)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              
              console.log(data.results)

            })
            .catch(err => {
                console.log(`error ${err}`)
            });

        const item = new MovieInfo(data) 
        item.showResults()

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}

//Create the class outside of the function and CALL it within the function
class MovieInfo {
  constructor(movieData) { // I am passing in data
    this.results = movieData.results
  }

  showResults() {
    let tableRef = document.getElementById('movie-table')

    //No i++ because you are deleting the row so i is always the next row
    for( let i = 1; i < tableRef.rows.length;) { 
      tableRef.deleteRow(i);
    }
    for(let key in this.results) {
      let newRow = tableRef.insertRow(-1)
      let newImageCell = newRow.insertCell(0)
      let newTitleCell = newRow.insertCell(1)
      let newImage = document.createElement('img')
      newImage.src = this.results[key].image
      let newTitleText = document.createTextNode(this.results[key].title)
      newImageCell.appendChild(newImage)
      newTitleCell.appendChild(newTitleText)
    } 
  }
}

document.querySelector('')


