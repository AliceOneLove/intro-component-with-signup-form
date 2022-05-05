function checkInputs() {
    // let elements = ['inputs-block__name', 'inputs-block__last-name', 'inputs-block__email', 'inputs-block__password'];
    let inputElements = new Map([
        ['inputs-block__name', 'inputs-block__name-warning'],
        ['inputs-block__last-name', 'inputs-block__last-name-warning'],
        ['inputs-block__email', 'inputs-block__email-warning'], 
        ['inputs-block__password', 'inputs-block__password-warning']
    ]);
    // let warnings = ['inputs-block__name-warning', 'inputs-block__last-name-warning', 'inputs-block__email-warning', 'inputs-block__password-warning'];
    for (let e of inputElements.keys()) {
        let input = document.getElementById(e),
            warning = document.getElementById(inputElements.get(e));
        if (input.value == '') {
            input.setAttribute("style", "background: url(images/icon-error.svg) no-repeat 95%;"
            + "outline: 1px solid hsl(0, 100%, 74%);");
            if (e == 'inputs-block__email') {
                input.placeholder = 'email@example.com';
                input.classList.add('inputs-block__incorrect-email');
            }
            warning.hidden = false;
        }
        else {
            input.removeAttribute("style", "background: url(images/icon-error.svg) no-repeat 95%;"
            + "outline: 1px solid hsl(0, 100%, 74%);");
            if (e == 'inputs-block__email') {
                input.placeholder = 'Email Address';
                input.classList.remove('inputs-block__incorrect-email');
            }
            warning.hidden = true;
        }
    }
}