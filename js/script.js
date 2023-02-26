const searchIcon = document.getElementById('search-icon')
const inputBar = document.getElementById('input-search')

searchIcon.addEventListener('click', function() {

inputBar.classList.toggle('input-search-bar') //document.body.classList.toggle('input-search') - altenaria a classe no body
});
