const firstContainer = document.querySelector('#first-container');
const buttons = document.querySelectorAll('.buttons');
const btnSubmit = document.querySelector('#btn-submit');
const secondContainer = document.querySelector('#second-container');
let selected = '';

buttons.forEach(elemento => {
    elemento.addEventListener('click', () => {
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i].classList.contains('button-select')){
                buttons[i].classList.remove('button-select');
            }
        }
        elemento.classList.add('button-select');
        console.log(elemento);
    })
})

btnSubmit.addEventListener('click', () => {
    for(let i = 0; i< buttons.length; i++){
        if(buttons[i].classList.contains('button-select')){
            selected = buttons[i].textContent;
            firstContainer.classList.add('hide');
            secondContainer.classList.remove('hide');
            secondContainer.classList.add('show');
        
            document.querySelector('#num-selected').textContent = selected;
        }
    }
    
   
})


