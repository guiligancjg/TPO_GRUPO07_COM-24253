/******** animación menu movile *****************/
function openNav(){
    event.preventDefault();
    document.getElementById("mobile-menu").style.width = "100%";
    document.querySelector(".close").style.right = "5%";
    document.querySelector(".overlay-content__titulo").style.fontSize = "2rem";
}


function closeNav(){
    event.preventDefault();
    document.getElementById("mobile-menu").style.width = "0%";
    document.querySelector(".close").style.right = "100%";
    document.querySelector(".overlay-content__titulo").style.fontSize = "0rem";
}


const div = document.querySelector(".header__logo");

div.addEventListener("click", function() {
    window.location.href = "index.html";
});




/******** validacion forumlario Delivery ************/

function contacFormularioDelivery() {
    const form = document.querySelector(".formulario-delivery");
    const inputs = document.querySelectorAll(".formulario-delivery [required]");
    //console.log(inputs);


    inputs.forEach(input => {
        const span = document.createElement("span");
        span.id = input.name;
        span.textContent = input.title;
        span.classList.add("contac-form-error", "none"); //
        input.insertAdjacentElement("afterend", span);
    });


    document.addEventListener("keyup", (e) => {
        if(e.target.matches(".formulario-delivery [required]")){
            let input = e.target;
            pattern = input.pattern;
            //console.log(input, pattern);
            
            if(pattern) {
                let regule = new RegExp(pattern);
                return !regule.exec(input.value) 
                ? document.getElementById(input.name).classList.add("is-active")              
                : document.getElementById(input.name).classList.remove("is-active");
            }

            if(!pattern) {
                return input.value === ""
                ? document.getElementById(input.name).classList.add("is-active")              
                : document.getElementById(input.name).classList.remove("is-active");
            }


        }
    });

    document.addEventListener("submit", (e) =>{
        e.preventDefault();
        //alert("Enviar formulario")
        const cargando = document.querySelector(".contact-form-loader");
        const response = document.querySelector(".contact-form-response");
    
        cargando.classList.remove("none");
        //response.classList.remove("none");

        setTimeout(() => {
            cargando.classList.add("none");
            response.classList.remove("none");
            form.reset();

        }, 4000);

        setTimeout(() => {
            response.classList.add("none");

        }, 3000);

    });

}





contacFormularioDelivery();





document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Muestra el loader
        document.querySelector(".contact-form-loader").classList.remove("none");

        // Oculta la respuesta anterior
        document.querySelector(".contact-form-response").classList.add("none");

        // Obtén los datos del formulario
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        try {
            // Envía los datos al servidor
            const response = await fetch("http://localhost:3000/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            // Verifica si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            // Muestra el mensaje de éxito
            document.querySelector(".contact-form-response").classList.remove("none");

        } catch (error) {
            // Muestra un mensaje de error
            alert("Hubo un problema con el envío del formulario: " + error.message);
        } finally {
            // Oculta el loader
            document.querySelector(".contact-form-loader").classList.add("none");
        }
    });
});
