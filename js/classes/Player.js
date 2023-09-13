class Player {
		constructor() {
			this.position = {
				x: 100,
				y: 100,
			}
			this.velocity = {
				x:0,
				y:0,
			}
			this.width = 100
			this.height = 100 
			this.sides = {
				bottom: this.position.y + this.height
			}
			this.gravity = 1
		}
		draw() { //draw player 
			c.fillStyle = 'red'
			c.fillRect(this.position.x, this.position.y, this.width, this.height)
		}
		update() { //stop player drop out of the canvas
			this.position.x += this.velocity.x 
			this.position.y += this.velocity.y
			this.sides.bottom = this.position.y + this.height //stop the player getting stuck from the bottom

			// above bottom of the canvas
			if (this.sides.bottom + this.velocity.y< canvas.height){
			this.velocity.y += this.gravity //create gravity
			} else this.velocity.y = 0
		}
	}