let category = document.querySelectorAll('.category');
let icon = document.querySelectorAll('.icon');
let score = document.querySelectorAll('.score-value');

const resposta =  fetch('data.json')
.then(res => res.json())
.then(res => {
   for(let i = 0; i < res.length; i++){
    category[i].innerHTML = res[i].category;
    icon[i].src = res[i].icon; 
    score[i].innerHTML = res[i].score;
   }
})