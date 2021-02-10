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
		const $div = $('<div>').attr('class', i).addClass('space')
		const $h1 = $('<h1>').text(i).appendTo($div)
		$div.appendTo($('.checkerboardContainer'))
		//give spaces checkerboard colors
		if ($h1.text() % 2 === 0 && $h1.text() <= 8) {
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 16 && $h1.text() >= 9) {
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 24 && $h1.text() >= 17){
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 32 && $h1.text() >= 25) {
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 40 && $h1.text() >= 33){
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 48 && $h1.text() >= 41){
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 56 && $h1.text() >= 49) {
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 64 && $h1.text() >= 57){
			$div.css('background-color', '#DB1F2A')
			// .attr('id', 'droppable')
			$div.droppable()
		} else {
			$div.css('background-color', '#221A03')
		}	 
	}




	//create piece with different colors
	const $makingPieces = (pieceColor) =>{

			for (let i = 0; i  <= 24; i++) {
	 			const $div = $('<div>').attr('class', `${pieceColor}Pieces`).attr('class', 'pieces').css('height', '50px').css('width', '50px	').css('border-radius', '50%').css('background-color', `${pieceColor}`)
	 			const $h2 = $('<h2>').text(i).css('color', 'white')
	 			$div.append($h2)
	 			// $div.attr('id', 'draggable')
	 			$div.draggable()
	 			$div.appendTo($(`.${pieceColor}CheckerPieceContainer`))
	 			if (pieceColor === 'red') {
	 				pieces[0].redpieces.push($div)	
	 			} else {
	 				pieces[1].blackpieces.push($div)
	 			}
			} 
			$('.blackPieces').remove()
			$('.redPieces').remove()
	    }
	//puts pieces on the board
	const $newGame = () => {
		const redPieces = pieces[0].redpieces
		const blackPieces = pieces[1].blackpieces
		const $space = $('.space')
		console.log($space.css('background-color'))

		console.log(blackPieces)
		
		//inital space for black
		for (let i = 0; i <= 24; i++) {
		 
		 	if (($(`.${i}`).css('background-color') === 'rgb(219, 31, 42)') && i <= 24) {
		 		$(`.${i}`).append(blackPieces[i])	
			} 	
		}
		//initial space for red
		for (let i = 41; i <= 64; i++) {
		 
		 	if (($(`.${i}`).css('background-color') === 'rgb(219, 31, 42)')) {
		  		 $(`.${i}`).append(redPieces[i - 40])
		  	}
		 }
	}










	// const $draggable = () => {
	// 	const $drag = $('#draggable').draggable({appendTo: $('#draggable')})

	 	const $movement = () => {
			$('.ui-draggable').draggable({
				helper:'clone',
				// containment: '.ui-droppable'
			})
			$('.ui-droppable').droppable({
				drop: function(event, ui) {
					ui.draggable.detach().appendTo($(this))
					console.log(ui.draggable)
				}
			})
		}
	// 	}
	// }

	

	// $('#draggable').draggable()
	// const $dropPieces = () => {
	// 	const $redSpace = $('.space')
	// 	$redSpace.on('drop', (event) => {
	// 		event.preventDefault()	
	//  	}
	// }

	//event for when I drag the pieces for player 1
  //   const $dragPieces = () =>{
	 // 	const $blackPiece = $('#blackPieces')
	 // 	$blackPiece.on('drag', (event) => {
	 // 		$(event.target)
	 // 	}

	 // }
	 


	$makingPieces('black')
	$makingPieces('red')
	$newGame()
	$movement()



})