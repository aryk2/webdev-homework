$(document).ready(function () {
  var settings = {
    "url": "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {

    try {
      let app = document.querySelector('#results');

  
      var el = document.getElementById('loading');
      el.remove();
  
      response?.drinks?.forEach(drink => {
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
  });

  
});

