const wrpNav = document.querySelector('[data-wrp-nav]');

if(wrpNav) {
    const arrBtn = wrpNav.querySelectorAll('[data-btn]');
    const arrActive = wrpNav.querySelectorAll('[data-active]');

    arrBtn.forEach((el, index) => {
        el.addEventListener('click', () => {
            delActive(arrActive);
            arrActive[index].classList.add('active');
        })
    })
}

function delActive(arr) {
    arr.forEach(el => {
        el.classList.remove('active');
    })
}