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