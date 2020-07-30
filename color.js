const colorbtn = document.querySelector('.colorbtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','blue'];

colorbtn.addEventListener('click',changeColor);

function changeColor(){
	//bodyBcg.style.backgroundColor = colors[3];
	let random = Math.floor(Math.random()*colors.length)
	bodyBcg.style.backgroundColor = colors[random];
}


































