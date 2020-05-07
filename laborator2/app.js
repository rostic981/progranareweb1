document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = 'violet'
    const newDiv = document.createElement('div')
    newDiv.id = 'text'
    newDiv.innerText = 'START'
    document.body.appendChild(newDiv)
     setTimeout(() => {
     	document.body.style.backgroundColor = 'green'
    }, 1000);
   

     setTimeout(() => {
     	 let list = document.createElement('ol')
   		 const numbers = 15
    	let count = 0
    	setInterval(() => {
        	if (count < numbers) {
            	count++
            	let li = document.createElement('li')
            	li.innerText = count
            	list.appendChild(li)
            	document.body.appendChild(list)
        	}
    	}, 1000)
    }, 3000);

});
