function mobileNav(){
	var x = document.getElementById('mobile-menu').style.left;
	if (x === "" || x ==="-100%"){
		document.getElementById('mobile-menu').style.left = 0;
		document.getElementById('page').style.display = "none";
	}else{
		document.getElementById('mobile-menu').style.left = "-100%";
		document.getElementById('page').style.display = "block";
	}
	

}
function mobileSearch(){
	console.log('ready');
}

	// console.log('start test');
	// var x = document.getElementById('mobile-menu').classList.value;

	// if (x === "hidden"){
	// 	document.getElementById('mobile-menu').classList.remove("hidden");
	// 	console.log('open');
	// }else{
	// 	document.getElementById('mobile-menu').classList.add("hidden");
	// 	console.log('close');
	// }