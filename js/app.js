// create 24 pieces with 1 queen
// pieces will have a class so that each player has their own

// class CheckerPieces {
// 		constructor(name = name, color = color mainPieces = [], queenPiece = []) {
// 			this.mainPieces = mainPieces
// 			this.queenPiece = queenPiece
// 		}

// 	}
// const player1 = new CheckerPieces {
// 	constructor(Player1, )
// }



const pieces = [
	{redpieces: []},
	{blackpieces: []}
]


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




	//create piece with different colors
	const makingPieces = (pieceColor) =>{

			for (let i = 0; i  <= 24; i++) {
	 			const $div = $('<div>').attr('id', `${pieceColor}Pieces`).attr('class', 'pieces').css('height', '50px').css('width', '50px	').css('border-radius', '50%').css('background-color', `${pieceColor}`)
	 			const $h2 = $('<h2>').text(i).css('color', 'white')
	 			$div.append($h2)
	 			$div.appendTo($(`.${pieceColor}CheckerPieceContainer`))
	 			if (pieceColor === 'red') {
	 				pieces[0].redpieces.push($div)	
	 			} else {
	 				pieces[1].blackpieces.push($div)
	 			}
			} 
			$('#blackPieces').remove()
			$('#redPieces').remove()
	    }

	const newGame = () => {
		const redPieces = pieces[0].redpieces
		const blackPieces = pieces[1].blackpieces
		const $space = $('.space')
		console.log($space.css('background-color'))

		console.log(blackPieces)
		
		
		for (let i = 0; i <= 24; i++) {
		 
		 	if (($(`#${i}`).css('background-color') === 'rgb(219, 31, 42)') && i <= 24) {
		 		$(`#${i}`).append(blackPieces[i])	
			} 	
		}
		 // console.log(blackPieces)
		for (let i = 41; i <= 64; i++) {
		 
		 	if (($(`#${i}`).css('background-color') === 'rgb(219, 31, 42)')) {
		  		 $(`#${i}`).append(redPieces[i - 40])
		  	// 	console.log(blackPieces[i])
		 		// console.log(i)
		  	}
		 }
		console.log($('#41'))
		
		// const blackpieces = $('.blackCheckerPieceContainer').children()[i]
		// const redpieces = $('.redCheckerPieceContainer').children()[i]
	}

	makingPieces('black')
	makingPieces('red')
	newGame()

// console.log($('.blackCheckerPieceContainer').children()[0])
// console.log(pieces[0].redpieces)
// console.log(pieces[1].blackpieces)
// console.log(pieces[0].redpieces[0])
// console.log($('h1').text())
// console.log($('#19').css('background-color'))


})