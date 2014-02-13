/**
 * The Drop class is a blueprint for each raindrop we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Drop(){
	this.x; //starts empty, will keep track of each drop's left-right position as a #
	this.y; //starts empty, will keep track of each drop's up-down position as a #
	this.item_on_page; //represents drop's physical presence on the screen
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
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
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
} //close the Drop class

var spawnTimer;
var moveTimer;
var dropArray=new Array();

onload=init;
function init() {
	 //Have to set up a function inside setInterval for functions to work or just the function name
	spawnTimer = setInterval(function(){spawn()},500);
	moveTimer = setInterval(moveDrops,100);
}
function spawn() {
	//make an object that's an instance of the Drop Class:
	var anotherDrop = new Drop();
	anotherDrop.create();
	//store each drop into a array to customize each drop
	dropArray.push(anotherDrop);	
}
function moveDrops(){
	for(var i=0; i<dropArray.length; i++){
		var current = dropArray[i]; 
	//iterate through array of drops and do whats in {} to each one
		//adds a little to the stored y property to the drop
		current.y += 5;
		//move drop a few pixels
		current.item_on_page.style.top = current.y+"px";
		//if drop gets the bottom of screen; destroy drop
		if(current.y>300){
			current.destroy();
		}
	}
}
