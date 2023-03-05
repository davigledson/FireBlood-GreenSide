const searchIcon = document.getElementById('search-icon')
const containerSearch = document.getElementById('container-search')

searchIcon.addEventListener('click', function() {

containerSearch.classList.toggle('container-active') //document.body.classList.toggle('input-search') - altenaria a classe no body
});


const arrowLeft = document.getElementById('arrow-left')
const leftContainerActive = document.getElementById('left-menu-container-active')

arrowLeft.addEventListener('click',function(){
leftContainerActive.classList.toggle('left-menu-container-active')
})