var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-42154263-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var scrollto = function(el) {
	var main = document.getElementById('main');
	var style = main.currentStyle || window.getComputedStyle(main);
	var pos = -parseInt(style.marginTop) - parseInt(style.paddingTop);
	var e = document.getElementById(el);
	do {
		pos += e.offsetTop;
	} while (e = e.offsetParent);
	window.scroll(0, pos);
	return false;
}
