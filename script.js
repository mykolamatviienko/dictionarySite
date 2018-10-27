window.onload = function () {
			let posX = 0;
			let posY = 0;
			let box = document.getElementById('box');
			let t = setInterval(move, 1);

			


			function move() {
					if(posX < 400 && posY == 0){
									
					posX +=2;
					box.style.left = posX+'px';
				}	
					if (posX == 400 && posY < 400) {

					posY +=2;
					box.style.top = posY+'px';
				}
					if(posY == 400 && posX <= 400){
						
						posX -= 2;
						box.style.left = posX + 'px';
					}
					if(posX == 0 && posY <= 400){
						posY -= 2;
						box.style.top = posY + 'px';
					}
				
				
		}
	}