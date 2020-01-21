
/*!
 * Lightbox v2.8.2
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.lightbox=b(a.jQuery)}(this,function(a){function b(b){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=a.extend({},this.constructor.defaults),this.option(b)}return b.defaults={albumLabel:"Изображение %1 of %2",alwaysShowNavOnTouchDevices:1,fadeDuration:500,fitImagesInViewport:!0,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:1,disableScrolling:1},b.prototype.option=function(b){a.extend(this.options,b)},b.prototype.imageCountLabel=function(a,b){return this.options.albumLabel.replace(/%1/g,a).replace(/%2/g,b)},b.prototype.init=function(){this.enable(),this.build()},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===b.currentImageIndex?b.changeImage(b.album.length-1):b.changeImage(b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.currentImageIndex===b.album.length-1?b.changeImage(0):b.changeImage(b.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&a("body").addClass("lb-disable-scrolling"),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerLeftPadding-c.containerRightPadding-20,i=k-c.containerTopPadding-c.containerBottomPadding-120,c.options.maxWidth&&c.options.maxWidth<j&&(j=c.options.maxWidth),c.options.maxHeight&&c.options.maxHeight<j&&(i=c.options.maxHeight),(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(document).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerLeftPadding+this.containerRightPadding,h=b+this.containerTopPadding+this.containerBottomPadding;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;if("undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(b){void 0!==a(this).attr("target")?window.open(a(this).attr("href"),a(this).attr("target")):location.href=a(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel){var c=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(c).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"}),this.options.disableScrolling&&a("body").removeClass("lb-disable-scrolling")},new b});
//# sourceMappingURL=lightbox.min.map
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


/* SOCIAL */
$(window).load(function()
  {
	  

	$("#slideInUp .close").click(function ()
	{
		 if($("#slideInUp").hasClass("emailcookie"))
	  {
		  var cookiename = "slideremail";
	  }
	  else
	  {
	    var cookiename = "sliderfb";
	  }		
		$.cookie(cookiename, 1, { expires : 60 } );
		$("#slideInUp").animate({ "bottom": "-=103px" },"slow");
	});
  var scontentas = $('#article');
  	  	  
$(".mailchimp-container__email").click(function ()
{
	$(this).attr("placeholder", "");
}
)
  $(window).scroll(function(ev)
  {
	  var cookiename ="";
	  if($("#slideInUp").hasClass("emailcookie"))
	  { 
		var cookiename = "slideremail";
	  }
	  else // not_used
	  {
	 	  var cookiename = "sliderfb";
	  }		  
	  var slidercookie = $.cookie(cookiename); 
	  var facebook_liked = $.cookie("facebook_liked"); // modal already liked
	  var dialog_fb_closed = $.cookie("dialog_fb_closed"); // modal closed
   var email_subscribed = $.cookie("email_subscribed"); // modal closed //fb modal fix
	  if($("#slideInUp").hasClass( "animated" ) && (true ||facebook_liked==1 || dialog_fb_closed==1) && slidercookie == undefined && email_subscribed==undefined  && $(window).scrollTop()>300 && screen.width>1000 )
	  {
		  
		//  $.cookie(cookiename, 1, { expires : 1 } );
		 $("#slideInUp").removeClass("animated");
		$("#slideInUp").animate({ "bottom": "-1px" },"slow");
	  }

  if($(window).scrollTop()-150 > scontentas.height())
  {
	  if(screen.width<450)
	  {
		$('#mobile_social').css("display","none");
	  }
  $("#socialsticky").css("display","none");
  }
  else
  {
	$("#socialsticky").css("display","block");
  }
  if($(window).scrollTop()>200)
  { 
		if(screen.width<450)
		{
	    $('#mobile_social').css("display","block");
		}
  }
  
  });
  $('.social-likes__button').click(function () { frame_append();});
  $('button.btn').click(function () {
	var title = $('title').text();
	var image = $('meta[property="og:image"]').attr('content');
	var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
	if($(this).hasClass("vk"))
	sharer = "https://vk.com/share.php?url=";
	if($(this).hasClass("tw"))
	sharer = "https://twitter.com/intent/tweet?text="+title+"&url=";
	if($(this).hasClass("ok"))
	sharer = "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=";
	if($(this).hasClass("pin"))
	sharer = "https://www.pinterest.com/pin/create/button/?media="+image+"&description="+title+"&url=";
	if($(this).hasClass("whatsapp"))
	sharer = "whatsapp://send?text="+title+"%20";
	if($(this).hasClass("viber"))
	sharer = "viber://forward?text="+title+"%20";
	var url = $('meta[property="og:url"]').attr('content');
	
    var width = 750;
    var height = 600;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var params = "height=" + height + ", width=" + width + ", top=" + top + ", left=" + left + ", personalbar=0, titlebar=0, toolbar=0, menubar=0, scrollbars=0, resizable=0";
    var i = window.open(sharer + url, "_blank", params);

	frame_append();
});
  
  
  	
  
  
  
  function frame_append()
  {
	  fbq('track', 'Purchase');

	  $(document.body).append('<iframe src="/fbshare.htm" style="width: 1px; height: 1px;position: absolute; left: -10px"></iframe>');
  }
  });

/*! Social Likes v3.1.0 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a,b){"use strict";function c(a,b){this.container=a,this.options=b,this.init()}function d(b,c){this.widget=b,this.options=a.extend({},c),this.detectService(),this.service&&this.init()}function e(a){function b(a,b){return b.toUpper()}var c={},d=a.data();for(var e in d){var f=d[e];"yes"===f?f=!0:"no"===f&&(f=!1),c[e.replace(/-(\w)/g,b)]=f}return c}function f(a,b){return g(a,b,encodeURIComponent)}function g(a,b,c){return a.replace(/\{([^\}]+)\}/g,function(a,d){return d in b?c?c(b[d]):b[d]:a})}function h(a,b){var c=l+a;return c+" "+c+"_"+b}function i(b,c){function d(g){"keydown"===g.type&&27!==g.which||a(g.target).closest(b).length||(b.removeClass(m),e.off(f,d),a.isFunction(c)&&c())}var e=a(document),f="click touchstart keydown";e.on(f,d)}function j(a){var b=10;if(document.documentElement.getBoundingClientRect){var c=parseInt(a.css("left"),10),d=parseInt(a.css("top"),10),e=a[0].getBoundingClientRect();e.left<b?a.css("left",b-e.left+c):e.right>window.innerWidth-b&&a.css("left",window.innerWidth-e.right-b+c),e.top<b?a.css("top",b-e.top+d):e.bottom>window.innerHeight-b&&a.css("top",window.innerHeight-e.bottom-b+d)}a.addClass(m)}var k="social-likes",l=k+"__",m=k+"_opened",n="https:"===location.protocol?"https:":"http:",o={facebook:{counterUrl:"https://graph.facebook.com/?id={url}&callback=?",convertNumber:function(assa){var share_count=assa.share.share_count;if(share_count<1){share_count=Math.floor((Math.random() * 8) + 7);} $('div#fbcounters span').text(share_count); return share_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:359},twitter:{popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:250,click:function(){return/[\.\?:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}},mailru:{counterUrl:n+"//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",convertNumber:function(a){for(var b in a)if(a.hasOwnProperty(b))return a[b].shares},popupUrl:"https://connect.mail.ru/share?share_url={url}&title={title}",popupWidth:492,popupHeight:500},vkontakte:{counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",counter:function(b,c){var d=o.vkontakte;d._||(d._=[],window.VK||(window.VK={}),window.VK.Share={count:function(a,b){d._[a].resolve(b);if(b>0)$('div#vkcounters span').text(b);}});var e=d._.length;d._.push(c),a.getScript(f(b,{index:e})).fail(c.reject)},popupUrl:"https://vk.com/share.php?url={url}&title={title}",popupWidth:655,popupHeight:450},odnoklassniki:{counterUrl:n+"//connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",counter:function(b,c){var d=o.odnoklassniki;d._||(d._=[],window.ODKL||(window.ODKL={}),window.ODKL.updateCount=function(a,b){if(b<1){b=Math.floor((Math.random() * 4) + 8);} $('#okcounters span').text(b);d._[a].resolve(b)});var e=d._.length;d._.push(c),a.getScript(f(b,{index:e})).fail(c.reject)},popupUrl:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:580,popupHeight:336},plusone:{counterUrl:n+"//share.yandex.ru/gpp.xml?url={url}&callback=?",convertNumber:function(a){return parseInt(a.replace(/\D/g,""),10)},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:500,popupHeight:550},pinterest:{counterUrl:n+"//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumber:function(a){return a.count},popupUrl:"https://pinterest.com/pin/create/button/?url={url}&description={title}&media="+$('meta[property="og:image"]').attr('content'),popupWidth:740,popupHeight:550}},p={promises:{},fetch:function(b,c,d){p.promises[b]||(p.promises[b]={});var e=p.promises[b];if(!d.forceUpdate&&e[c])return e[c];var g=a.extend({},o[b],d),h=a.Deferred(),i=g.counterUrl&&f(g.counterUrl,{url:c});return i&&a.isFunction(g.counter)?g.counter(i,h):g.counterUrl?a.getJSON(i).done(function(b){try{var c=b;a.isFunction(g.convertNumber)&&(c=g.convertNumber(b)),h.resolve(c)}catch(d){h.reject()}}).fail(h.reject):h.reject(),e[c]=h.promise(),e[c]}};a.fn.socialLikes=function(b){return this.each(function(){var d=a(this),f=d.data(k);f?a.isPlainObject(b)&&f.update(b):(f=new c(d,a.extend({},a.fn.socialLikes.defaults,b,e(d))),d.data(k,f))})},a.fn.socialLikes.defaults={url:(window.location.href.replace(window.location.hash,"")).replace(window.location.search,""),title:document.title,counters:!0,zeroes:!1,wait:500,timeout:1e4,popupCheckInterval:500,singleTitle:"Share"},c.prototype={init:function(){this.container.addClass(k),this.single=this.container.hasClass(k+"_single"),this.initUserButtons(),this.countersLeft=0,this.number=0,this.container.on("counter."+k,a.proxy(this.updateCounter,this));var b=this.container.children();this.makeSingleButton(),this.buttons=[],b.each(a.proxy(function(b,c){var e=new d(a(c),this.options);this.buttons.push(e),e.options.counterUrl&&this.countersLeft++},this)),this.options.counters?(this.timer=setTimeout(a.proxy(this.appear,this),this.options.wait),this.timeout=setTimeout(a.proxy(this.ready,this,!0),this.options.timeout)):this.appear()},initUserButtons:function(){!this.userButtonInited&&window.socialLikesButtons&&a.extend(!0,o,socialLikesButtons),this.userButtonInited=!0},makeSingleButton:function(){if(this.single){var b=this.container;b.addClass(k+"_vertical"),b.wrap(a("<div>",{"class":k+"_single-w"})),b.wrapInner(a("<div>",{"class":k+"__single-container"}));var c=b.parent(),d=a("<div>",{"class":h("widget","single")}),e=a(g('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>',{buttonCls:h("button","single"),iconCls:h("icon","single"),title:this.options.singleTitle}));d.append(e),c.append(d),d.on("click",function(){var a=k+"__widget_active";return d.toggleClass(a),d.hasClass(a)?(b.css({left:-(b.width()-d.width())/2,top:-b.height()}),j(b),i(b,function(){d.removeClass(a)})):b.removeClass(m),!1}),this.widget=d}},update:function(b){if(b.forceUpdate||b.url!==this.options.url){this.number=0,this.countersLeft=this.buttons.length,this.widget&&this.widget.find("."+k+"__counter").remove(),a.extend(this.options,b);for(var c=0;c<this.buttons.length;c++)this.buttons[c].update(b)}},updateCounter:function(a,b,c){c=c||0,(c||this.options.zeroes)&&(this.number+=c,this.single&&this.getCounterElem().text(this.number)),0===this.countersLeft&&(this.appear(),this.ready()),this.countersLeft--},appear:function(){this.container.addClass(k+"_visible")},ready:function(a){this.timeout&&clearTimeout(this.timeout),this.container.addClass(k+"_ready"),a||this.container.trigger("ready."+k,this.number)},getCounterElem:function(){var b=this.widget.find("."+l+"counter_single");return b.length||(b=a("<span>",{"class":h("counter","single")}),this.widget.append(b)),b}},d.prototype={init:function(){this.detectParams(),this.initHtml(),setTimeout(a.proxy(this.initCounter,this),0)},update:function(b){a.extend(this.options,{forceUpdate:!1},b),this.widget.find("."+k+"__counter").remove(),this.initCounter()},detectService:function(){var b=this.widget.data("service");if(!b){for(var c=this.widget[0],d=c.classList||c.className.split(" "),e=0;e<d.length;e++){var f=d[e];if(o[f]){b=f;break}}if(!b)return}this.service=b,a.extend(this.options,o[b])},detectParams:function(){var a=this.widget.data();if(a.counter){var b=parseInt(a.counter,10);isNaN(b)?this.options.counterUrl=a.counter:this.options.counterNumber=b}a.title&&(this.options.title=a.title),a.url&&(this.options.url=a.url)},initHtml:function(){var b=this.options,c=this.widget,d=c.find("a");d.length&&this.cloneDataAttrs(d,c);var e=a("<span>",{"class":this.getElementClassNames("button"),text:c.text()});if(b.clickUrl){var g=f(b.clickUrl,{url:b.url,title:b.title}),h=a("<a>",{href:g});this.cloneDataAttrs(c,h),c.replaceWith(h),this.widget=c=h}else c.on("click",a.proxy(this.click,this));c.removeClass(this.service),c.addClass(this.getElementClassNames("widget")),e.prepend(a("<span>",{"class":this.getElementClassNames("icon")})),c.empty().append(e),this.button=e},initCounter:function(){if(this.options.counters)if(this.options.counterNumber)this.updateCounter(this.options.counterNumber);else{var b={counterUrl:this.options.counterUrl,forceUpdate:this.options.forceUpdate};p.fetch(this.service,this.options.url,b).always(a.proxy(this.updateCounter,this))}},cloneDataAttrs:function(a,b){var c=a.data();for(var d in c)c.hasOwnProperty(d)&&b.data(d,c[d])},getElementClassNames:function(a){return h(a,this.service)},updateCounter:function(b){b=parseInt(b,10)||0;var c={"class":this.getElementClassNames("counter"),text:b};b||this.options.zeroes||(c["class"]+=" "+k+"__counter_empty",c.text="");var d=a("<span>",c);this.widget.append(d),this.widget.trigger("counter."+k,[this.service,b])},click:function(b){var c=this.options,d=!0;if(a.isFunction(c.click)&&(d=c.click.call(this,b)),d){var e=f(c.popupUrl,{url:c.url,title:c.title});e=this.addAdditionalParamsToUrl(e),this.openPopup(e,{width:c.popupWidth,height:c.popupHeight})}return!1},addAdditionalParamsToUrl:function(b){var c=a.param(a.extend(this.widget.data(),this.options.data));if(a.isEmptyObject(c))return b;var d=-1===b.indexOf("?")?"?":"&";return b+d+c},openPopup:function(b,c){var d=Math.round(screen.width/2-c.width/2),e=0;screen.height>c.height&&(e=Math.round(screen.height/3-c.height/2));var f=window.open(b,"sl_"+this.service,"left="+d+",top="+e+",width="+c.width+",height="+c.height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");if(f){f.focus(),this.widget.trigger("popup_opened."+k,[this.service,f]);var g=setInterval(a.proxy(function(){f.closed&&(clearInterval(g),this.widget.trigger("popup_closed."+k,this.service))},this),this.options.popupCheckInterval)}else location.href=b}},a(function(){a("."+k).socialLikes()})});

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

/* MOBILE */


(function($) {
	
  $(document).ready(fixWidgetsInSidebar);

  $(window).resize(function() {
    var viewportWidth = $(window).width();

    

    // if ($('.rfw--fixed-widgets').length === 0) {
    //   fixWidgetsInSidebar();
    // }
  });

  function fixWidgetsInSidebar() {
    var $window = $(window);

    

    var reversedAllWidgets = $('#right .widget').toArray().reverse();
    if (reversedAllWidgets.length < 1) return;

    var $sidebar = $('#right');

    // Grouped widgets around base
    var $groupedFixedWidgets = getGroupedFixedWidgets(reversedAllWidgets);

    // Wrap base widget in containers with places for the rest fixed widgets
    var $containers = createContainers($groupedFixedWidgets);

    $window.on('scroll', handleScroll);

    function getGroupedFixedWidgets() {
      // Base widget - the top of the bottom
      var $groupedFixedWidgets = {
        aboveBase: [],
        // Because base can be empty i.e. null, need another value for check
        base: 0,
        belowBase: [],
      }

      reversedAllWidgets.forEach(function(widget) {
        var $widget = $(widget);

        if ($widget.hasClass('widget_can_fix')) {
          var originalPositionMarkId = $widget.attr('id') + '-mark';
          var originalPositionMark = '<span id="' + originalPositionMarkId + '"></span>';

          $widget.before(originalPositionMark);

          if ($groupedFixedWidgets.base === 0) {
            $groupedFixedWidgets.belowBase.unshift({
              widget: $widget,
              originalPositionMark: $('#' + originalPositionMarkId)
            })
          } else {
            $groupedFixedWidgets.aboveBase.unshift({
              widget: $widget,
              originalPositionMark: $('#' + originalPositionMarkId)
            })
          }
        } else {
          if ($groupedFixedWidgets.base === 0) {
            if ($groupedFixedWidgets.belowBase.length)  {
              $groupedFixedWidgets.base = $groupedFixedWidgets.belowBase.shift();
            } else {
              $groupedFixedWidgets.base = null;
            }
          }
        }
      });

      return $groupedFixedWidgets;
    }

    function createContainers($groupedFixedWidgets) {
      var $containers = {
        // Root container
        root: null,
        // Base widget container
        base: null,
        aboveBase: null,
        belowBase: null,
      };

      // rfw - Ringo Fixed Widgets, namespace for this plugin
      // Need for finding position where widgets will be fixed, cause can't find position by base widgets cause image and widgets only loading
      if ($groupedFixedWidgets.base) {
        $groupedFixedWidgets.base.widget.before('<div id="rfw--mark-for-fixation"></div>');
      } else {
        $sidebar.append('<div id="rfw--mark-for-fixation"></div>');
      }

      if ($groupedFixedWidgets.base) {
        $groupedFixedWidgets.base.widget.wrap('<div id="rfw--fixed-widgets__base"></div>');
      } else {
        $sidebar.append('<div id="rfw--fixed-widgets__base"></div>');
      }

      $containers.base = $('#rfw--fixed-widgets__base');

      $containers.base.wrap('<div id="rfw--fixed-widgets"></div>');
      $containers.base.before('<div id="rfw--fixed-widgets__above-base"></div>');
      $containers.base.after('<div id="rfw--fixed-widgets__below-base"></div>');

      $containers.mark = $('#rfw--mark-for-fixation');
      $containers.root = $('#rfw--fixed-widgets');
      $containers.aboveBase = $('#rfw--fixed-widgets__above-base');
      $containers.belowBase = $('#rfw--fixed-widgets__below-base');

    

      return $containers;
    }

    function handleScroll() {
      var fixedMenuHeight = 0;
      var windowTop = $window.scrollTop() + fixedMenuHeight;

      fixUnfixWidgets(fixedMenuHeight, windowTop);
      freezeWidgets(fixedMenuHeight, windowTop);
    }

    function fixUnfixWidgets(fixedMenuHeight, windowTop) {
      var $limitBlock = $('#left_viral.bottomblock');
      if ($limitBlock.length == 0) {
        $limitBlock = $('#footermenu');
      }
      var sidebarBottom = $sidebar.offset().top + $sidebar.height();
      // If sidebar close to limit block - don't fix
     if ($limitBlock.offset().top - sidebarBottom < 70) return;


      // Get position where widgets will be fixed
      var positionWhereWidgetsWillBeFixed = $containers.mark.offset().top;

      if (windowTop > positionWhereWidgetsWillBeFixed) {
        if (['fixed', 'absolute'].indexOf($containers.root.css('position')) !== -1) return;

        $containers.root.css({
          position: 'fixed',
          top: fixedMenuHeight + 5
        });

        moveWidgetsToFixedContainer($groupedFixedWidgets.aboveBase, $containers.aboveBase);

        moveWidgetsToFixedContainer($groupedFixedWidgets.belowBase, $containers.belowBase);

      } else {
        if (['static', 'absolute'].indexOf($containers.root.css('position')) !== -1) return;

        $containers.root.css({
          position: 'static',
        });

        moveWidgetsToOriginalPosition($groupedFixedWidgets.aboveBase);

        moveWidgetsToOriginalPosition($groupedFixedWidgets.belowBase);
      }

      function moveWidgetsToFixedContainer($widgets, $container) {
        $widgets.forEach(function(widgetData) {
          widgetData.widget.detach().appendTo($container);
        });
      }

      function moveWidgetsToOriginalPosition($widgets) {
        $widgets.forEach(function(widgetData) {
          widgetData.widget.detach().insertAfter(widgetData.originalPositionMark);
        });
      }
    }

    function freezeWidgets(fixedMenuHeight, windowTop) {
      var $limitBlock = $('#left_viral.bottomblock');
      var freezePosition = 0;

      if ($limitBlock.length == 0) {
        $limitBlock = $('#footermenu');
        freezePosition -= $('#footermenu').height();
      }

      var limitBlockTop = $limitBlock.offset().top;
      var limitBlockHeight = $limitBlock.height();
      freezePosition += limitBlockHeight + $('#footermenu').height();

      var fixedWidgetsContainerBottom = $containers.root.offset().top + $containers.root.height();

      if (fixedWidgetsContainerBottom >= limitBlockTop) {
        if ($containers.root.css('position') === 'fixed') {
          // console.dir('set abs');

          $containers.root.css({
            position: 'absolute',
            bottom: 'auto', 
            top:  ($limitBlock.offset().top - $containers.root.height()   )
          });
        }
      }

      if (windowTop < $containers.root.offset().top) {
        if ($containers.root.css('position') === 'absolute') {
          // console.dir('set fix');

          $containers.root.css({
            position: 'fixed',
            top: fixedMenuHeight + 5,
            bottom: 'auto'
          });
        }
      }
    }
  }

})(jQuery);

function show_menu(){if(document.getElementById("mobs1").style.display=="inline"){document.getElementById("mainmenu").style.display="block";document.getElementById("mobs2").style.display="inline";document.getElementById("mobs1").style.display="none";}else{document.getElementById("mainmenu").style.display="none";document.getElementById("mobs2").style.display="none";document.getElementById("mobs1").style.display="inline";}}function show_secondary(){if(document.getElementById("secondarymenu").style.display=="block"){document.getElementById("secondarymenu").style.display="none";document.getElementById("show_secondary").innerHTML="еще &#9660;";}else{document.getElementById("secondarymenu").style.display="block";document.getElementById("show_secondary").innerHTML="еще &#9650;";}}

jQuery(document).ready(function(){
	$("#clicknow").text($("#clicknow").attr("title"));
	$(".infohid").css('display', 'none');
	$(".hidden-text-button").click(function() { 
	$(this).children("a.js-hidden-text-button").css('display', 'none');
	$(this).children("span.infohid").css('display', 'block')	
	}); });
	

/* FB & SLIDE SCROLL */
			
$(document).ready(function() {
	setTimeout(function() {
		FB.Event.subscribe('edge.create', function() {
		$("#slideInUp.facebook-container").animate({ "bottom": "-=103px" },"slow"); 
		$('#dialog-fb').animate({opacity:0},300);
		$('#dark_popup').animate({opacity:0}, 300);
		$.cookie('facebook_liked', 1,{ expires: 365 });
		});
		FB.Event.subscribe('edge.remove', function() {
		$.removeCookie("facebook_liked");			
		});
	
		},5000);

			}); 

	
/* POP-UP.JS */

var a = 250;//отступ снизу страницы в пикселях при котором появляется окно
var b = 400;
var wid = $(window).width();
var heig = $(window).height();
var id  = $('#xface');
var y = id.height();
var free = true;
var positiona =0;
$('body').append('<div id="xpoint"></div>');  
var xandria = $('#xpoint').offset().top;  
id.css({'position':'fixed'});
id.css({'right':15, 'bottom':-470});

function darkup (c, d) {
	var delay1 = c*1000;
	$(document).ready(function() {
		if ($.cookie('facebook_liked')== undefined && $.cookie('hidedarkpopup')==undefined && $.cookie('next_popup')==undefined) {
	setTimeout(function () {
		$.cookie('next_popup', 1 , {expires: 5 });
		$('#dark_popup').show();
		$('#dark_popup').animate({opacity:0.5}, 400);
		if(screen.width<1024) // only for mobile view
		{
		$('#dialog-fb').css("left", "50%");
		$('#dialog-fb').css("top", "45%");
		}
		else
		{
		$('#dialog-fb').css("left", "0px");
	
		}
		$('#dialog-fb').css("position", "fixed");	
			

     setTimeout(function () {$('#dialog-fb').animate({opacity:1},400)},300);
	},delay1) }
});
	$('.close-modal').click(function(e) {
		e.preventDefault();
		setTimeout(function(){$('#dialog-fb').animate({opacity:0},400).css({'top':'-50%'})},1000);
		setTimeout(function(){$('#dark_popup').animate({opacity:0}, 300).hide()},1000);	
	});
	$('.modal-close').click(function(e) {
		e.preventDefault();
		$('#dialog-fb').animate({opacity:0},150);
		setTimeout(function(){$('#dialog-fb').css({'top':'-50%'})},200);
		setTimeout(function(){$('#dark_popup').animate({opacity:0}, 300).hide()},140);
		$.cookie('hidedarkpopup', 1 , {expires: 90 })	 // show after 90 days
	});

  }
	
	$("#dark_popup").click(function (){
		$.cookie('dialog_fb_closed', 1 , {expires: 5 });
		$('#dialog-fb').css({'display':'none'});
	$('#dark_popup').css({'display':'none'});});
	
	$("#dialog-fb").click(function (){
		$.cookie('dialog_fb_closed', 1 , {expires: 5 });
		$('#dialog-fb').css({'display':'none'});
	$('#dark_popup').css({'display':'none'});});
	
	   
		
		                 /* ORPHUS */

(function(){var _1="5.01";
var _2="!ytopw@monadaivecr.u";
var hq="https://orphus.ru/ru/";
var _4="<!!!>";
var _5="<!!!>";
var _6=60;
var _7=256;
var _8={// Russian (\u0420\u0443\u0441\u0441\u043A\u0438\u0439)
alt:        "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u043E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0448\u0438\u0431\u043A\u0443 \u043C\u044B\u0448\u044C\u044E \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+Enter. \u0421\u0434\u0435\u043B\u0430\u0435\u043C \u044F\u0437\u044B\u043A \u0447\u0438\u0449\u0435!",
badbrowser: "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438\u043B\u0438 IFRAME. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u0442\u0430\u0440\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F, \u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0435\u0449\u0435 \u043A\u0430\u043A\u0430\u044F-\u043D\u0438\u0431\u0443\u0434\u044C \u043E\u0448\u0438\u0431\u043A\u0430.",
toobig:     "\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u044A\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u0430!",
thanks:     "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E!",
subject:    "\u041E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
docmsg:     "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442:",
intextmsg:  "\u041E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0442\u0435\u043A\u0441\u0442\u0435:",
ifsendmsg:  "\u041F\u043E\u0441\u043B\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0430\u0432\u0442\u043E\u0440\u0443?\n\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u043E\u0439 \u0436\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.",
gohome:     "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0434\u043E\u043C\u0430\u0448\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B Orphus?",
newwin:     "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435.",
name:       "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 Orphus", 
author:     "\u0410\u0432\u0442\u043E\u0440: \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0442\u0435\u0440\u043E\u0432.",
to:         "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C Orphus",
// 5.0
send:       "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
cancel:     "\u041E\u0442\u043C\u0435\u043D\u0430",
entercmnt:  "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E):"
// Dmitry Koterov

};
var _9="css";
var _a=0;
var w=window;
var d=w.document;
var de=d.documentElement;
var b=d.body;
var _f=null;
var _10={};
var _11=false;
var _12="";
var _13=function(){if(_2.substr(0,1)=="!"){_2=_2.substr(1).replace(/(.)(.)/g,"$2$1");}setTimeout(function(){var _14=_15();
if(_14){_14.onclick=_16;
_14.title=_14.childNodes[0]&&_14.childNodes[0].alt;}},100);
d.onkeypress=_17;
_8.gohome+=" "+_8.newwin;};
var _15=function(){return d.getElementById("orphus");};
var _16=function(){with(_8){if(confirm(name+" v"+_1+".\n"+author+"\n\n"+alt+"\n\n"+gohome)){w.open(hq,"_blank");}return false;}};
var _18=function(){var n=0;
var _1a=function(){if(++n>20){return;}w.status=(n%5)?_8.thanks:" ";
setTimeout(_1a,100);};
_1a();};
var _1b=function(e){e.style.position="absolute";
e.style.top="-10000px";
if(b.lastChild){b.insertBefore(e,b.lastChild);}else{b.appendChild(e);}};
var _1d=function(_1e){var div=d.createElement("DIV");
div.innerHTML="<iframe name=\""+_1e+"\"></iframe>";
_1b(div);
return d.childNodes[0];};
var _20=function(url,_22,_23){var _24="orphus_ifr";
if(!_f){_f=_1d(_24);}var f=d.createElement("FORM");
f.style.position="absolute";
f.style.top="-10000px";
f.action=hq;
f.method="post";
f.target=_24;
var _26={version:_1,email:_2,to:_8.to,subject:_8.subject,ref:url,c_pre:_22.pre,c_sel:_22.text,c_suf:_22.suf,c_pos:_22.pos,c_tag1:_4,c_tag2:_5,charset:d.charset||d.characterSet||"",comment:_23};
for(var k in _26){var h=d.createElement("INPUT");
h.type="hidden";
h.name=k;
h.value=_26[k];
f.appendChild(h);}_1b(f);
f.submit();
f.parentNode.removeChild(f);};
var _29=function(){var _2a=0,_2b=0;
if(typeof (w.innerWidth)=="number"){_2a=w.innerWidth;
_2b=w.innerHeight;}else{if(de&&(de.clientWidth||de.clientHeight)){_2a=de.clientWidth;
_2b=de.clientHeight;}else{if(b&&(b.clientWidth||b.clientHeight)){_2a=b.clientWidth;
_2b=b.clientHeight;}}}var _2c=0,_2d=0;
if(typeof (w.pageYOffset)=="number"){_2d=w.pageYOffset;
_2c=w.pageXOffset;}else{if(b&&(b.scrollLeft||b.scrollTop)){_2d=b.scrollTop;
_2c=b.scrollLeft;}else{if(de&&(de.scrollLeft||de.scrollTop)){_2d=de.scrollTop;
_2c=de.scrollLeft;}}}return {w:_2a,h:_2b,x:_2c,y:_2d};};
_10.confirm=function(_2e,_2f,_30){var ts=new Date().getTime();
var _32=confirm(_8.docmsg+"\n   "+d.location.href+"\n"+_8.intextmsg+"\n   \""+_2e+"\"\n\n"+_8.ifsendmsg);
var dt=new Date().getTime()-ts;
if(_32){_2f("");}else{if(!_30&&dt<50){var sv=d.onkeyup;
d.onkeyup=function(e){if(!e){e=window.event;}if(e.keyCode==17){d.onkeyup=sv;
_10.confirm(_2e,_2f,true);}};}}};
_10.css=function(_36,_37){if(_11){return;}_11=true;
var div=d.createElement("DIV");
var w=550;
if(w>b.clientWidth-10){w=b.clientWidth-10;}div.style.zIndex="10001";
div.innerHTML=""+"<div style=\"background:#D4D0C8; width:"+w+"px; z-index:10001; border: 1px solid #555; padding:1em; font-family: Arial; font-size: 90%; color:black\">"+"<a href=\""+hq+"\" target=\"_blank\"><img style=\"float:right; margin:0 0 1em 1em\" border=\"0\" src=\""+_15().childNodes[0].src+"\"/></a>"+"<div style=\"font-weight:bold; padding-bottom:0.2em\">"+_8.intextmsg+"</div>"+"<div style=\"padding: 0 0 1em 1em\">"+_36.replace(_4,"<u style=\"color:red\">").replace(_5,"</u>")+"</div>"+"<div style=\"padding: 0 0 1em 0\">"+_8.ifsendmsg.replace(/\n/,"<br/>")+"</div>"+"<form style=\"padding:0; margin:0; border:0\">"+"<div>"+_8.entercmnt+"</div>"+"<input type=\"text\" maxlength=\"250\" style=\"width:100%; margin: 0.2em 0\" />"+"<div style=\"text-align:right; font-family: Tahoma\">"+"<input type=\"submit\" value=\""+_8.send+"\" style=\"width:9em; font-weight: bold\">&nbsp;"+"<input type=\"button\" value=\""+_8.cancel+"\" style=\"width:9em\">"+"</div>"+"</form>"+"</div>"+"";
_1b(div);
var _3a=div.getElementsByTagName("input");
var _3b=div.getElementsByTagName("form");
var t=_3a[0];
var _3d=null;
var _3e=[];
var _3f=function(){d.onkeydown=_3d;
_3d=null;
div.parentNode.removeChild(div);
for(var i=0;i<_3e.length;i++){_3e[i][0].style.visibility=_3e[i][1];}_11=false;
_12=t.value;};
var pos=function(p){var s={x:0,y:0};
while(p.offsetParent){s.x+=p.offsetLeft;
s.y+=p.offsetTop;
p=p.offsetParent;}return s;};
setTimeout(function(){var w=div.clientWidth;
var h=div.clientHeight;
var dim=_29();
var x=(dim.w-w)/2+dim.x;
if(x<10){x=10;}var y=(dim.h-h)/2+dim.y-10;
if(y<10){y=10;}div.style.left=x+"px";
div.style.top=y+"px";
if(navigator.userAgent.match(/MSIE (\d+)/)&&RegExp.$1<7){var _49=d.getElementsByTagName("SELECT");
for(var i=0;i<_49.length;i++){var s=_49[i];
var p=pos(s);
if(p.x>x+w||p.y>y+h||p.x+s.offsetWidth<x||p.y+s.offsetHeight<y){continue;}_3e[_3e.length]=[s,s.style.visibility];
s.style.visibility="hidden";}}t.value=_12;
t.focus();
t.select();
_3d=d.onkeydown;
d.onkeydown=function(e){if(!e){e=window.event;}if(e.keyCode==27){_3f();}};
_3b[0].onsubmit=function(){_37(t.value);
_3f();
_12="";
return false;};
_3a[2].onclick=function(){_3f();};},10);};
var _4e=function(_4f){return (""+_4f).replace(/[\r\n]+/g," ").replace(/^\s+|\s+$/g,"");};
var _50=function(){try{var _51=null;
var _52=null;
if(w.getSelection){_52=w.getSelection();}else{if(d.getSelection){_52=d.getSelection();}else{_52=d.selection;}}var _53=null;
if(_52!=null){var pre="",_51=null,suf="",pos=-1;
if(_52.getRangeAt){var r=_52.getRangeAt(0);
_51=r.toString();
var _58=d.createRange();
_58.setStartBefore(r.startContainer.ownerDocument.body);
_58.setEnd(r.startContainer,r.startOffset);
pre=_58.toString();
var _59=r.cloneRange();
_59.setStart(r.endContainer,r.endOffset);
_59.setEndAfter(r.endContainer.ownerDocument.body);
suf=_59.toString();}else{if(_52.createRange){var r=_52.createRange();
_51=r.text;
var _58=_52.createRange();
_58.moveStart("character",-_6);
_58.moveEnd("character",-_51.length);
pre=_58.text;
var _59=_52.createRange();
_59.moveEnd("character",_6);
_59.moveStart("character",_51.length);
suf=_59.text;}else{_51=""+_52;}}var p;
var s=(p=_51.match(/^(\s*)/))&&p[0].length;
var e=(p=_51.match(/(\s*)$/))&&p[0].length;
pre=pre+_51.substring(0,s);
suf=_51.substring(_51.length-e,_51.length)+suf;
_51=_51.substring(s,_51.length-e);
if(_51==""){return null;}return {pre:pre,text:_51,suf:suf,pos:pos};}else{alert(_8.badbrowser);
return;}}catch(e){return null;}};
var _5d=function(){if(!_2||navigator.appName.indexOf("Netscape")!=-1&&eval(navigator.appVersion.substring(0,1))<5){alert(_8.badbrowser);
return;}var _5e=function(_5f){alert("Wrong installation (code "+_5f+"). Please reinstall Orphus.");};
var _60=_15();
if(!_60){_5e(1);
return;}if(_60.href.replace(/.*\/\/|\/.*/g,"")!=hq.replace(/.*\/\/|\/.*/g,"")){_5e(2);
return;}var i=null;
for(var n=0;n<_60.childNodes.length;n++){if(_60.childNodes[n].tagName=="IMG"){i=_60.childNodes[n];
break;}}if(!i){_5e(3);
return;}if(!i.alt.match(/orphus/i)){_5e(4);
return;}if(i.width<30&&i.height<10){_5e(5);
return;}if(_60.style.display=="none"||i.style.display=="none"||_60.style.visibility=="hidden"||i.style.visibility=="hidden"){_5e(6);
return;}var _63=_50();
if(!_63){return;}with(_63){pre=pre.substring(pre.length-_6,pre.length).replace(/^\S{1,10}\s+/,"");
suf=suf.substring(0,_6).replace(/\s+\S{1,10}$/,"");}var _64=_4e(_63.pre+_4+_63.text+_5+_63.suf);
if(_64.length>_7){alert(_8.toobig);
return;}_10[_9](_64,function(_65){_20(d.location.href,_63,_65);
_18();});};
var _17=function(e){var _67=0;
var we=w.event;
if(we){_67=we.keyCode==10||(we.keyCode==13&&we.ctrlKey);}else{if(e){_67=(e.which==10&&e.modifiers==2)||(e.keyCode==0&&e.charCode==106&&e.ctrlKey)||(e.keyCode==13&&e.ctrlKey);}}if(_67){_5d();
return false;}};
_13();})();
if(screen.width<1020)
{					
 $("iframe[src^='https://www.youtube.com']" ).wrap( "<div class='videowrapper'> </div>");
}	 

$(document).ready(function() {$("#article").addtocopy()});
	
jQuery.fn.addtocopy = function(usercopytxt) {
    var options = {htmlcopytxt: '<br>Источник: <a href="'+window.location.href+'">'+window.location.href+'</a><br>', minlen: 25, addcopyfirst: false}
    $.extend(options, usercopytxt);
	var copy_sp = document.createElement('span');
	copy_sp.id = 'ctrlcopy';
	copy_sp.style ="color:transparent;height:1px;overflow:hidden;position:absolute;width:1px;";
	copy_sp.innerHTML = options.htmlcopytxt;
	return this.each(function(){
		$(this).mousedown(function(){$('#ctrlcopy').remove();});
		$(this).mouseup(function(){
			if(window.getSelection){	//good times 
				var slcted=window.getSelection();
				var seltxt=slcted.toString();
				if(!seltxt||seltxt.length<options.minlen) return;
				var nslct = slcted.getRangeAt(0);
				seltxt = nslct.cloneRange();
				seltxt.collapse(options.addcopyfirst);
				seltxt.insertNode(copy_sp);
				if (!options.addcopyfirst) nslct.setEndAfter(copy_sp);
				slcted.removeAllRanges();
				slcted.addRange(nslct);
			} else if(document.selection){	//bad times
				var slcted = document.selection;
				var nslct=slcted.createRange();
				var seltxt=nslct.text;
				if (!seltxt||seltxt.length<options.minlen) return;
				seltxt=nslct.duplicate();
				seltxt.collapse(options.addcopyfirst);
				seltxt.pasteHTML(copy_sp.outerHTML);
				if (!options.addcopyfirst) {nslct.setEndPoint("EndToEnd",seltxt); nslct.select();}
			}
		});
  });
}
     