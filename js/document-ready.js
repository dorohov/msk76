"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1025},e.screenIs=function(){var t="noname";return e.isXS()?t="xs":e.isSM()?t="sm":e.isMD()?t="md":e.isMDH()?t="md-h":e.isLG()?t="lg":e.isXL()?t="xl":e.isXXL()?t="xxl":e.device()&&(t="device"),t},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var t="noname";return e.isPortrait()?t="portrait":e.isLandscape()&&(t="landscape"),t},e.is=function(t){return t==e.screenIs()||t==e.orientationIs()},e.onResize=function(t,n){if(t.type){var o=e.__resizefunctions[t.type];t.orientation?o[t.orientation].push(n):o.default.push(n)}},e.resizeCall=function(t){if(t.type){if(e.__resizefunctions[t.type].default)for(var n=0;n<e.__resizefunctions[t.type].default.length;n++){var o=e.__resizefunctions[t.type].default[n];o(t)}if(e.__resizefunctions[t.type][t.orientation])for(var n=0;n<e.__resizefunctions[t.type][t.orientation].length;n++){var o=e.__resizefunctions[t.type][t.orientation][n];o(t)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,t,n,o,s){console.log("Error FECSS: "+t+":"+n+":"+o+": "+JSON.stringify(e)+"\n"+JSON.stringify(s))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var t=jQuery.fn.addClass,n=jQuery.fn.removeClass,o=jQuery.fn.toggleClass;e.fn.addClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["add"]),n},e.fn.removeClass=function(){var t=n.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),t},e.fn.toggleClass=function(){var t=o.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),t}}(jQuery),!function(){$(window).load(function(){$("[data-toggle-nav]").click(function(){var e=$(this).data("toggle-nav");$(e).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var e=$(this).data("collapse-nav");$(e).toggleClass("open")}),$("[data-body]").click(function(){var e=$(this).data("body");$(e).toggleClass("open-navbar")})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var t=(new Date).getTime();$(document.body).attr("data-created_at",t)}),$(document.body).on("fecss.window.unload",null,{},function(e,t){console.log("body trigger:fecss.window.unload: "+JSON.stringify(t))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,t){console.log("body trigger:fecss.keydown: "+JSON.stringify(t))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,t){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$(".page-loader").removeClass("active")}),$(document.body).on("changeClass",null,{},function(e,t){$(function(){})}),$(function(){var e="noname-browser",t=navigator.userAgent.toLowerCase();t.indexOf("msie")!=-1&&(e="msie"),t.indexOf("trident")!=-1&&(e="msie"),t.indexOf("konqueror")!=-1&&(e="konqueror"),t.indexOf("firefox")!=-1&&(e="firefox"),t.indexOf("safari")!=-1&&(e="safari"),t.indexOf("chrome")!=-1&&(e="chrome"),t.indexOf("chromium")!=-1&&(e="chromium"),t.indexOf("opera")!=-1&&(e="opera"),t.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$(document.body).on("click.fecss.go-to-top",".go-to-top",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},777)}),$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(document.body).on("click.fecss",".page-loader.active ._czr__preloader-process-container ._czr__preloader-process-level",function(e){e.preventDefault(),$(".page-loader").data("window-can-close-it",!0).data("counter-can-close-it",!0).trigger("fecss.can-close-it")}),$(document.body).on("fecss.can-close-it",".page-loader",function(e){e.preventDefault();var t=$(this);t.data("counter-can-close-it")&&t.data("window-can-close-it")&&setTimeout(function(){t.removeClass("active")},85)}),$(window).load(function(e){$(".page-loader").data("window-can-close-it",!0).trigger("fecss.can-close-it"),$(".page-loader ._czr__preloader-process-container ._czr__preloader-process-level").data("fast-page-loading",!0)}),$(function(){var e=$(".page-loader.active"),t=$("._czr__preloader-process-container ._czr__preloader-process-level",e).eq(0);if(t.size()){var n=0;t.css({width:n+"%"}).attr("data-pos",n);var o=setInterval(function(){var e=Math.random();e>.5&&n<100?(n++,$("._azbn__preloader-percent").text(n),t.data("fast-page-loading")&&(n+=9),t.css({width:n+"%"}).attr("data-pos",n)):n>99&&(clearInterval(o),$(".page-loader").data("counter-can-close-it",!0).trigger("fecss.can-close-it"))},40)}}),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".project-step-panel__item-note ul").addClass("ul-site");var e=window.location.pathname;$('.navbar-nav a[href="'+e+'"]').parent().addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$("#tabs li").eq(0).on("click",function(){$(this).parent().removeClass("off").addClass("on"),$(this).closest("._iab__backlight").removeClass("off").addClass("on")}),$("#tabs li").eq(1).on("click",function(){$(this).parent().removeClass("on").addClass("off"),$(this).closest("._iab__backlight").removeClass("on").addClass("off")}),$(".btn-journal").on("click",function(){$(this).toggleClass("is-active"),$("._dipc__journal-list").toggleClass("is-visible")}),retinajs(),!function(){$(document.body).on("click.azbn",".azbn-floor-content svg .floor-polygon",{},function(e){e.preventDefault();var t=$(this),n=t.attr("data-link")||"",o=parseInt(t.attr("data-flat_id"))||0,s=$(".azbn-floor-content").attr("data-base-url")||"";""!=n?window.location.href=n:window.location.href=s+o}),$(".azbn-floor-content").trigger("azbn.azbn-floor-content.setStatus",[0,0])}(),!function(){var e;$(document.body).on("azbn.azbn-layouts-content.hide",".azbn-layouts-content",{},function(e){e.preventDefault();var t=$(this),n=t.find(".azbn-layout-note"),o=t.find(".azbn-layout-panel");o.toggleClass("is-visible is-hidden"),n.toggleClass("is-hidden is-visible"),t.attr("data-status",0)}),$(document.body).on("azbn.azbn-layouts-content.setStatus",".azbn-layouts-content",{},function(t,n,o,s,a,i,r){t.preventDefault();var l=$(this),d=l.find(".azbn-layout-note"),c=l.find(".azbn-layout-panel"),w=parseInt(l.attr("data-status"))||0;window.clearTimeout(e),n?(c.find(".azbn-num").html(o),c.find(".azbn-qty").html(s),c.find(".azbn-qty-one").html(a),c.find(".azbn-qty-two").html(i),c.find(".azbn-qty-three").html(r),0==w&&(c.toggleClass("is-visible is-hidden"),d.toggleClass("is-hidden is-visible "))):(c.toggleClass("is-visible is-hidden"),d.toggleClass("is-hidden is-visible ")),l.attr("data-status",n)}),$(document.body).on("mouseenter.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(e){e.preventDefault();var t=$(this),n=parseInt(t.attr("data-floor"))||0,o=parseInt(t.attr("data-qty"))||0,s=parseInt(t.attr("data-qty-one"))||0,a=parseInt(t.attr("data-qty-two"))||0,i=parseInt(t.attr("data-qty-three"))||0;$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.setStatus",[1,n,o,s,a,i])}),$(document.body).on("mouseleave.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(t){t.preventDefault();var n=$(this);parseInt(n.attr("data-floor"))||0,e=setTimeout(function(){$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.hide")},250)}),$(document.body).on("click.azbn",".azbn-layouts-content svg.layout-svg .layout-polygon",{},function(e){e.preventDefault();var t=$(this),n=t.attr("data-link")||"",o=parseInt(t.attr("data-floor-id"))||0,s=$(".azbn-layouts-content").attr("data-base-url")||"";""!=n?window.location.href=n:window.location.href=s+o}),$(".azbn-layouts-content").trigger("azbn.azbn-layouts-content.setStatus",[0,0])}(),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},t={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},n="window-width",o="window-height",s=$(window).outerWidth(!0),a=$(window).outerHeight(!0),i=$("html body").eq(0);s<e.xs.max&&(i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),n="window-width-xs"),s>e.sm.min&&s<e.sm.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),n="window-width-sm"),s>e.md.min&&s<e.md.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),n="window-width-md"),s>e.lg.min&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),n="window-width-lg"),a<t.xs.max&&(i.hasClass("window-height-sm")&&i.removeClass("window-height-sm"),i.hasClass("window-height-md")&&i.removeClass("window-height-md"),i.hasClass("window-height-lg")&&i.removeClass("window-height-lg"),o="window-height-xs"),a>t.sm.min&&a<t.sm.max&&(i.hasClass("window-height-xs")&&i.removeClass("window-height-xs"),i.hasClass("window-height-md")&&i.removeClass("window-height-md"),i.hasClass("window-height-lg")&&i.removeClass("window-height-lg"),o="window-height-sm"),a>t.md.min&&a<t.md.max&&(i.hasClass("window-height-xs")&&i.removeClass("window-height-xs"),i.hasClass("window-height-sm")&&i.removeClass("window-height-sm"),i.hasClass("window-height-lg")&&i.removeClass("window-height-lg"),o="window-height-md"),a>t.lg.min&&(i.hasClass("window-height-xs")&&i.removeClass("window-height-xs"),i.hasClass("window-height-sm")&&i.removeClass("window-height-sm"),i.hasClass("window-height-md")&&i.removeClass("window-height-md"),o="window-height-lg"),$("html body").eq(0).addClass(n).addClass(o)});var t=$(window).height(),n=($(window).width(),$(".navbar-site").outerHeight(!0)),o=($(".header-site").outerHeight(!0),$(".heading-site").outerHeight(!0)),s=($(".news-item__preview").outerWidth(!0),$(".news-block").outerHeight(!0),$(".footer-site").outerHeight(!0)),a=t-n-s-o,i=t-n-s,r=t-n;device.mobile()?$(".layouts-page-content").css("min-height",r):($(".twoGIS-map__block").css("height",a),$(".twoGIS-map__block").css("height",a)),device.mobile()||device.tablet()?($("._ifbc__btn-block").appendTo($("._ifb__complex")),$(".bg-element").remove()):($(".content-block.second").css("min-height",i),$(".floor-page-content").css("height",i),$(".layouts-page-content").css("height",i)),device.tablet()&&$(".layouts-page-content").css("height",i)}).trigger("resize"),$(window).on("scroll",function(e){$(function(){var e=$(document).scrollTop(),t=$(".go-to-top");t.hasClass("active")?e<200&&t.removeClass("active"):e>200&&t.addClass("active")}),$(".page-id-6 .navbar-site").addClass("scroll");var t=$(document).scrollTop(),n=$(".page-id-6 .navbar-site.scroll");n.hasClass("scroll-navbar")?t<500&&n.removeClass("scroll-navbar"):t>500&&n.addClass("scroll-navbar"),n.hasClass("opacity")?t<200&&n.removeClass("opacity"):t>200&&n.addClass("opacity"),n.hasClass("fixed")?t<400&&n.removeClass("fixed"):t>400&&n.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});