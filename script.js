let string = "";
let type = new Audio("click.mp3");
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        type.play();
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})