var spawnTimer;
var moveTimer;
var dropArray=new Array();
var userBucket = new Bucket(25,300);
onload=init;
function init() {
	var anotherDrop = new Drop();
	anotherDrop.create();
	//store each drop into a array to customize each drop
	dropArray.push(anotherDrop);	
	 //Have to set up a function inside setInterval for functions to work or just the function name
	//spawnTimer = setInterval(function(){spawn()},500);
	moveTimer = setInterval(moveDrops,100);
	//puts bucket on stage
	userBucket.create();
	document.onkeydown = function(e){checkKey(e);}
	
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
		if(current.y>400){
			current.destroy();
		}
		//if current drop is hitting the bucket
		if(collisionCheck(userBucket,current)){
			current.destroy();
		}
	}
}
function checkKey(e){
	//equalize understanding on the event in all browsers
	e = e||window.event;
	//if left arrow is pressed
	if(e.keyCode == '39'){
		//add bucket to x to move left
		userBucket.x+=15;	
		userBucket.setpos();
	}else if(e.keyCode == '37'){
		//add bucket to x to move right
		userBucket.x-=15;	
		userBucket.setpos();
	}
}
function collisionCheck(smObj,laObj){
	var smRight = smObj.x;
	var smLeft = smObj.x+smObj.width;
	var smTop = smObj.y;
	var smBottom = smObj.y + smObj.height;
	
	var laRight = laObj.x;
	var laLeft = laObj.x+laObj.width;
	var laTop = laObj.y;
	var laBottom = laObj.y + laObj.height;
	console.log(smLeft +"/"+ laLeft +"/"+ smRight  +"/"+  laRight);
	console.log(smTop +"/"+ laTop +"/"+ smBottom  +"/"+  laBottom);
	//if the coordinates of the 2 objects indicate they are touching left & right
	if((smLeft > laLeft)&&(smRight < laRight)){
		console.log("touching x");
	//if the coordinates of the 2 objects indicate they are touching top & bottom
		if((smTop > laTop)&&(smBottom < laBottom)){
			//return true they are colliding
		console.log("touching y");
			return true;
		}
	}
	return false;
}