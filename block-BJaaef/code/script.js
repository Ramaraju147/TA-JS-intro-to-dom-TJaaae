function gotPeople(arr){
  let html = `
  <h1>Peoples of GOT</h1>
  <ul>
  ${arr.houses.map(house => {
   return house.people.map(p => {
       return `<li  class="card">
      <div class="card-heading">
      <img src="${p.image}">
      <h2>${p.name}</h2>
      </div>
      <p>${p.description}</p>
      <button><a href=${p.wikiLink}>Learn More!</a></button>
      </li>`
    }).join("")
  }).join("")}
  </ul>
  `
  return html;
}

console.log(gotPeople(got))

document.body.innerHTML = gotPeople(got);