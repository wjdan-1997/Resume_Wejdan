
const allSections = document.querySelectorAll('section');
const navList = document.querySelector('.navbar-nav');

document.addEventListener('DOMContentLoaded', function buildNav() {
    for (const one of allSections) {
        //     allSections = []
        //     one = one of allSections
        console.log('has attribute ', one.hasAttribute('data-nav'))

        if (one.hasAttribute('data-nav')) {
            console.log("Yess")
            let aLinkTag = document.createElement('a');
            let liTag = document.createElement('li');
            liTag.setAttribute('class', 'nav-item');
            aLinkTag.setAttribute('class','nav-link')
            let liTagId = 'li_' + one.getAttribute('id');
            liTag.setAttribute('id', liTagId)
            aLinkTag.textContent = one.getAttribute('data-nav'); // take the value
            liTag.addEventListener('click', () => {
                one.scrollIntoView({
                    "behavior": 'smooth'
                });
            });
            liTag.appendChild(aLinkTag);
            navList.appendChild(liTag);

        }
    }
});



