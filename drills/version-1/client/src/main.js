let button = document.getElementById('button')

button.addEventListener('click', (e) => {
// add fetch to server
  let myInit = {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  }
  fetch('http://localhost:3000/cake', myInit)
  .then(res => res.blob())
  .then(res => {
    console.log(res)
  })
})
