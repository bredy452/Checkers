// class CheckerPieces {
// 		constructor(name = name, color = color mainPieces = [], queenPiece = []) {
// 			this.mainPieces = mainPieces
// 			this.queenPiece = queenPiece
// 		}

// 	}
// const player1 = new CheckerPieces {
// 	constructor(Player1, )
// }







$(() => {

	//create a 64 divs to create the checkerboard
	//Give each div an id of 1-64
	//Attach to the checkerboard container
	for (let i = 1; i <= 64; i++) {
		const $div = $('<div>').attr('id', i).addClass('space')
		const $h1 = $('<h1>').text(i).appendTo($div)
		$div.appendTo($('.checkerboardContainer'))

		//give spaces checkerboard colors
		if ($h1.text() % 2 === 0 && $h1.text() <= 8) {
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 16 && $h1.text() >= 9) {
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 24 && $h1.text() >= 17){
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 32 && $h1.text() >= 25) {
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 40 && $h1.text() >= 33){
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 48 && $h1.text() >= 41){
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 56 && $h1.text() >= 49) {
			$div.css('background-color', '#DB1F2A')
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 64 && $h1.text() >= 57){
			$div.css('background-color', '#DB1F2A')
		} else {
			$div.css('background-color', '#221A03')
		}	 
	}
	//create 24 pieces with 1 queen
	//pieces will have a class so that each player has their own




	//create piece with different colors
	const makingPieces = (pieceColor) =>{

		for (let i = 1; i <= 24; i++) {
	 		const $div = $('<div>').addClass(`${pieceColor}Pieces`).attr('id', 'pieces').css('height', '50px').css('width', '50px').css('border-radius', '50%').css('background-color', `${pieceColor}`)
	 		const $h2 = $('<h2>').text(i).css('color', 'white')
	 		$div.append($h2)
	 		$div.appendTo($(`.${pieceColor}CheckerPieceContainer`))
		} 
	 }
	 makingPieces('red')
	 makingPieces('black')
	

})
