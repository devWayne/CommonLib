/*
 * stickyNavbar.js v1.1.3
 * https://github.com/jbutko/stickyNavbar.js
 * Fancy sticky navigation jQuery plugin with smart anchor links highlighting
 *
 * Developed and maintenained under MIT licence by Jozef Butko - www.jozefbutko.com
 * http://www.opensource.org/licenses/MIT

 * Original jquery-browser code Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * CREDITS:
 * Daniel Eden for Animate.CSS:
 * http://daneden.github.io/animate.css/
 * jQuery easing plugin:
 * http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * COPYRIGHT (C) 2014 Jozef Butko
 * https://github.com/jbutko
 * LAST UPDATE: 20/09/2014
 *
 */
!function(i,s,t){"use strict";i.fn.stickyNavbar=function(a){var e=i.extend({activeClass:"active",sectionSelector:"scrollto",animDuration:350,startAt:0,easing:"swing",animateCSS:!0,animateCSSRepeat:!1,cssAnimation:"fadeInDown",jqueryEffects:!1,jqueryAnim:"slideDown",selector:"a",mobile:!1,mobileWidth:480,zindex:9999,stickyModeClass:"sticky",unstickyModeClass:"unsticky"},a),n=i("."+e.sectionSelector);return this.each(function(){var a=i(this),o=a.css("position"),r=a.css("zIndex"),l=a.outerHeight(!0),d=a.offset().top-l,c="auto"===a.css("top")?0:a.css("top"),m=a.find("a"===e.selector?"li a":"li"),p=(a.find("li a[href*=#]"),i(s).scrollTop()),f=0;m.click(function(t){var n=i(this).attr("href");if("http"===n.substring(0,4)||"mailto:"===n.substring(0,7))return!0;p=i(s).scrollTop();var o=m.index(this),r=n;++f,"0"===o&&(f=0),t.preventDefault(),1===f&&a.offset().top>d?i("html, body").stop().animate({scrollTop:i(r).offset().top-2*l+2+"px"},{duration:e.animDuration,easing:e.easing}):1===f||a.offset().top===d||0===o?i("html, body").stop().animate({scrollTop:i(r).offset().top-2*l+2+"px"},{duration:e.animDuration,easing:e.easing}):2===f&&a.offset().top<d?i("html, body").stop().animate({scrollTop:i(r).offset().top+2+"px"},{duration:e.animDuration,easing:e.easing}):d>p?i("html, body").stop().animate({scrollTop:i(r).offset().top-2*l+2+"px"},{duration:e.animDuration,easing:e.easing}):i("html, body").stop().animate({scrollTop:i(r).offset().top-l+2+"px"},{duration:e.animDuration,easing:e.easing})});var u=function(){var p=i(s),f=p.scrollTop(),u=p.width(),C=p.height();return!e.mobile&&u<e.mobileWidth?void a.css("position",o):(m.removeClass(e.activeClass),n.each(function(){var s=i(this).offset().top-l,t=i(this).outerHeight(!0)+s;f>=s&&t>=f&&("a"===e.selector?a.find('li a[href~="#'+this.id+'"]').addClass(e.activeClass):a.find('li a[href~="#'+this.id+'"]').parent().addClass(e.activeClass))}),f>=d+e.startAt-l?(a.removeClass(e.unstickyModeClass).addClass(" "+e.stickyModeClass),a.css({position:"fixed",zIndex:e.zindex}).stop(),e.jqueryEffects?(e.animateCSSRepeat||a.hide().stop()[e.jqueryAnim](e.animDuration,e.easing),a.hide().stop()[e.jqueryAnim](e.animDuration,e.easing)):e.animateCSS?e.animateCSSRepeat?a.addClass(e.cssAnimation+" animated").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",function(){a.removeClass(e.cssAnimation+" animated")}):a.addClass(e.cssAnimation+" animated").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd"):a.stop()):a.css({position:e.$selfPosition,zIndex:r}).removeClass(e.stickyModeClass).addClass(" "+e.unstickyModeClass),p.scrollTop()+C>=i(t).height()&&m.removeClass(e.activeClass).last().addClass(e.activeClass),void(d-2>=f&&(a.removeClass(e.cssAnimation+" animated"),e.jqueryEffects?(0===f&&m.removeClass(e.activeClass),f>=d?a.css({position:"fixed",zIndex:e.zindex}).hide().stop()[e.jqueryAnim](e.animDuration,e.easing):a.css({position:o,zIndex:e.zindex})):(0===f&&m.removeClass(e.activeClass),a.css({position:o,top:c}).stop().animate({top:c},e.animDuration,e.easing)))))};i(s).scroll(u),i(s).ready(u),i(s).resize(u)})}}(jQuery,window,document);