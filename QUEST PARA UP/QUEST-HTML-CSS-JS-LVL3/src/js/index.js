const form = document.getElementById('form')
const formGroup = document.querySelectorAll('input')
console.log(formGroup)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const inputValue = formGroup.value

    if(inputValue === ''){
        errorValidation(formGroup, "Preencha esse campo");
    }else {
        sucessValidation(formGroup)
    }
}

function errorValidation(formGroup, message) {
    const formControl = formGroup.parentElement;
    const small = formControl.querySelectorAll('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function sucessValidation(formGroup){
    const formControl = formGroup.parentElement;

    formControl.className = 'form-control sucess'
}