const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');



for( let i = 0; i < btns.length; i++){
	btns[i].addEventListener('click', function(){
		let number = btns[i].getAttribute('data-num');
		screen.value += number;
	})
}

equalBtn.addEventListener('click', function(){

	if( screen.value === ''){
		alert('empty values')
	}else{
		let result = eval(screen.value);
		screen.value = result;
	}
})

clearBtn.addEventListener('click', function(){
	screen.value = '';
})