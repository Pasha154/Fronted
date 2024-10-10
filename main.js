
let entStr = document.querySelector('#entStr');
let goToSite = document.querySelector('#goToSite')

let userLink = '';

entStr.addEventListener('click', ()=>{
  let addToLink = prompt("Link");
  userLink = addToLink;
})

goToSite.addEventListener('click', ()=>{
location.assign(userLink);
})