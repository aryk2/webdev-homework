const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');

const fetchData = async (url) => {
  try {
    const result = await (await fetch(url)).json()

    var el = document.getElementById('loading');
    el.remove();

    result.drinks.forEach(drink => {
      const image = document.createElement("img");
      image.setAttribute('id', 'image');
      image.setAttribute('src', drink?.strDrinkThumb??"");
      image.setAttribute('alt', 'drink-img');

      const title = document.createElement("p");
      title.setAttribute('id', 'drink-title');
      const node = document.createTextNode(drink?.strDrink??"");
      title.appendChild(node);

      const item = document.createElement("div");
      item.setAttribute('id', 'item');

      item.appendChild(image);
      item.appendChild(title);

      app.appendChild(item)
    })

  } catch(e) {
    console.error(e)
  }
};

fetchData(url);