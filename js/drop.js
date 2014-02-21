/**
 * The Drop class is a blueprint for each raindrop we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Drop(){
	this.x; //starts empty, will keep track of each drop's left-right position as a #
	this.y; //starts empty, will keep track of each drop's up-down position as a #
	this.item_on_page; //represents drop's physical presence on the screen
	this.width = 50;
	this.height= 50;
	/** 
	*	The create method does lots of things when a drop gets created on the page
	*/
	this.create = function(){
		//make a section tag in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//give it a class which styles it in CSS to resemble a drop
		this.item_on_page.className = "raindrop";
		//store a random x and y position, different for each drop. I'm using screen width or 500, height of 300:
		this.x = Math.floor(Math.random()*500);
		this.y = -50;
		//use those x and y coordinates in the CSS to position the drop:
		this.setpos();
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** 
	*   The destroy function does lots of cleaning up when a drop is removed from the page
	*/
	this.destroy = function(){
		//clear images
		for(var j=0; j<document.getElementsByClassName("splash").length; j++){
			
			var thatSplash=document.getElementsByClassName("splash")[j];
			document.getElementsByTagName("body")[0].removeChild(thatSplash);	
		}
		//create an image 
		var splash = document.createElement("img");
		//set source and styling
		splash.className = "splash";
		splash.src = "img/splash-anim-gif.gif?"+Math.random();
		splash.style.position = "absolute";
		//splash.style.border="solid red 2px"
		splash.style.left = this.x+"px";
		splash.style.top = this.y+"px";
		//attach splash to the html 
		document.getElementsByTagName("body")[0].appendChild(splash);
		var thisDropIndex=dropArray.indexOf(this);
		dropArray.splice(thisDropIndex,1);
		
		//removes from page
		document.getElementsByTagName("body")[0].removeChild(this.item_on_page);
	}
	//the setpos function takes the x,y properties stored with the object and applies a css style to it
	this.setpos = function(){
		//apply the x,y properties the the item's css te position the item
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		}
} //close the Drop class

