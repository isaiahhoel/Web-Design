var ready = (callback) => {                   //when ready the page will fully show up
	if (document.readyState != "loading") callback();   //If then 
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.querySelector(".header").style.height = window.innerHeight + "px";
})



