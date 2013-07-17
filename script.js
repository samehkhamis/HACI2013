var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-42154263-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var getelementpos = function(el) {
	var main = document.getElementById('main');
	var style = main.currentStyle || window.getComputedStyle(main);
	var pos = -parseInt(style.marginTop) - parseInt(style.paddingTop);
	var e = document.getElementById(el);
	do {
		pos += e.offsetTop;
	} while (e = e.offsetParent);
	return pos;
};

var getcurrentpos = function() {
	return (document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0);
}

var scrollto = function(el) {
	var targetpos = getelementpos(el);
	window.scroll(0, targetpos);
	return false;
};

var smoothscrollto = function(el) {
	var time = 10;
	var step = 100;
	var currentpos = getcurrentpos();
	var targetpos = getelementpos(el);
	var scrolldirection = (targetpos - currentpos) >= 0 ? 1 : -1;
	
	var scrolltimer = setInterval(function() {
		currentpos += scrolldirection * step;
		if (scrolldirection * currentpos < scrolldirection * targetpos) {
			window.scroll(0, currentpos);
		} else {
			window.scroll(0, targetpos);
			clearInterval(scrolltimer);
		}
	}, time);
	return false;
};

var updatecountdown = function() {
	var cd = document.getElementById('countdown');
	var today = new Date();
	var deadline = new Date("September 5, 2013 23:59:00 EDT");
	var days = (deadline - today) / 1000 / 3600 / 24;
	if (days > 0)
		cd.innerHTML = parseInt(days) + " Days Left";
};
