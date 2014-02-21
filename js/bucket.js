/**
 * The Bucket class is a blueprint for each rainbucket we generate
 * @author  John Doe
 * @version 1.0, May 2014
 */
function Bucket(x,y){
	this.x = x; //starts empty, will keep track of each bucket's left-right position as a #
	this.y = y; //starts empty, will keep track of each bucket's up-down position as a #
	this.width = 100;
	this.height = 100;
	this.item_on_page; //represents bucket's physical presence on the screen
	/** 
	*	The create method does lots of things when a bucket gets created on the page
	*/
	this.create = function(){
		//make a section tag in the HTML, store it into the item-on-page we set up above.
		this.item_on_page = document.createElement("section");
		//give it a class which styles it in CSS to resemble a bucket
		this.item_on_page.className = "bucket";
		//sets the width and height mentioned above to the bucket
		this.item_on_page.style.width = this.width + "px";
		this.item_on_page.style.height = this.height + "px";
		this.item_on_page.style.backgroundColor = "rgba(51,51,200,0.5)";
		this.item_on_page.style.position = "absolute";
		this.item_on_page.style.borderBottomLeftRadius = "25px";
		this.item_on_page.style.borderBottomRightRadius = "25px";
		//use those x and y coordinates in the CSS to position the bucket:
		this.setpos();
		//attach the item to our HTML hierarchy, as a child of the body:
		document.getElementsByTagName("body")[0].appendChild(this.item_on_page);
	}
	/** 
	*   The destroy function does lots of cleaning up when a bucket is removed from the page
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
		var thisBucketIndex=bucketArray.indexOf(this);
		bucketArray.splice(thisBucketIndex,1);
		
		//removes from page
		document.getElementsByTagName("body")[0].removeChild(this.item_on_page);
	}
	//the setpos function takes the x,y properties stored with the object and applies a css style to it
	this.setpos = function(){
		//apply the x,y properties the the item's css te position the item
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";
		}
} //close the Bucket class

