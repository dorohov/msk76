$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?a<200&&o.removeClass("active"):a>200&&o.addClass("active")});
var topPos=$(document).scrollTop(),snb=$(".navbar-site.scroll");snb.hasClass("scroll-navbar")?topPos<500&&snb.removeClass("scroll-navbar"):topPos>500&&snb.addClass("scroll-navbar"),snb.hasClass("opacity")?topPos<200&&snb.removeClass("opacity"):topPos>200&&snb.addClass("opacity"),snb.hasClass("fixed")?topPos<400&&snb.removeClass("fixed"):topPos>400&&snb.addClass("fixed");
!function(){$(".class-for-value").html($(document).scrollTop())}();