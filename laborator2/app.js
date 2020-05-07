document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = 'violet'
    const newDiv = document.createElement('div')
    newDiv.id = 'text'
    newDiv.innerText = 'START'
    document.body.appendChild(newDiv)
     setTimeout(() => {
     	document.body.style.backgroundColor = 'green'
    }, 3000);
   
});
