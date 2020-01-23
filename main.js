var container = document.querySelector('.container')//daje jednu stvar
//var container = document.querySelectorAll('.container')//daje []

var simbol ='O'

createGrid()

var boxes = document.querySelectorAll('.box')

for(var i =0; i < boxes.length; i++){

	boxes[i].addEventListener('click',insertSimbol)
}

function insertSimbol(){
if(simbol == 'O'){
simbol ='X'

}else{

	simbol = 'O'
}

	
	//this.style.background = 'tomato'
	this.innerHTML = simbol


    checkLines()
}

function checkLines(){
if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != ''){
boxes[0].style.background = 'red'
boxes[1].style.background = 'red'
boxes[2].style.background = 'red'

removeClicks()

}

if(boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != ''){
boxes[3].style.background = 'red'
boxes[4].style.background = 'red'
boxes[5].style.background = 'red'

removeClicks()
}
if(boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != ''){
boxes[6].style.background = 'red'
boxes[7].style.background = 'red'
boxes[8].style.background = 'red'
removeClicks()
}
if(boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != ''){
boxes[0].style.background = 'red'
boxes[3].style.background = 'red'
boxes[6].style.background = 'red'
removeClicks()
}
if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != ''){
boxes[1].style.background = 'red'
boxes[4].style.background = 'red'
boxes[7].style.background = 'red'
removeClicks()
}
if(boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != ''){
boxes[2].style.background = 'red'
boxes[5].style.background = 'red'
boxes[8].style.background = 'red'
removeClicks()
}
if(boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != ''){
boxes[0].style.background = 'red'
boxes[4].style.background = 'red'
boxes[8].style.background = 'red'
removeClicks()
}
if(boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != ''){
boxes[2].style.background = 'red'
boxes[4].style.background = 'red'
boxes[6].style.background = 'red'
removeClicks()
}


function kurac(){
	 if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != ''){

	boxes[0].style.background = 'red'
boxes[1].style.background = 'red'
boxes[2].style.background = 'red'

boxes[0].innerText ='Win!'
boxes[1].innerText = 'Win!'
boxes[2].innerText = 'Win!'

boxes[0].style.background = 'blue'
boxes[1].style.background = 'blue'
boxes[2].style.background = 'blue'

}
if(boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != ''){
boxes[3].style.background = 'red'
boxes[4].style.background = 'red'
boxes[5].style.background = 'red'

boxes[3].innerText = 'Win!'
boxes[4].innerText = 'Win!'
boxes[5].innerText = 'Win!'

boxes[3].style.background = 'blue'
boxes[4].style.background = 'blue'
boxes[5].style.background = 'blue'

}
if(boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != ''){
boxes[6].style.background = 'red'
boxes[7].style.background = 'red'
boxes[8].style.background = 'red'

boxes[6].innerText = 'Win!'
boxes[7].innerText = 'Win!'
boxes[8].innerText = 'Win!'


boxes[6].style.background = 'blue'
boxes[7].style.background = 'blue'
boxes[8].style.background = 'blue'

 }
if(boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != ''){
boxes[0].style.background = 'red'
boxes[3].style.background = 'red'
boxes[6].style.background = 'red'

boxes[0].innerText = 'Win!'
boxes[3].innerText = 'Win!'
boxes[6].innerText = 'Win!'


boxes[0].style.background = 'blue'
boxes[3].style.background = 'blue'
boxes[6].style.background = 'blue'


}
if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != ''){
boxes[1].style.background = 'red'
boxes[4].style.background = 'red'
boxes[7].style.background = 'red'

boxes[1].innerText = 'Win!'
boxes[4].innerText = 'Win!'
boxes[7].innerText = 'Win!'


boxes[1].style.background = 'blue'
boxes[4].style.background = 'blue'
boxes[7].style.background = 'blue'

}
if(boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != ''){
boxes[2].style.background = 'red'
boxes[5].style.background = 'red'
boxes[8].style.background = 'red'

boxes[2].innerText = 'Win!'
boxes[5].innerText = 'Win!'
boxes[8].innerText = 'Win!'


boxes[2].style.background = 'blue'
boxes[5].style.background = 'blue'
boxes[8].style.background = 'blue'
}

if(boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != ''){
boxes[0].style.background = 'red'
boxes[4].style.background = 'red'
boxes[8].style.background = 'red'


boxes[0].innerText = 'Win!'
boxes[4].innerText = 'Win!'
boxes[8].innerText = 'Win!'


boxes[0].style.background = 'blue'
boxes[4].style.background = 'blue'
boxes[8].style.background = 'blue'


}
if(boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != ''){
boxes[2].style.background = 'red'
boxes[4].style.background = 'red'
boxes[6].style.background = 'red'

boxes[2].innerText = 'Win!'
boxes[4].innerText = 'Win!'
boxes[6].innerText = 'Win!'


boxes[2].style.background = 'blue'
boxes[4].style.background = 'blue'
boxes[6].style.background = 'blue'

}
}

 
 var pizda = setTimeout(kurac,2000)
// var nesto = setTimeout(belegija,2000)
 var jh = setInterval(checkLines,3000)

}


function createGrid() {
	
	var text = '';
	for(var i =0; i<9; i++){

text += '<div class ="box"></div>';



}

container.innerHTML = text

}

function removeClicks(){
	for(var i =0; i< boxes.length; i++){

boxes[i].removeEventListener('click',insertSimbol)

	}
}

