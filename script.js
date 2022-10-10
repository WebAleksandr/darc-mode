let content = document.getElementsByTagName('body')[0];
console.log(content);
let darkMode = document.getElementById('dack-change');

darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
});