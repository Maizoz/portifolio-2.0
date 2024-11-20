const arrow = document.querySelector('.arrow');
const dropdownContent = document.querySelector('.dropdown-content');

arrow.addEventListener('click', () => {
    arrow.classList.toggle('rotate');
    dropdownContent.classList.toggle('show');
});
