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


/*====================== ENVIAR CORREO =============================*/
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nombre: ${fullName.value}<br> Correo: ${email.value}<br> Celular: ${phone.value}<br> Mensaje: ${message.value}`

    Email.send({
        SecureToken : "5e93a2e3-2c15-4ab9-97a6-1095ed639b93",
        To : 'juanguevara1121@gmail.com',
        From : "juanguevara1121@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Bien",
                text: "¡Su mensaje ha sido enviado!",
                icon: "success"
            });
        }
      });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const errorTxtEmail = document.querySelector(".error__txt.email");
    
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "* Correo electrónico inválido";
        }else{
            errorTxtEmail.innerText = "* Espacio correo electrónico en blanco";
        }

    }else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") 
    && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});

const toggle = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    // Cambiar icono (hamburguesa / cerrar)
    toggle.querySelector('i').classList.toggle('ri-menu-line');
    toggle.querySelector('i').classList.toggle('ri-close-line');
  });

  // Cerrar menú cuando se da click en un enlace (opcional)
  document.querySelectorAll('.navbar__menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.querySelector('i').classList.add('ri-menu-line');
      toggle.querySelector('i').classList.remove('ri-close-line');
    });
  });
