jQuery((function(){$(window).scrollTop()>="250"&&$("#ToTop").fadeIn("slow"),$(window).scroll((function(){$(window).scrollTop()<="250"?$("#ToTop").fadeOut("slow"):$("#ToTop").fadeIn("slow")})),$(window).scrollTop()<=$(document).height()-"999"&&$("#OnBottom").fadeIn("slow"),$(window).scroll((function(){$(window).scrollTop()>=$(document).height()-"999"?$("#OnBottom").fadeOut("slow"):$("#OnBottom").fadeIn("slow")})),$("#ToTop").click((function(){$("html,body").animate({scrollTop:0},"slow")})),$("#OnBottom").click((function(){$("html,body").animate({scrollTop:$(document).height()},"slow")}))}));
//# sourceMappingURL=index.30998ad6.js.map
