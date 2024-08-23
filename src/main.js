import Handlebars from "handlebars";

const newTemplate=document.getElementById('newTemplate').innerHTML.trim();


const newShablon=Handlebars.compile(newTemplate)
document.body.insertAdjacentHTML('beforeend', newShablon({firstname:'eco', lastname:'top'}));
console.log(newShablon)
console.log(newTemplate)