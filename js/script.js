/*browser close*/
function closebrowser(){ 
    document.getElementById('browser').setAttribute("style", "display:none");
} 
setTimeout("closebrowser", 3000);

/*new tab*/
document.getElementById('tabbutton').onclick = newtab;
var i = 3;
var original = document.getElementById('clonetab');

function newtab() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "tab-" + ++i; // there can only be one element with an ID
    clone.for = "tab-" + ++i;
    original.parentNode.appendChild(clone);
}

/*Expand Browser*/
function expand(){
	document.getElementById('body').setAttribute("style","margin:0px");
}

/*Expand collapse*/
function collapse(){
	document.getElementById('body').setAttribute("style","margin:20px");
}

