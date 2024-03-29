!
function(t) {
	
	
  function checkCanvasAvailable()  
    {  
        return !!document.createElement('canvas').getContext;  
    }  
      
    function checkCanvasTextAvailable()  
    {  
        if(!checkCanvasAvailable())  
            return false;  
        var dummy_canvas = document.createElement('canvas');  
        var context = dummy_canvas.getContext('2d');  
        return typeof context.fillText == 'function';  
    }  

	
	
	
	if (!checkCanvasTextAvailable()&& !checkCanvasTextAvailable()) {
			t.fn.easyPieChart = function(e) {
				return t.each(this,
				function() {
					var $t = $(this);
					$t.find("span").text($t.attr("data-percent"));
					$t.css("border","1px solid "+$t.css("color"))
				})
			}
			return false
		};
		
		
		
		
		
	
	return t.easyPieChart = function(e, i) {
		var n, s, o, r, a, l, d, c, h = this;
		return this.el = e,
		this.$el = t(e),
		this.$el.data("easyPieChart", this),
		this.init = function() {
			var e, n;
			return h.options = t.extend({},
			t.easyPieChart.defaultOptions, i),
			e = parseInt(h.$el.data("percent"), 10),
			h.percentage = 0,
			h.canvas = t("<canvas width='" + h.options.size + "' height='" + h.options.size + "'></canvas>").get(0),
			h.$el.append(h.canvas),
			"undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(h.canvas),
			h.ctx = h.canvas.getContext("2d"),
			window.devicePixelRatio > 1 && (n = window.devicePixelRatio, t(h.canvas).css({
				width: h.options.size,
				height: h.options.size
			}), h.canvas.width *= n, h.canvas.height *= n, h.ctx.scale(n, n)),
			h.ctx.translate(h.options.size / 2, h.options.size / 2),
			h.ctx.rotate(h.options.rotate * Math.PI / 180),
			h.$el.addClass("easyPieChart"),
			h.$el.css({
				width: h.options.size,
				height: h.options.size,
				lineHeight: "" + h.options.size + "px"
			}),
			h.update(e),
			h
		},
		this.update = function(t) {
			return t = parseFloat(t) || 0,
			h.options.animate === !1 ? o(t) : s(h.percentage, t),
			h
		},
		d = function() {
			var t, e, i;
			for (h.ctx.fillStyle = h.options.scaleColor, h.ctx.lineWidth = 1, i = [], t = e = 0; 24 >= e; t = ++e) i.push(n(t));
			return i
		},
		n = function(t) {
			var e;
			e = 0 === t % 6 ? 0 : .017 * h.options.size,
			h.ctx.save(),
			h.ctx.rotate(t * Math.PI / 12),
			h.ctx.fillRect(h.options.size / 2 - e, 0, .05 * -h.options.size + e, 1),
			h.ctx.restore()
		},
		c = function() {
			var t;
			t = h.options.size / 2 - h.options.lineWidth / 2,
			h.options.scaleColor !== !1 && (t -= .08 * h.options.size),
			h.ctx.beginPath(),
			h.ctx.arc(0, 0, t, 0, 2 * Math.PI, !0),
			h.ctx.closePath(),
			h.ctx.strokeStyle = h.options.trackColor,
			h.ctx.lineWidth = h.options.lineWidth,
			h.ctx.stroke()
		},
		l = function() {
			h.options.scaleColor !== !1 && d(),
			h.options.trackColor !== !1 && c()
		},
		o = function(e) {
			var i;
			l(),
			h.ctx.strokeStyle = t.isFunction(h.options.barColor) ? h.options.barColor(e) : h.options.barColor,
			h.ctx.lineCap = h.options.lineCap,
			h.ctx.lineWidth = h.options.lineWidth,
			i = h.options.size / 2 - h.options.lineWidth / 2,
			h.options.scaleColor !== !1 && (i -= .08 * h.options.size),
			h.ctx.save(),
			h.ctx.rotate( - Math.PI / 2),
			h.ctx.beginPath(),
			h.ctx.arc(0, 0, i, 0, 2 * Math.PI * e / 100, !1),
			h.ctx.stroke(),
			h.ctx.restore()
		},
		a = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			function(t) {
				return window.setTimeout(t, 1e3 / 60)
			}
		} (),
		s = function(t, e) {
			var i, n;
			h.options.onStart.call(h),
			h.percentage = e,
			Date.now || (Date.now = function() {
				return + new Date
			}),
			n = Date.now(),
			i = function() {
				var s, d;
				return d = Date.now() - n,
				d < h.options.animate && a(i),
				h.ctx.clearRect( - h.options.size / 2, -h.options.size / 2, h.options.size, h.options.size),
				l.call(h),
				s = [r(d, t, e - t, h.options.animate)],
				h.options.onStep.call(h, s),
				o.call(h, s),
				d >= h.options.animate ? h.options.onStop.call(h, s, e) : void 0
			},
			a(i)
		},
		r = function(t, e, i, n) {
			var s, o;
			return s = function(t) {
				return Math.pow(t, 2)
			},
			o = function(t) {
				return 1 > t ? s(t) : 2 - s( - 2 * (t / 2) + 2)
			},
			t /= n / 2,
			i / 2 * o(t) + e
		},
		this.init()
	},
	t.easyPieChart.defaultOptions = {
		barColor: "#4cc995",
		trackColor: "#eee",
		scaleColor: "#fff",
		lineCap: "square",
		rotate: 0,
		size: 140,
		lineWidth: 6,
		animate: !0,
		onStart: t.noop,
		onStop: t.noop,
		onStep: t.noop
	},
	t.fn.easyPieChart = function(e) {
		return t.each(this,
		function(i, n) {
			var s, o;
			var $t = $(this);
			var AnimationChart = function() {
				var viewTop = Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop) + Math.max.call(window.clientHeight, document.body.clientHeight, document.documentElement.clientHeight),
				_top = $t.offset().top;
				if (viewTop > _top && $t.find('canvas').length <= 0) {
					return s = t(n),
					s.data("") ? void 0 : (o = t.extend({},
					e, s.data()), s.data("easyPieChart", new t.easyPieChart(n, o)))
				}
			}
			AnimationChart();
			$(window).scroll(function(event) {
				AnimationChart()
			})
		})
	},
	void 0
} (jQuery);