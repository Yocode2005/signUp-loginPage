const container = document.querySelector('.container'); // to access comntainer
const registerBtn = document.querySelector('.register-btn'); // to acess register button by query
const loginBtn = document.querySelector('.login-btn'); // to access logibbtn

registerBtn.addEventListener('click', () => { // add eventlistner
    container.classList.add('active'); // to add class
})

loginBtn.addEventListener('click', () => { // add event listner on liginBtn
    container.classList.remove('active');
})
