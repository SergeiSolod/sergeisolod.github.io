function t_sldsInit(t,e){var s="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(s){var i=s.querySelector(".t-slds__items-wrapper");if(i)if(!(y=i.getAttribute("data-slider-initialized"))){var r=i.classList.contains("js-feed-container");if(y=s.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)")){var d=y.length,l=y[0],a=y[y.length-1],o=window.innerWidth,n=parseInt(i.getAttribute("data-slider-items-in-row"),10)||0,c=i.getAttribute("data-slider-with-cycle"),u=parseFloat(i.getAttribute("data-slider-transition")),_=i.getAttribute("data-slider-stop"),p=1;if(Array.prototype.forEach.call(y,(function(t,e){t.setAttribute("data-slide-index",e+1)})),u||0===u||(u=300),"true"==_)return!1;isNaN(u)&&i.setAttribute("data-slider-transition","300"),i.classList.contains("t-slds_animated-fast")||i.classList.contains("t-slds_animated-slow")||i.classList.contains("t-slds_animated-none")||i.classList.add("t-slds_animated-fast");var y,m=n;u=!1,_=(0<(_=(y=(t_slds_setItemsInRow(t),t_slds_changeImageUrl(t),window.navigator.userAgent)).indexOf("MSIE"))&&(8!=(y=parseInt(y.substring(_+5,y.indexOf(".",_))))&&9!=y||(u=!0)),!0===u&&(i.classList.remove("t-slds_animated-fast"),i.classList.remove("t-slds_animated-slow"),i.classList.add("t-slds_animated-none"),i.classList.add("t-slds_ie"),i.setAttribute("data-slider-correct-height","true"),i.setAttribute("data-slider-items-in-row",1)),i.setAttribute("data-slider-initialized","true"),i.getAttribute("data-slider-totalslides")||i.setAttribute("data-slider-totalslides",d),i.getAttribute("data-slider-pos"));(l=(0<(_=(0<(y=(_?p=parseInt(_,10):i.setAttribute("data-slider-pos",1),i.setAttribute("data-slider-curr-pos",1),i.setAttribute("data-slider-cycle",""),i.setAttribute("data-slider-animated",""),r||t_slds__createDummies(l,a,i),n=parseInt(i.getAttribute("data-slider-items-in-row"),10)||0,s.querySelectorAll(".t-slds__arrow_wrapper-right"))).length&&Array.prototype.forEach.call(y,(function(t){t.style.display="false"===c&&d-n<=0?"none":""})),r||t_slds_SliderWidth(t),"true"==i.getAttribute("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveSlide(t,p,d),t_slds_ActiveCaption(t,p,d),r?960<o&&("true"===i.getAttribute("data-feeds-posts-loaded")?(t_slds__initFeedsSlider(t,s,e),t_slds_initSliderControls(t,e)):document.addEventListener("feedsLoadPosts",(function(){t_slds__initFeedsSlider(t,s,e),t_slds_initSliderControls(t,e)}))):(u||t_slds_onHammerLoad("Hammer",(function(){t_slds_initSliderSwipe(t,d,o)})),t_slds_initSliderControls(t,e),t_slds_updateSlider(t)),0<i.getAttribute("data-slider-timeout")?t_slds_initAutoPlay(t,p,d,e):i.addEventListener("slideAutoplayTimerReady",(function(){0<i.getAttribute("data-slider-timeout")&&t_slds_initAutoPlay(t,p,d,e)})),s.querySelectorAll(".t-slds__item-loaded").length<d+2&&t_slds_UpdateImages(t,p),"yes"==i.getAttribute("data-slider-arrows-nearpic")&&t_slds_positionArrows(t),s.querySelectorAll(".t-slds"))).length&&Array.prototype.forEach.call(_,(function(t){t.style.visibility=""})),t_slds__setTabindexForFocusableElements(t),s.removeEventListener("displayChanged",t_slds_updateOnDisplayChange),s.addEventListener("displayChanged",t_slds_updateOnDisplayChange(t,m)),r&&(s.removeEventListener("displayChanged",t_slds_updateFeedsSliderOnResize),s.addEventListener("displayChanged",(function(){t_slds_updateFeedsSliderOnResize(t,s,e)}))),window.addEventListener("resize",t_throttle((function(){setTimeout((function(){t_slds_setItemsInRow(t,m),t_slds_updateSlider(t),t_slds_positionArrows(t),r&&t_slds_updateFeedsSliderOnResize(t,s,e)}),100)}))),window.t_slds__isiOS&&"complete"===document.readyState?t_slds__hideMobileSlides(s.querySelector(".t-slds__item_active")):window.t_slds__isiOS&&window.addEventListener("load",(function(){t_slds__hideMobileSlides(s.querySelector(".t-slds__item_active"))})),window.addEventListener("load",(function(){"true"==i.getAttribute("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)})),document.querySelector("#allrecords")))&&l.addEventListener("allRecPaddingInit",(function(){t_slds_updateSlider(t)})),document.removeEventListener("click",t_slds__removeAutoplayByVideo),document.addEventListener("click",t_slds__removeAutoplayByVideo)}}}}function t_slds__removeAutoplayByVideo(t){!(t=t.target.closest("[data-slider-video-type]"))||(t=t.closest(".t-slds__items-wrapper"))&&t.getAttribute("data-slider-interval-id")&&(t.setAttribute("data-slider-stopped","yes"),t.setAttribute("data-slider-stopped-by-video","y"))}function t_slds__initFeedsSlider(t,e){var s=e.querySelector(".t-slds__items-wrapper"),i=e.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),r=s.getAttribute("data-slider-totalslides"),d=i[0],l=(i=i[i.length-1],s.getAttribute("data-slider-with-cycle")),a=(t_slds__createDummies(d,i,s),t_slds_updateSlider(t),parseInt(s.getAttribute("data-slider-items-in-row"),10)||0);0<(d=e.querySelectorAll(".t-slds__arrow_wrapper-right")).length&&Array.prototype.forEach.call(d,(function(t){t.style.display="false"===l&&r-a<=0?"none":""})),"true"==s.getAttribute("data-slider-correct-height")&&t_slds_SliderHeight(t)}function t_slds__createDummies(t,e,s){var i,r,d,l=s.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)").length,a=parseInt(s.getAttribute("data-slider-items-in-row"),10)||0,o=s.getAttribute("data-slider-with-cycle"),n=s.classList.contains("js-feed-container"),c=!1,u=!1;if(!t||(i=t.querySelector('[data-zoomable="yes"]'))&&(c=!0,i.classList.contains("t-zoomable")&&i.classList.remove("t-zoomable"),i.removeAttribute("data-zoomable")),!e||(r=e.querySelector('[data-zoomable="yes"]'))&&(u=!0,r.classList.contains("t-zoomable")&&r.classList.remove("t-zoomable"),r.removeAttribute("data-zoomable")),e&&0==s.querySelectorAll('.t-slds__item[data-slide-index="0"]').length&&((d=e.cloneNode(!0)).setAttribute("data-slide-index","0"),d.setAttribute("aria-hidden","true"),(_=t.parentNode).insertBefore(d,t),0<(d=_.querySelectorAll('[data-slide-index="0"] [field]')).length&&Array.prototype.forEach.call(d,(function(t){t.removeAttribute("field")}))),!n&&t&&!s.querySelector('.t-slds__item[data-slide-index="'+(l+1)+'"]')){var _=t.cloneNode(!0);if(_.setAttribute("data-slide-index",l+1),_.classList.remove("t-slds__item_active"),_.setAttribute("aria-hidden","true"),e.insertAdjacentElement("afterend",_),e.classList.add("t-slds__item-loaded"),0<a&&"true"===o)for(var p=t,y=e,m=0;m<a-1;m++){var f=p.nextElementSibling.cloneNode(!0);f.setAttribute("data-slide-index",l+m+1),y.nextElementSibling.insertAdjacentElement("afterend",f),y=y.nextElementSibling,p=p.nextElementSibling}}c&&(i.classList.add("t-zoomable"),i.setAttribute("data-zoomable","yes")),u&&(r.classList.add("t-zoomable"),r.setAttribute("data-zoomable","yes"))}function t_slds__hideMobileSlides(t){if(t){var e=t.closest(".t-slds__items-wrapper"),s=e&&getComputedStyle(e);if(!s||"scroll"!==s.overflowX||"flex"!==s.display){var i=Array.prototype.slice.call(e.querySelectorAll('.t-slds__item:not(.t-slds__item_dummy):not([aria-hidden="true"])')),r=960<document.documentElement.clientWidth?5:3;if(!(i.length<=2*r)){for(var d=t.getAttribute("data-slide-index"),l=[d=parseInt(d,10)],a=1;a<r;a++)d+a<=i.length?l.push(d+a):l.push(a),0<d-a?l.push(d-a):l.push(i.length+1-a);var o="t-slds__item-innactive";i.forEach((function(t){l.some((function(e){return parseInt(t.getAttribute("data-slide-index"),10)===e}))?t.classList.remove(o):t.classList.add(o)}))}}}}function t_slds_updateOnDisplayChange(t,e){t_throttle((function(){t_slds_setItemsInRow(t,e),t_slds_updateSlider(t),t_slds_positionArrows(t)}))}function t_slds_updateFeedsSliderOnResize(t,e,s){var i=e.querySelector(".t-slds__items-wrapper");i.classList.contains("js-feed-container")&&(960<window.innerWidth?"true"===i.getAttribute("data-feeds-posts-loaded")?(t_slds__initFeedsSlider(t,e,s),t_slds_initSliderControls(t,s)):document.addEventListener("feedsLoadPosts",(function(){t_slds__initFeedsSlider(t,e,s),t_slds_initSliderControls(t,s)})):i.style.transform="translateX(0)")}function t_slds_setItemsInRow(t,e){var s;!(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))||(t=t.querySelector(".t-slds__items-wrapper"))&&(t.getAttribute("data-slider-items-in-row")&&(window.innerWidth<=960&&(s=2),window.innerWidth<=640&&(s=1),960<window.innerWidth&&(s=e)),s&&t.setAttribute("data-slider-items-in-row",s))}function t_slds_initSliderControls(t,e){var s="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(s){var i=s.querySelector(".t-slds__items-wrapper");if(i){var r=i.getAttribute("data-slider-items-in-row")||0,d=s.querySelector(".t-slds__container .t-slds__item"),l=s.querySelector(".t-slds__container");r=(0<r&&d&&l?d:l).offsetWidth;if("true"==i.getAttribute("data-slider-stop"))return!1;i.style.transform="translateX(-"+r+"px)",0<(d=s.querySelectorAll(".t-slds__arrow_wrapper")).length&&Array.prototype.forEach.call(d,(function(r){r.addEventListener("click",(function(){var r=t_slds_getCurrentTranslate(s),d=i.getAttribute("data-slider-animated"),l=parseFloat(i.getAttribute("data-slider-pos")),a=parseFloat(i.getAttribute("data-slider-totalslides")),o=i.getAttribute("data-slider-with-cycle"),n="";""==d&&(i.setAttribute("data-slider-animated","yes"),"left"===this.getAttribute("data-slide-direction")?"false"==o&&1==l?l=1:l--:"false"==o&&l==a?l=a:l++,i.setAttribute("data-slider-pos",l),i.setAttribute("data-slider-cycle",n=l!=a+1&&0!=l?n:"yes"),t_slideMoveWithoutAnimation(t,!1,e,r)),t_slds_updateSlider(t)}))})),0<(l=s.querySelectorAll(".t-slds__bullet")).length&&Array.prototype.forEach.call(l,(function(r){r.addEventListener("click",(function(){var d,l=parseInt(r.getAttribute("data-slide-bullet-for"),10);parseInt(i.getAttribute("data-slider-pos"),10)!==l&&(d=t_slds_getCurrentTranslate(s),i.setAttribute("data-slider-pos",l),t_slideMoveWithoutAnimation(t,!1,e,d),t_slds_updateSlider(t))}))}))}}}function t_slds_animate(t,e,s){var i=performance.now();requestAnimationFrame((function r(d){var l=t(d=1<(d=(d-i)/s)?1:d);e(l),d<1?requestAnimationFrame(r):"y"!==window.lazy&&"yes"!==document.querySelector("#allrecords").getAttribute("data-tilda-lazy")||t_slds_onHammerLoad("t_lazyload_update",(function(){t_lazyload_update()}))}))}function t_slide_MoveAnimation(t,e,s,i){var r,d;t&&(t.style.transition="height ease-in-out .5s, transform ease-in-out 0s",e=-Math.abs(e*s),r=-parseInt(getComputedStyle(t).transform.match(/\d+/)[0]),0!=(d=r-e)&&t_slds_animate((function(t){return t}),(function(e){t.style.transform="translateX("+(r-d*e)+"px)"}),i))}function t_slideMoveWithoutAnimation(t,e,s){var i,r,d,l,a,o,n,c="object"==typeof t?t[0]:document.querySelector("#rec"+t);!c||(i=c.querySelector(".t-slds__items-wrapper"))&&(r=parseFloat(i.getAttribute("data-slider-pos")),d=(0<(i.getAttribute("data-slider-items-in-row")||0)?c.querySelector(".t-slds__container .t-slds__item"):c.querySelector(".t-slds__container")).offsetWidth,parseFloat(i.getAttribute("data-slider-totalslides"))+1<r&&(r=1),(l=i.classList.contains("t-slds_animated-none"))&&(a=c.querySelector(".t-slds__item_active"),o=c.querySelectorAll(".t-slds__item"),a&&0===c.querySelectorAll(".t-slds__item_dummy").length&&((n=a.cloneNode(!0)).classList.add("t-slds__item_dummy"),n.style.position="absolute",n.style.left=d*r+"px",i.appendChild(n),(c.classList.contains("js-product")?c:c.querySelector(".t-store")||c.querySelector(".js-product"))?(t_slds_fadeOut(n,150,(function(){null!==n.parentNode&&n.parentNode.removeChild(n)})),Array.prototype.forEach.call(o,(function(t){t_slds_fadeIn(t,150)}))):(Array.prototype.forEach.call(o,(function(t){t.style.opacity=0})),t_slds_fadeOut(n,400,(function(){null!==n.parentNode&&n.parentNode.removeChild(n)})),setTimeout((function(){Array.prototype.forEach.call(o,(function(t){t_slds_fadeIn(t)}))}),50))),i.classList.add("t-slds_animated-cancel")),t_slideMove(t,e,s),l&&i.classList.remove("t-slds_animated-cancel"))}function t_slideMoveInstantly(t,e,s){var i,r,d,l,a,o="object"==typeof t?t[0]:document.querySelector("#rec"+t);!o||(i=o.querySelector(".t-slds__items-wrapper"))&&(r=parseFloat(i.getAttribute("data-slider-pos")),d=(0<(i.getAttribute("data-slider-items-in-row")||0)?o.querySelector(".t-slds__container .t-slds__item"):o.querySelector(".t-slds__container")).offsetWidth,parseFloat(i.getAttribute("data-slider-totalslides"))+1<r&&(r=1),i.classList.contains("t-slds_animated-none")&&(l=o.querySelector(".t-slds__item_active"))&&0===o.querySelectorAll(".t-slds__item_dummy").length&&((a=l.cloneNode(!0)).classList.add("t-slds__item_dummy"),a.style.position="absolute",a.style.left=d*r+"px",i.appendChild(a),t_slds_fadeOut(a,400,(function(){null!==a.parentNode&&a.parentNode.removeChild(a)}))),i.classList.add("t-slds_animated"),i.classList.add("t-slds_animated-cancel"),t_slideMove(t,e,s),i.classList.remove("t-slds_animated"),i.classList.remove("t-slds_animated-cancel"))}function t_slideMove(t,e,s){var i="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(i){var r=i.querySelector(".t-slds__items-wrapper");if(r){var d,l=i.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),a=r.classList.contains("js-feed-container"),o=parseInt(r.getAttribute("data-slider-items-in-row")||0),n=parseInt(r.getAttribute("data-feed-show-count")||0),c=(0<o?i.querySelector(".t-slds__container .t-slds__item"):i.querySelector(".t-slds__container")).offsetWidth,u=parseFloat(r.getAttribute("data-slider-transition")),_=parseFloat(r.getAttribute("data-slider-pos")),p=parseFloat(r.getAttribute("data-slider-totalslides")),y=(r.getAttribute("data-slider-cycle"),r.classList.contains("t-slds_animated-none")),m=0<r.getAttribute("data-slider-timeout"),f=r.getAttribute("data-slider-stop"),g=i.querySelector(".t-slds__arrow_wrapper-right"),A=i.querySelector(".t-slds__arrow_wrapper-left"),b=("off"===r.getAttribute("aria-live")&&r.setAttribute("aria-live","polite"),0),S=(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||null!==(d=navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/))&&(b=parseInt(d[1],10)),!!navigator.userAgent.match("CriOS"));if(u||0===u||(u=300),p+1<_&&(_=1,r.setAttribute("data-slider-pos",1)),"true"==f)return!1;g&&(a?(d=l[l.length-1],f=parseInt(d.getAttribute("data-slide-index"),10),o<p&&t_slds_fadeIn(g,300),f<p&&0<o&&(_==f-n+1||f===n)?((a=document.createEvent("Event")).initEvent("feedsLastSlide",!0,!0),r.dispatchEvent(a),document.addEventListener("feedsLoadSlide",(function(){t_slds_updateSlider(t)})),t_slds_fadeIn(g,300)):f===p&&_===p-o+1&&t_slds_fadeOut(g,300)):("false"==r.getAttribute("data-slider-with-cycle")&&(_==p||1<o&&_==p-o+1)?t_slds_fadeOut:t_slds_fadeIn)(g,300)),A&&("false"==r.getAttribute("data-slider-with-cycle")&&1==_?t_slds_fadeOut:t_slds_fadeIn)(A,300),r.classList.add("t-slds_animated"),13<=b&&S&&!y?t_slide_MoveAnimation(r,_,c,u):r.style.transform="translateX(-"+c*_+"px)",setTimeout((function(){r.classList.remove("t-slds_animated"),r.setAttribute("data-slider-animated",""),"yes"==r.getAttribute("data-slider-cycle")&&(0==(_=_==p+1?1:_)&&(_=p),13<=b&&S&&!y?t_slide_MoveAnimation(r,_,c,0):r.style.transform="translateX(-"+c*_+"px)",!0!==y&&t_slds_ActiveSlide(t,_,p,s),r.setAttribute("data-slider-pos",_)),("y"===window.lazy||document.querySelector("#allrecords")&&"yes"===document.querySelector("#allrecords").getAttribute("data-tilda-lazy"))&&t_slds_onHammerLoad("t_lazyload_update",(function(){t_lazyload_update()})),!e&&m&&t_slds_initAutoPlay(t,_,p,s)}),u),t_slds_ActiveBullet(t,_,p,s),t_slds_ActiveSlide(t,_,p),"true"==r.getAttribute("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveCaption(t,_,p),i.querySelectorAll(".t-slds__item-loaded").length<p+2&&t_slds_UpdateImages(t,_),r.getAttribute("data-slider-curr-pos",_)}}}function t_slds_updateSlider(t){var e,s,i,r,d,l,a="object"==typeof t?t[0]:document.querySelector("#rec"+t);a&&(t_slds_SliderWidth(t),(e=a.querySelector(".t-slds__items-wrapper"))&&(s=e.getAttribute("data-slider-items-in-row")||0,i=a.querySelector(".t-slds__container .t-slds__item"),r=a.querySelector(".t-slds__container"),i=(0<s&&r&&i?i:r).offsetWidth,r=parseInt(e.getAttribute("data-slider-pos"),10),d=parseInt(e.getAttribute("data-slider-totalslides"),10),l=e.getAttribute("data-slider-with-cycle"),a=a.querySelector(".t-slds__arrow_wrapper-right"),d+1<r&&e.setAttribute("data-slider-pos",r=1),a&&(a.style.display="false"===l&&(d-s<=0||r===d)?"none":""),e.style.transform="translateX(-"+i*r+"px)","true"==e.getAttribute("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)))}function t_slds_UpdateImages(t,e){!(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))||(t=t.querySelector('.t-slds__item[data-slide-index="'+e+'"]'))&&(t.classList.add("t-slds__item-loaded"),t.nextElementSibling&&t.nextElementSibling.classList.add("t-slds__item-loaded"),t.previousElementSibling&&t.previousElementSibling.classList.add("t-slds__item-loaded"))}function t_slds_ActiveCaption(t,e,s){var i,r;(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&(i=t.querySelectorAll(".t-slds__caption"),r=t.querySelector('.t-slds__caption[data-slide-caption="'+e+'"]'),Array.prototype.forEach.call(i,(function(t){t.classList.remove("t-slds__caption-active")})),0==e?r=t.querySelector('.t-slds__caption[data-slide-caption="'+s+'"]'):e==s+1&&(r=t.querySelector('.t-slds__caption[data-slide-caption="1"]')),r&&r.classList.add("t-slds__caption-active"))}function t_slds_scrollImages(t,e){(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&(e=(e<0?"":"-")+Math.abs(e).toString(),t.querySelector(".t-slds__items-wrapper").style.transform="translateX("+e+"px)")}function t_slds_ActiveBullet(t,e,s,i){i&&i.thumbsbulletGallery&&(r=parseInt(i.storeOptions.popup_opts.columns),l=+i.storeOptions.slider_slidesOpts.ratio,r=t_store_prodPopup_gallery_calcMaxThumbsCount(r,l,60,10));var r,d,l="object"==typeof t?t[0]:document.querySelector("#rec"+t);l&&(t=l.querySelectorAll(".t-slds__bullet"),d=l.querySelector('.t-slds__bullet[data-slide-bullet-for="'+e+'"]'),Array.prototype.forEach.call(t,(function(t){t.classList.remove("t-slds__bullet_active")})),i&&i.thumbsbulletGallery&&r<=e&&e!=s+1||r<=s&&0==e?d=l.querySelector('.t-slds__bullet[data-slide-bullet-for="'+r+'"]'):0==e?d=l.querySelector('.t-slds__bullet[data-slide-bullet-for="'+s+'"]'):e==s+1&&(d=l.querySelector('.t-slds__bullet[data-slide-bullet-for="1"]')),d&&d.classList.add("t-slds__bullet_active"))}function t_slds_ActiveSlide(t,e,s){var i,r,d,l,a,o="object"==typeof t?t[0]:document.querySelector("#rec"+t);o&&(d=o.querySelector(".t-slds__items-wrapper"),i=o.querySelectorAll(".t-slds__item"),r=o.querySelector('.t-slds__item[data-slide-index="'+e+'"]'),d=!!d&&d.classList.contains("t-slds_animated-none"),a=o.querySelectorAll("iframe"),l=o.querySelectorAll("video"),Array.prototype.forEach.call(a,(function(t){t.src&&(-1!==t.src.indexOf("&enablejsapi=1")&&t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1===t.src.indexOf("vimeo")||-1===t.src.indexOf("&amp;api=1")&&-1===t.src.indexOf("&api=1")||t.contentWindow.postMessage('{"method":"pause","value":"true"}',"*"))})),Array.prototype.forEach.call(l,(function(t){t.pause()})),Array.prototype.forEach.call(i,(function(t){t.classList.remove("t-slds__item_active")})),0==e&&!1===d?o.querySelector('.t-slds__item[data-slide-index="'+s+'"]').classList.add("t-slds__item_active"):0==e&&!0===d?r=o.querySelector('.t-slds__item[data-slide-index="'+s+'"]'):e==s+1&&!1===d?(a=o.querySelector('.t-slds__item[data-slide-index="1"]'))&&a.classList.add("t-slds__item_active"):e==s+1&&!0===d&&(r=o.querySelector('.t-slds__item[data-slide-index="1"]')),r&&r.classList.add("t-slds__item_active"),window.t_slds__isiOS&&t_slds__hideMobileSlides(r),t_slds__setTabindexForFocusableElements(t))}function t_slds__setTabindexForFocusableElements(t){var e,s;(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&(e=t.querySelector(".t-slds__items-wrapper"),(t=t.querySelector(".t-slds__item_active"))&&(s=e.querySelectorAll(e='a, button, input:not([type="hidden"]), select, textarea, video, iframe'),Array.prototype.forEach.call(s,(function(t){t.setAttribute("tabindex","-1")})),s=t.querySelectorAll(e),Array.prototype.forEach.call(s,(function(t){t.setAttribute("tabindex","0")}))))}function t_slds_SliderWidth(t){if((t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&(i=t.querySelector(".t-slds__container"))){var e=parseInt(getComputedStyle(i).paddingLeft)||0,s=parseInt(getComputedStyle(i).paddingRight)||0,i=i.clientWidth-(e+s),r=(e=t.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)").length,0);if(s=t.querySelector(".t-slds__items-wrapper")){var d=s.getAttribute("data-slider-stop");r=s.getAttribute("data-slider-items-in-row");if("true"==d)return!1;s.style.width=i*e+"px"}window.innerWidth<=640?r=1:window.innerWidth<=960&&1<r&&(r=2);var l=1<r?i/r:i;0<l&&(d=t.querySelectorAll(".t-slds__item"),s&&(d=s.querySelectorAll(".t-slds__item")),Array.prototype.forEach.call(d,(function(t){t.style.width=l+"px"})))}}function t_slds_SliderHeight(t){var e,s,i,r;!(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))||(e=t.querySelector('.t-slds__items-wrapper:not([data-slider-correct-height="false"])'))&&(s=e.classList.contains("js-feed-container"),(t=t.querySelector(".t-slds__item_active"))&&(r=parseInt(getComputedStyle(t).paddingTop)||0,i=parseInt(getComputedStyle(t).paddingBottom)||0,r=t.clientHeight-(r+i)),r&&e&&(e.style.height=s?"":r+"px"))}function t_slds_UpdateSliderHeight(t){var e,s,i,r;!(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))||(e=t.querySelector('.t-slds__items-wrapper:not([data-slider-correct-height="false"])'))&&(s=e.classList.contains("js-feed-container"),(t=t.querySelector(".t-slds__item_active"))&&(r=parseInt(getComputedStyle(t).paddingTop)||0,i=parseInt(getComputedStyle(t).paddingBottom)||0,r=t.clientHeight-(r+i)),0!==r&&e&&(e.style.height=s?"":r+"px"))}function t_slds_SliderArrowsHeight(t){var e,s,i,r,d;(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&((d=t.querySelector(".t-slds__item_active"))&&(s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e=0,d.querySelector("[data-slider-video-type]")&&s&&(e=40),s=parseInt(getComputedStyle(d).paddingTop)||0,i=parseInt(getComputedStyle(d).paddingBottom)||0,r=d.clientHeight-(s+i)-e),d=t.querySelectorAll(".t-slds__arrow_wrapper"),r&&0<d.length&&Array.prototype.forEach.call(d,(function(t){t.style.height=r+"px",(t=t.querySelector(".t-slds__arrow"))&&(t.style.marginTop=e/2+"px")})))}function t_slds_UpdateSliderArrowsHeight(t){var e,s,i,r,d;(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&((d=t.querySelector(".t-slds__item_active"))&&(s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e=0,d.querySelector("[data-slider-video-type]")&&s&&(e=40),s=parseInt(getComputedStyle(d).paddingTop)||0,i=parseInt(getComputedStyle(d).paddingBottom)||0,r=d.clientHeight-(s+i)-e),d=t.querySelectorAll(".t-slds__arrow_wrapper"),r&&0<d.length&&Array.prototype.forEach.call(d,(function(t){t.style.height=r+"px",(t=t.querySelector(".t-slds__arrow"))&&(t.style.marginTop=e/2+"px")})))}function t_slds_initAutoPlay(t,e,s,i){var r="object"==typeof t,d=r?t[0]:document.querySelector("#rec"+t);if(d){var l=d.querySelector(".t-slds"),a=d.querySelector(".t-slds__items-wrapper");if(a){var o=parseFloat(a.getAttribute("data-slider-timeout")),n="",c=a.getAttribute("data-slider-stop");if((y=a.getAttribute("data-slider-interval-id"))&&clearInterval(y),"true"==c)return!1;!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&l&&(l.addEventListener("mouseover",(function(){a.setAttribute("data-slider-stopped","yes")})),l.addEventListener("mouseout",(function(){"y"!==a.getAttribute("data-slider-stopped-by-video")&&a.setAttribute("data-slider-stopped","")})));var u,_,p=d.getBoundingClientRect().top+window.pageYOffset,y=(d.offsetHeight,window.addEventListener("resize",t_throttle((function(){p=d.getBoundingClientRect().top+window.pageYOffset,d.offsetHeight}))),void 0!==document.hidden?(u="hidden",_="visibilitychange"):void 0!==document.msHidden?(u="msHidden",_="msvisibilitychange"):void 0!==document.webkitHidden&&(u="webkitHidden",_="webkitvisibilitychange"),document.addEventListener(_,(function(){var t,e,s;document[u]?a.setAttribute("data-slider-stopped","yes"):(t=getComputedStyle(d).display,s=(e=window.pageYOffset)+window.innerHeight,e<(p=d.getBoundingClientRect().top+window.pageYOffset)+d.offsetHeight&&p<s&&"none"!==t&&"y"!==a.getAttribute("data-slider-stopped-by-video")&&a.setAttribute("data-slider-stopped",""))}),!1),1===d.length&&window.bind("scroll",t_throttle((function(){var t=getComputedStyle(d).display,e=window.pageYOffset,s=e+window.innerHeight;"none"!==t?e<(p=d.getBoundingClientRect().top+window.pageYOffset)+d.offsetHeight&&p<s&&"y"!==a.getAttribute("data-slider-stopped-by-video")?a.setAttribute("data-slider-stopped",""):""===a.getAttribute("data-slider-stopped")&&a.setAttribute("data-slider-stopped","yes"):r||a.setAttribute("data-slider-stopped","yes")}))),setInterval((function(){var r=a.getAttribute("data-slider-stopped"),l=a.getAttribute("data-slider-autoplay-ignore-hover"),o=a.getAttribute("data-slider-touch"),c=t_slds_getCurrentTranslate(d);"yes"!=r&&"yes"!=l&&"yes"!=o&&("false"==a.getAttribute("data-slider-with-cycle")&&e==s?e=s:e++,a.setAttribute("data-slider-pos",e),e!=s+1&&0!=e||(n="yes"),t_slideMoveWithoutAnimation(t,!0,i,c),t_slds_updateSlider(t),"yes"==n&&(0==(e=e==s+1?1:e)&&(e=s),a.setAttribute("data-slider-pos",e)),a.setAttribute("data-slider-cycle",n))}),o));a.setAttribute("data-slider-interval-id",y)}}}function t_slds_positionArrows(t){var e,s,i;(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&(e=t.querySelector(".t-slds__arrow_container-outside"),(s=t.querySelector(".t-slds__item"))&&(s=s.offsetWidth,i=t.querySelector(".t-slds__arrow-left")?t.querySelector(".t-slds__arrow-left").offsetWidth:0,t=t.querySelector(".t-slds__arrow-right")?t.querySelector(".t-slds__arrow-right").offsetWidth:0,e&&(e.style.maxWidth=i+t+s+120+"px")))}function t_slds_initSliderSwipe(t,e,s,i){var r="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(r){var d=r.querySelector(".t-slds__main");if(d){var l=r.querySelector(".t-slds__items-wrapper");if(l){var a,o=l.getAttribute("data-slider-stop"),n=l.getAttribute("data-swiper-initialized"),c=!1,u=!1;if("true"==o)return!1;if("true"==n)return!1;function _(t){window.pageYOffset>r.getBoundingClientRect().bottom+window.pageYOffset||window.pageYOffset+document.documentElement.clientHeight<r.getBoundingClientRect().top+window.pageYOffset?l.setAttribute(t,"yes"):"y"!==l.getAttribute("data-slider-stopped-by-video")&&l.setAttribute(t,"")}delete Hammer.defaults.cssProps.userSelect,hammer=new Hammer(d,{domEvents:!0,inputClass:Hammer.TouchInput,recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),l.setAttribute("data-swiper-initialized","true");var p="ontouchend"in document?"data-slider-touch":"data-slider-stopped";if("IntersectionObserver"in window?new IntersectionObserver((function(t){t=t[0],l.setAttribute(p,t.isIntersecting?"":"yes")})).observe(r):(_(p),window.addEventListener("scroll",(function(){c=!0,clearTimeout(a),a=setTimeout((function(){_(p),c=!1}),250)}))),1==e)return!1;function y(t){if(u)return t.preventDefault(),!1}window.removeEventListener("touchmove",y,{passive:!1}),window.addEventListener("touchmove",y,{passive:!1}),hammer.on("pan",(function(e){if(c)return!1;u=!0;var s=r.querySelector(".t-slds__items-wrapper"),d=s.getAttribute("data-slider-items-in-row")||0,l=1<d,a=(l?r.querySelector(".t-slds__container .t-slds__item"):r.querySelector(".t-slds__container")).offsetWidth,o=parseFloat(s.getAttribute("data-slider-pos")),n=parseFloat(s.getAttribute("data-slider-totalslides")),_="",p=e.deltaX,y=100/n*e.deltaX/window.innerWidth;if("true"==s.getAttribute("data-slider-stop"))return!1;s.setAttribute("data-slider-touch","yes"),t_slds_scrollImages(t,a*o-p),e.isFinal&&(.4<e.velocityX?("false"==s.getAttribute("data-slider-with-cycle")&&1==o?o=1:o--,s.setAttribute("data-slider-pos",o),s.setAttribute("data-slider-cycle",_=0==o?"yes":_)):e.velocityX<-.4?("false"==s.getAttribute("data-slider-with-cycle")&&(o==n||l&&o==n-d+1)?o=l?n-d:n:(p=(a=r.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"))[a.length-1],(e=parseFloat(p.getAttribute("data-slide-index"),10))<n&&o==e&&((a=document.createEvent("Event")).initEvent("feedsLastSlide",!0,!0),s.dispatchEvent(a),document.addEventListener("feedsLoadSlide",(function(){t_slds_updateSlider(t)}))),o++),s.setAttribute("data-slider-pos",o),s.setAttribute("data-slider-cycle",_=o==n+1?"yes":_)):y<=-30/n?("false"==s.getAttribute("data-slider-with-cycle")&&(o==n||l&&o==n-d+1)?o=l?n-d:n:o++,s.setAttribute("data-slider-pos",o),s.setAttribute("data-slider-cycle",_=o==n+1?"yes":_)):30/n<=y&&("false"==s.getAttribute("data-slider-with-cycle")&&1==o?o=1:o--,s.setAttribute("data-slider-pos",o),s.setAttribute("data-slider-cycle",_=0==o?"yes":_)),t_slideMove(t,!1,i),s.setAttribute("data-slider-touch",""),u=!1)})),hammer.on("panend",(function(){t_slideMove(t,!1,i),u=!1}))}}}}function t_slds_getCurrentTranslate(t){if((t=t.querySelector(".t-slds__items-wrapper"))&&void 0!==(t=getComputedStyle(t).transform)&&""!==t&&null!==(t=t.match(/\d+/g)))return parseInt(t[0],10)}function t_slds_changeImageUrl(t){var e=(e=document.getElementById("allrecords"))&&"yes"===e.getAttribute("data-tilda-lazy");(t="object"==typeof t?t[0]:document.querySelector("#rec"+t))&&(e=e?t.querySelectorAll(".t-slds__img:not([data-original])"):t.querySelectorAll(".t-slds__img"),Array.prototype.forEach.call(e,(function(t){var e=t.getAttribute("data-src");e&&(t.setAttribute("src",e),t.removeAttribute("data-src"))})))}function t_slds_onHammerLoad(t,e,s){var i;"function"==typeof window[t]?e():(i=Date.now(),setTimeout((function r(){var d=Date.now();if("function"==typeof window[t])e();else{if(7e3<d-i)throw new Error(t+" is undefined");setTimeout(r,s||100)}})))}function t_slds_fadeOut(t,e,s){var i,r;"none"===t.style.display||t.getAttribute("data-fadeout-timeout")||(i=1,e=0<(e=parseInt(e))?e/10:40,r=setInterval((function(){t.style.opacity=i,(i-=.1)<=.1&&(clearInterval(r),t.removeAttribute("data-fadeout-timeout"),t.style.display="none","function"==typeof s&&s())}),e),t.setAttribute("data-fadeout-timeout",r))}function t_slds_fadeIn(t,e,s){var i,r;("1"===getComputedStyle(t).opacity||""===getComputedStyle(t).opacity)&&"none"!==getComputedStyle(t).display||t.getAttribute("data-fadein-timeout")||(e=(i=0)<(e=parseInt(e))?e/10:40,t.style.opacity=i,t.style.display="block",r=setInterval((function(){t.style.opacity=i,1<=(i+=.1)&&(clearInterval(r),t.removeAttribute("data-fadein-timeout"),"function"==typeof s&&s())}),e),t.setAttribute("data-fadein-timeout",r))}window.t_slds__isiOS=/iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.userAgent.indexOf("Macintosh")&&"ontouchend"in document;