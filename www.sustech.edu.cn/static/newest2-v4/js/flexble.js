// if ((screen.width > 768))
// 				{
// 		  //引入该flexible.min.js
// 		  !function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(1920,1920);
// 		        }



if ((screen.width > 768)) {
	//引入该flexible.min.js
	!function(e, t) {
		function n() {
			var n = l.getBoundingClientRect().width;
			t = t || 540,
			n > t && (n = t);
			var i = 100 * n / e;
			r.innerHTML = "html{font-size:" + i + "px;}"
		}
		var i, d = document,
		o = window,
		l = d.documentElement,
		r = document.createElement("style");
		if (l.firstElementChild) l.firstElementChild.appendChild(r);
		else {
			var a = d.createElement("div");
			a.appendChild(r),
			d.write(a.innerHTML),
			a = null
		}
		n(),
		o.addEventListener("resize",
		function() {
			clearTimeout(i),
			i = setTimeout(n, 300)
		},
		!1),
		o.addEventListener("pageshow",
		function(e) {
			e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
		},
		!1),
		"complete" === d.readyState ? d.body.style.fontSize = "16px": d.addEventListener("DOMContentLoaded",
		function(e) {
			d.body.style.fontSize = "16px"
		},
		!1)
	} (1920, 1920);
}
