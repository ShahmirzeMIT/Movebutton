const email = document.getElementById('email');
const pass = document.getElementById('pass');
const btn = document.querySelector('button');

btn.addEventListener("mouseenter", change);

function change(event){
	if(checkMyInput()==false ){
		if(!btn.classList.contains("right")){
			btn.classList.toggle('left');
		}
		if(btn.classList.contains("blue")){
			btn.classList.remove('blue')
		}
		if(!btn.classList.contains("left")){
			btn.classList.toggle('right')
		}
	}
	else{
		btn.classList.add('blue')
	}
}

function checkMyInput() {
let checkPass=pass.value
if(checkPass.match(/[a-z]/) && checkPass.match(/[A-Z]/) && checkPass.length>8){
 return true
}
else{
	return false
}
}


