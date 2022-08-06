$(".navbar-links a").click(function() {
    $(".navbar-links").find("a.active").removeClass("active");
    $(this).addClass("active");
});