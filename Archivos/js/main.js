
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*====================== FILTRAR PESTAÑAS =============================*/
// Seleccionamos todos los elementos con el atributo 'data-target' y 'data-content'
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

// Iteramos sobre cada elemento 'tab' obtenido
tabs.forEach(tab => {
    // Agregamos un evento de clic a cada 'tab'
    tab.addEventListener('click', () => {
        // Obtenemos el elemento objetivo basado en el 'data-target' del 'tab' actual
        const target = document.querySelector(tab.dataset.target)

        // Iteramos sobre todos los elementos 'tabContents' para ocultarlos
        tabContents.forEach(tc => { /*tc = mostrar y ocultar contenido */
            tc.classList.remove('filters__active')
        })
        // Mostramos el contenido correspondiente al 'tab' actual
        target.classList.add('filters__active')

        // Iteramos sobre todos los 'tabs' para desactivar su estado activo
        tabs.forEach(t => { /* t = Contenido*/
            t.classList.remove('filter-tab-active')
        })
        // Activamos el estado activo en el 'tab' actual
        tab.classList.add('filter-tab-active')
    })
})