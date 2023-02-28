const searchIcon = document.getElementById('search-icon')
const containerSearch = document.getElementById('container-search')

searchIcon.addEventListener('click', function() {

containerSearch.classList.toggle('container-active') //document.body.classList.toggle('input-search') - altenaria a classe no body
});
