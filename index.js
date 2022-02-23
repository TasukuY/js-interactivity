//Grab elements
const addBtn = document.querySelector('button');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const message = document.getElementById('message');

//callback functions
const addMovie = event => {
    event.preventDefault();

    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    ul.appendChild(movie);
    inputField.value = '';
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteMovie);
    
}

const deleteMovie = event => {
    //console.log('function called!')
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}

//addEventListener
form.addEventListener('submit', addMovie);
addBtn.addEventListener('click', addMovie);


