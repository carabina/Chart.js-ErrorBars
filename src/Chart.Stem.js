(function() {
	//add an error bar class to the basic chart elements
	Chart.ErrorBar = Chart.Rectangle.extend({
		draw : function() {
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				beginpoint = this.base - (this.base - this.y),
				endpoint = this.base - (this.base - this.yCap)	
			ctx.strokeStyle = this.errorStrokeColor;
			ctx.lineWidth = this.errorStrokeWidth;
			//draw upper error bar		
			ctx.beginPath();
			ctx.moveTo(this.x, beginpoint);
			ctx.lineTo(this.x, endpoint);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(leftX, endpoint);
			ctx.lineTo(rightX, endpoint);
			ctx.stroke();
		}
	})
}).call(this);	

