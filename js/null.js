var feildCells = document.getElementsByClassName('sqaure');
for(let i = 0; i < feildCells.length; i++){
feildCells[i].addEventListener('click', clickOnFeild);
}
function clickOnFeild () {
	var winDiv = document.getElementById('win');
	var xCount = 0;
	var oCount = 0;
	winArray = [];	
	if(!this.firstElementChild.innerText){
		for(let i = 0; i < feildCells.length; i++){
			if(feildCells[i].firstElementChild.innerText  === 'O') {
				oCount++;
			} else {
				if(feildCells[i].firstElementChild.innerText === 'X')
				xCount++;
			}
		}
		if(xCount != 0){
			if(xCount <= oCount){
				this.firstElementChild.innerText = 'X';
				this.firstElementChild.className = 'anim';
			} else {
					this.firstElementChild.innerText = 'O';
					this.firstElementChild.className = 'anim';
			}
		} else {
			this.firstElementChild.innerText = 'X';
			this.firstElementChild.className = 'anim';
		}
	}
	winArray.push(feildCells[0].firstElementChild.innerText + feildCells[1].firstElementChild.innerText + feildCells[2].firstElementChild.innerText);
	winArray.push(feildCells[3].firstElementChild.innerText + feildCells[4].firstElementChild.innerText + feildCells[5].firstElementChild.innerText);
	winArray.push(feildCells[6].firstElementChild.innerText + feildCells[7].firstElementChild.innerText + feildCells[8].firstElementChild.innerText);
	winArray.push(feildCells[0].firstElementChild.innerText + feildCells[3].firstElementChild.innerText + feildCells[6].firstElementChild.innerText);
	winArray.push(feildCells[1].firstElementChild.innerText + feildCells[4].firstElementChild.innerText + feildCells[7].firstElementChild.innerText);
	winArray.push(feildCells[2].firstElementChild.innerText + feildCells[5].firstElementChild.innerText + feildCells[8].firstElementChild.innerText);
	winArray.push(feildCells[0].firstElementChild.innerText + feildCells[4].firstElementChild.innerText + feildCells[8].firstElementChild.innerText);
	winArray.push(feildCells[6].firstElementChild.innerText + feildCells[4].firstElementChild.innerText + feildCells[2].firstElementChild.innerText);
	for(let i = 0; i < winArray.length; i++){
		if(winArray[i] == 'XXX' || winArray[i] == 'OOO'){
			setTimeout(function () {
				winDiv.className = 'win-' + i;
			}, 1000); 
			for(let i = 0; i < feildCells.length; i++){
				feildCells[i].removeEventListener('click', clickOnFeild);
				}
		}
	}
} // function clickOnFeild 

function clearFeild () {
	var winDiv = document.getElementById('win');
	for(let i = 0; i < feildCells.length; i++){
		feildCells[i].firstElementChild.innerText = '';
		feildCells[i].firstElementChild.className = '';
	}
	for(let i = 0; i < feildCells.length; i++){
		feildCells[i].addEventListener('click', clickOnFeild);
		}
	winDiv.className = '';		
}// function clearFeild;