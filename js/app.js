const pieces = [
	{redpieces: []},
	{blackpieces: []}
]

let redSpaceNumber = []
let blackSpaceNumber = []
let kingSpaceNumber = []
let $events = []
let black = []
let red = []


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
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 16 && $h1.text() >= 9) {
			$div.css('background-color', '#DB1F2A')
			$div.droppable()
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 24 && $h1.text() >= 17){
			$div.css('background-color', '#DB1F2A')
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 32 && $h1.text() >= 25) {
			$div.css('background-color', '#DB1F2A')
			$div.droppable()
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 40 && $h1.text() >= 33){
			$div.css('background-color', '#DB1F2A')

			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 48 && $h1.text() >= 41){
			$div.css('background-color', '#DB1F2A')

			$div.droppable()
		} else if ($h1.text() % 2 === 0 && $h1.text() <= 56 && $h1.text() >= 49) {
			$div.css('background-color', '#DB1F2A')
			$div.droppable()
		} else if ($h1.text() % 2 === 1 && $h1.text() <= 64 && $h1.text() >= 57){
			$div.css('background-color', '#DB1F2A')
			$div.droppable()
		} else {
			$div.css('background-color', '#221A03')
		}	 
	}


	const $win = () => {
		if (numberOfBlackTaken.length === 12) {
			alert('Redwins')
		} else if (numberOfRedTaken.length === 12){
			alert("blackwins")
		}




	 }

	//create piece with different colors
	const $makingPieces = (pieceColor) =>{

		for (let i = 0; i  <= 24; i++) {
	 		const $div = $('<div>').attr('class', `${pieceColor}Pieces`).css('height', '50px').css('width', '50px	').css('border-radius', '50%').css('background-color', `${pieceColor}`)
	 		const $h2 = $('<h2>').text(i).css('color', 'white')
	 		$div.append($h2)
	 		$div.draggable()
	 		$div.appendTo($(`.${pieceColor}CheckerPieceContainer`))
	 		if (pieceColor === 'red') {
	 			pieces[0].redpieces.push($div)	
	 		} else {
	 			pieces[1].blackpieces.push($div)
	 		}
		} 
			
	}

	//puts pieces on the board
	const $newGame = () => {
		const redPieces = pieces[0].redpieces
		const blackPieces = pieces[1].blackpieces
		const $space = $('.space')

		
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
		const $winningGame = () => {
			
			if (black.length === 12) {

			alert('Congratulations! Red Wins!')
		} else if (red.length === 12){
			alert("Congratulations! Black Wins")
		}


		}

	 	const $movement = () => {
	 		

			$('.ui-draggable').draggable({
				helper:'clone',
				//logs the class number of space where the piece was moved from (first element of array)
				start: function(event, ui) {
					redSpaceNumber = []
					redSpaceNumber.push(Number.parseInt($(event.target).parent().attr('class').split(' ')[0]))

					blackSpaceNumber = []
					blackSpaceNumber.push(Number.parseInt($(event.target).parent().attr('class').split(' ')[0]))

					kingSpaceNumber =[]
					kingSpaceNumber.push(Number.parseInt($(event.target).parent().attr('class').split(' ')[0]))
					// console.log(black.length)
					// console.log(red.length)
				}
			 
			})

			$('.ui-droppable').droppable({
				// tolerance: 'fit',
				drop: function(event, ui) {

					//logs the class number of the dropped space (second element of array)
					if (ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king') {
						redSpaceNumber.push(Number.parseInt($(event.target).attr('class').split(' ')[0]))
						redSpaceNumber.push(redSpaceNumber[0] - 9)
						redSpaceNumber.push(redSpaceNumber[0] - 7)
						redSpaceNumber.push(redSpaceNumber[0] + 7)
						redSpaceNumber.push(redSpaceNumber[0] + 9)
					} else if (ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king') {
						blackSpaceNumber.push(Number.parseInt($(event.target).attr('class').split(' ')[0]))
						blackSpaceNumber.push(blackSpaceNumber[0] + 9)
						blackSpaceNumber.push(blackSpaceNumber[0] + 7)
						blackSpaceNumber.push(blackSpaceNumber[0] - 7)
						blackSpaceNumber.push(blackSpaceNumber[0] - 9)
					} else if (ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[0] === 'king') {
						kingSpaceNumber.push(kingSpaceNumber[0] + 9)
						kingSpaceNumber.push(kingSpaceNumber[0] + 18)
						kingSpaceNumber.push(kingSpaceNumber[0] + 27)
						kingSpaceNumber.push(kingSpaceNumber[0] + 36)
						kingSpaceNumber.push(kingSpaceNumber[0] + 45)
						kingSpaceNumber.push(kingSpaceNumber[0] + 54)
						kingSpaceNumber.push(kingSpaceNumber[0] + 63)
						kingSpaceNumber.push(kingSpaceNumber[0] + 7)
						kingSpaceNumber.push(kingSpaceNumber[0] + 14)
						kingSpaceNumber.push(kingSpaceNumber[0] + 21)
						kingSpaceNumber.push(kingSpaceNumber[0] + 28)
						kingSpaceNumber.push(kingSpaceNumber[0] + 35)
						kingSpaceNumber.push(kingSpaceNumber[0] + 42)
						kingSpaceNumber.push(kingSpaceNumber[0] + 49)
						kingSpaceNumber.push(kingSpaceNumber[0] - 9)
						kingSpaceNumber.push(kingSpaceNumber[0] - 18)
						kingSpaceNumber.push(kingSpaceNumber[0] - 27)
						kingSpaceNumber.push(kingSpaceNumber[0] - 36)
						kingSpaceNumber.push(kingSpaceNumber[0] - 45)
						kingSpaceNumber.push(kingSpaceNumber[0] - 54)
						kingSpaceNumber.push(kingSpaceNumber[0] - 7)
						kingSpaceNumber.push(kingSpaceNumber[0] - 14)
						kingSpaceNumber.push(kingSpaceNumber[0] - 21)
						kingSpaceNumber.push(kingSpaceNumber[0] - 28)
						kingSpaceNumber.push(kingSpaceNumber[0] - 35)
						kingSpaceNumber.push(kingSpaceNumber[0] - 42)
						kingSpaceNumber.push(kingSpaceNumber[0] - 49)
					}

					//Moves for redpieces
					if ($(this).children().length === 2 || (redSpaceNumber[0] - redSpaceNumber[1] === 18 && $(`.${redSpaceNumber[2]}`).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[3] !== 'king') || (redSpaceNumber[0] - redSpaceNumber[1] === 14 && $(`.${redSpaceNumber[3]}`).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[3] !== 'king') || (redSpaceNumber[1] - redSpaceNumber[0] === 7 && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[3] !== 'king') || (redSpaceNumber[1] - redSpaceNumber[0] === 9 && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[3] !== 'king') || (redSpaceNumber[1] - redSpaceNumber[0] === 18 && $(`.${redSpaceNumber[0] + 9}` ).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[3] !== 'king') || (redSpaceNumber[1] - redSpaceNumber[0] === 14 && $(`.${redSpaceNumber[0] + 7}`).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && ui.draggable.attr('class').split(' ')[3] !== 'king') || (redSpaceNumber[0] - 16 === redSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'redPieces') || (redSpaceNumber[0] + 16 === redSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'redPieces') || (redSpaceNumber[0] - 2 === redSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'redPieces') || (redSpaceNumber[0] + 2 === redSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'redPieces') || (redSpaceNumber[1] - redSpaceNumber[0] === 18 && $(`.${redSpaceNumber[0]+9}`).children().length === 2 && $(`.${redSpaceNumber[0]+9}`).children('div').hasClass("redPieces")) || (redSpaceNumber[0] - redSpaceNumber[1] === 14 && $(`.${redSpaceNumber[0]-7}`).children().length === 2 && $(`.${redSpaceNumber[0]-7}`).children('div').hasClass("redPieces")) || (redSpaceNumber[1] - redSpaceNumber[0] === 14 && $(`.${redSpaceNumber[0]+7}`).children().length === 2 && $(`.${redSpaceNumber[0]+7}`).children('div').hasClass("redPieces")) || (redSpaceNumber[1] - redSpaceNumber[0] === 14 && $(`.${redSpaceNumber[0]+7}`).children().length === 2 && $(`.${redSpaceNumber[0]+7}`).children('div').hasClass("blackPieces") && ui.draggable.attr('class').split(' ')[3] !== 'king' ) || (redSpaceNumber[0] - redSpaceNumber[1] === 18 && $(`.${redSpaceNumber[0]-9}`).children().length === 2 && $(`.${redSpaceNumber[0]-9}`).children('div').hasClass("redPieces")) || (redSpaceNumber[0] + 16 === redSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'redPieces') || (redSpaceNumber[0] - 16 === redSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'redPieces') || (redSpaceNumber[1] - redSpaceNumber[0] === 18 && $(`.${redSpaceNumber[0]+9}`).children().length === 2 && $(`.${redSpaceNumber[0]+9}`).children('div').hasClass("blackPieces") && ui.draggable.attr('class').split(' ')[3] !== 'king' )) {

						$('.ui-draggable').draggable({
							revert: 'invalid'
						})
						alert("invalid")
						$winningGame()
					//Moves for blackpieces
					} else if ((blackSpaceNumber[1] - blackSpaceNumber[0] === 14 && $(`.${blackSpaceNumber[3]}`).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king')|| (blackSpaceNumber[1] - blackSpaceNumber[0] === 18 && $(`.${blackSpaceNumber[2]}`).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king')|| (blackSpaceNumber[0] - blackSpaceNumber[1] === 7 && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king') || (blackSpaceNumber[0] - blackSpaceNumber[1] === 9 && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king')|| (blackSpaceNumber[0] - blackSpaceNumber[1] === 18 && $(`.${blackSpaceNumber[1] + 9}` ).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king') || (blackSpaceNumber[0] - blackSpaceNumber[1] === 14 && $(`.${blackSpaceNumber[1] + 7}`).children().length === 1 && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && ui.draggable.attr('class').split(' ')[0] !== 'king')|| (blackSpaceNumber[0] + 16 === blackSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'blackPieces') || (blackSpaceNumber[0] - 16 === blackSpaceNumber[1] && ui.draggable.attr('class').split(' ')[0] === 'blackPieces') || (blackSpaceNumber[0] - 2 === blackSpaceNumber[1]) || (blackSpaceNumber[0] + 2 === blackSpaceNumber[1]) || (blackSpaceNumber[1] - blackSpaceNumber[0] === 18 && $(`.${blackSpaceNumber[0]+9}`).children().length === 2 && $(`.${blackSpaceNumber[0]+9}`).children('div').hasClass("blackPieces")) || (blackSpaceNumber[1] - blackSpaceNumber[0] === 14 && $(`.${blackSpaceNumber[0]+7}`).children().length === 2 && $(`.${blackSpaceNumber[0]+7}`).children('div').hasClass("blackPieces")) || (blackSpaceNumber[0] - blackSpaceNumber[1] === 14 && $(`.${blackSpaceNumber[0]-7}`).children().length === 2 && $(`.${blackSpaceNumber[0]-7}`).children('div').hasClass("blackPieces")) || (blackSpaceNumber[0] - blackSpaceNumber[1] === 18 && $(`.${blackSpaceNumber[0]-9}`).children().length === 2 && $(`.${blackSpaceNumber[0]-9}`).children('div').hasClass("blackPieces")) || (blackSpaceNumber[0] - blackSpaceNumber[1] === 18 && $(`.${blackSpaceNumber[0]-9}`).children().length === 2 && $(`.${blackSpaceNumber[0]+9}`).children('div').hasClass("redPieces")) && ui.draggable.attr('class').split(' ')[0] !== 'king' || (blackSpaceNumber[0] - blackSpaceNumber[1] === 14 && $(`.${blackSpaceNumber[0]-7}`).children().length === 2 && $(`.${blackSpaceNumber[0]-7}`).children('div').hasClass("redPieces") && ui.draggable.attr('class').split(' ')[0] !== 'king') || (blackSpaceNumber[0] - blackSpaceNumber[1] === 18 && $(`.${blackSpaceNumber[0]-7}`).children().length === 2 && $(`.${blackSpaceNumber[0]-9}`).children('div').hasClass("redPieces") && ui.draggable.attr('class').split(' ')[0] !== 'king'))  {

						$('.ui-draggable').draggable({
							revert: 'invalid'
						})
						alert("invalid")

					} else {
						ui.draggable.detach().appendTo($(this))
					}
					$winningGame()

					 //Red taking pieces  
					if (redSpaceNumber[0] - redSpaceNumber[1] === 18 && $(`.${redSpaceNumber[0]-9}`).children().length === 2 && $(`.${redSpaceNumber[0]-9}`).children('div').hasClass("blackPieces")) {
						red.push(1)
						$(`.${redSpaceNumber[0]-9}`).children()[1].remove()
						// console.log(black.length)
						// console.log(red.length)

					} else if (redSpaceNumber[0] - redSpaceNumber[1] === 14 && $(`.${redSpaceNumber[0]-7}`).children().length === 2 && $(`.${redSpaceNumber[0]-7}`).children('div').hasClass("blackPieces")) {
						red.push(1)
						$(`.${redSpaceNumber[0]-7}`).children()[1].remove()
						
					
					} 

					//Black taking pieces
					if (blackSpaceNumber[1] - blackSpaceNumber[0] === 18 && $(`.${blackSpaceNumber[0]+9}`).children().length === 2 &&$(`.${blackSpaceNumber[0]+9}`).children('div').hasClass("redPieces")) {
						black.push(1)
						$(`.${blackSpaceNumber[0]+9}`).children()[1].remove()
						

					} else if (blackSpaceNumber[1] - blackSpaceNumber[0] === 14 && $(`.${blackSpaceNumber[0]+7}`).children().length === 2 && $(`.${blackSpaceNumber[0]+7}`).children('div').hasClass("redPieces")) {
						black.push(1)
						$(`.${blackSpaceNumber[0]+7}`).children()[1].remove()
						

					} 
					$winningGame()
					for (let i = 2; i <= 8; i++) {
						if ($(`.${[i]}`).children('div').hasClass("redPieces") && ui.draggable.attr('class').split(' ')[0] === 'redPieces' && Number.parseInt($(event.target).attr('class').split(' ')[0])=== i) {
							$(event.target).children('div').addClass('king')
							$('.king').text('K')

							for (let i = 57; i <= 63; i++) {
								if ($(`.${[i]}`).children('div').hasClass("blackPieces") && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && Number.parseInt($(event.target).attr('class').split(' ')[0])=== i) {
									$(event.target).children('div').addClass('king')
									$('.king').text('K')
						 		}
							}
						}
					}

					for (let i = 57; i <= 63; i++) {
						if ($(`.${[i]}`).children('div').hasClass("blackPieces") && ui.draggable.attr('class').split(' ')[0] === 'blackPieces' && Number.parseInt($(event.target).attr('class').split(' ')[0])=== i) {
							$(event.target).children('div').addClass('king')
							$('.king').text('K')
					$winningGame()		
						}
					}
					
						


		}

				

			})
		

		

		}
	
	$('button').on('click', (event)=>{
		$('.blackPieces').removeClass('king').detach()
		$('.redPieces').removeClass('king').text('').detach()
		$('.blackCheckerPieceContainer').children('div').detach()

		$newGame()
	})
	
	$makingPieces('black')
	$makingPieces('red')
	$newGame()
	$movement()
	$winningGame()
	


})