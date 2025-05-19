//So as it stands when we click “Save” the counter picks up from the last number on the next iteration.  
//But what we really want is for the counter to reset to zero at each iteration.
//Hint: you'll need 2 lines of code; console.log out if you have to.



let saveEl = document.getElementById("save-el")   
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1  
    countEl.textContent = count	  
}


function save() {
	//console.log(count)     SO THIS IS WHAT HE USES TO SAVE THE CURRENT COUNT!!!!
	let countStr = count + " - "   
	saveEl.textContent += countStr  
	count = 0
	countEl.textContent = count
}




