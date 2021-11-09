const image = document.createElement("img");
image.setAttribute('id', 'image');
image.setAttribute('src', 'http://placekitten.com/200/200');
image.setAttribute('alt', 'kitten');

const title = document.createElement("p");
title.setAttribute('id', 'title');
const node = document.createTextNode("I'm baby everyday carry blue bottle vegan. ");
title.appendChild(node);

const body = document.createElement("p");
body.setAttribute('id', 'body');
const node1 = document.createTextNode("yr umami normcore austin bicycle rights whatever etsy selfies fanny pack edison bulb sriracha vaporware. Whatever crucifix offal, fam kitsch poke tote bag hoodie. Flannel snackwave schlitz shabby chic. Listicle tumeric letterpress glossier mixtape. Heirloom snackwave echo park, swag wolf knausgaard retro flexitarian. 8-bit 90's gochujang subway tile everyday carry whatever.");
body.appendChild(node1);


const element = document.getElementsByTagName("main")[0];
element.setAttribute('id', 'main');

element.appendChild(image);
element.appendChild(title);
element.appendChild(body);

document.getElementById('main').style.display = "flex"
document.getElementById('main').style.flexDirection = "column"
document.getElementById('main').style.alignItems = "center"

document.getElementById('image').style.borderRadius = "50%"
document.getElementById('title').style.fontWeight = 600
