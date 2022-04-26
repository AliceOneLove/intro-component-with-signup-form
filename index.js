function checkInputs() {
    let elements = ['name', 'last-name', 'email', 'password'];
    for (e of elements) {
        let input = document.getElementById(e);
        if (input.value == '') {
            input.setAttribute("style", "background: url(images/icon-error.svg) no-repeat 95%;"
            + "outline: 1px solid hsl(0, 100%, 74%);");
            if (e == 'email') {
                input.placeholder = "email@example.com";
                input.classList.add('inputs-block__incorrect-email');
            }
        }
    }
}