(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42146170-1', 'samehkhamis.com');
ga('send', 'pageview');

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
