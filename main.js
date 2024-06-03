document.querySelector('button').addEventListener('click', getNasaPicture)

document.querySelector('img').src = localStorage.getItem('picture')
document.querySelector('h2').innerText = localStorage.getItem('explanation')

function getNasaPicture(){
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=O109QadA5205HT11fTVOn7NrKGNS5hqEBjLdrAz0&date=${choice}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('h2').innerText = data.explanation
      localStorage.setItem('picture', data.hdurl)
      localStorage.setItem('explanation', data.explanation)
   


    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}