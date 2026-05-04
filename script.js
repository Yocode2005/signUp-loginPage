const container = document.querySelector('.container'); // to access comntainer
const registerBtn = document.querySelector('.register-btn'); // to acess register button by query
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
