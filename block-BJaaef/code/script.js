function gotPeople(arr) {
  let html = `
    <h1 class="heading">👑People of GOT</h1>
    <ul class="container">
    ${arr.houses
      .map((element) => {
        {
          return element.people
            .map((p) => {
              return `<li class="box">
        <div class="display-name">
        <img src=${p.image}>
        <h2>${p.name}</h2>
        </div>
        <p>${p.description}</p>
        <button>Learn More!</button>
        </li>`;
            })
            .join("");
        }
      })
      .join("")}
    </ul>`;
  return html;
}

document.body.innerHTML = gotPeople(got);
