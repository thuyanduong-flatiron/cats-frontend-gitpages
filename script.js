document.addEventListener('DOMContentLoaded', function(){
  fetchCats()
})

function fetchCats(){
  fetch(`https://cats-backend.herokuapp.com/cats`)
  .then(res => res.json())
  .then(data => {
    //data is an array of cat objects
    data.forEach(cat => {
      let catInstance = new Cat(cat.id, cat.name, cat.breed, cat.age, cat.quote, cat.image, cat.hobbies)
      document.querySelector('#cats').appendChild(catInstance.render())
    })
  })
}
