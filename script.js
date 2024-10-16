//#region Page Loader - Fade out when Fully Loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");

    setTimeout(() => {
        loader.style.display = "none"; 
    }, 500); 
});
//#endregion

//#region Closes the dropdown menu after clicking.
document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});
//#endregion

//#region Phone number masking JQuery //
$(document).ready(function(){
    $("#tel").mask("(00)00000-0000", {
        placeholder: "(00)00000-0000"
    })
//#endregion

//#region See more Button JQuery //
    $(".btn-see-more").click(function(){
        if ($(".btn-see-more").text() == "Ver mais") {
            $(".btn-see-more").text("Ver menos");
        } else {
            $(".btn-see-more").text("Ver mais");
        };
        $(".container-hidden").slideToggle();
    })
});
//#endregion
