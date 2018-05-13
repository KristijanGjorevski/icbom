// mobile drop menu
const mobileDropMenu = document.querySelector("#nav-list_mobile")
mobileDropMenu.addEventListener("click", function mobileButton() {

    //toggle icon
    this.classList.toggle("change");

    // display menu
    const menuToggle = document.querySelector("#mobile-menu");


    if (this.classList.value == "change") {
        menuToggle.style.display = "grid";

    } else {
        menuToggle.style.display = "none";

    }

});

const sendMail = () =>{

    let subject = document.querySelector('#subject').value;
    let body = document.querySelector('#message').value;
    window.open(`mailto:icbom.mk@hotmail.com?subject=${subject}&body=${body}`);

};

