const nav = document.querySelector('nav');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Menu';
toggleBtn.style.backgroundColor = '#4A90E2';
toggleBtn.style.color = 'white';
toggleBtn.style.border = 'none';
toggleBtn.style.padding = '10px 20px';
toggleBtn.style.margin = '10px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.display = 'none';
nav.prepend(toggleBtn);

const navList = nav.querySelector('ul');

function toggleMenu() {
    if (navList.style.display === 'flex' || navList.style.display === '') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.alignItems = 'center';
    }
}

toggleBtn.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'row';
    } else {
        navList.style.display = 'none';
        toggleBtn.style.display = 'block';
    }
});

if (window.innerWidth < 768) {
    navList.style.display = 'none';
    toggleBtn.style.display = 'block';
}
