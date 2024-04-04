

/*====================== FILTRAR PESTAÑAS =============================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => { /*tc = mmostrar y ocultar contenido */
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => { /* t = Contenido*/
            t.classList.remove('filter-tab-active')
        })
        MimeTypeArray.classList.add('filter-tab-active')
    })
})