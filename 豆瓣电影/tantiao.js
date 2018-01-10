// 扩展过渡效果到 jQuery
jQuery.extend(jQuery.easing,{
	def : "easeOutQuad",
	tantiao: function(c, a, b, d, e) {
	    return (a /= e) < 1 / 2.75 ? d * 7.5625 * a * a + b: a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b: a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b: d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
	}
});