$(document).ready(function (){
    scroll_handler()
    typingAnimation()
    container_xl()
    animate_title()
});

$(window).scroll(function (){
    scroll_handler()
});

$(window).resize(function(){
    container_xl()
})

function animate_title(){
    $(".animate_box .title").css({
        "transform": "translateY(0)"
    })
    setTimeout(()=>{
        $(".animate_box .quote").css({
            "transform": "translateY(0)"
        })
        $(".animate_box .author").css({
            "transform": "translateX(0)"
        })
    }, 1000)
}

function scroll_handler(){
    banner_animate()
    gallery_animate()
    animate_banner_text()
}

function animate_banner_text(){
    windows_height = $(window).scrollTop();
    banner_height = $(".banner-overlay").height()
    max_banner_height = (banner_height/2)
    nav_opacity = windows_height / max_banner_height
    banner_opacity = (windows_height) / (max_banner_height - 100)
    $(".nav-header span").css({opacity: nav_opacity})
    $(".banner-text span").css({opacity: 1 - banner_opacity})
}

function banner_animate() {
    windows_height = $(window).scrollTop();
    offset_banner = windows_height / ($(window).height() - $(".nav-header").height());
    overlay_color = "181, 23, 158, ";
    if (windows_height > ($(window).height() - $(".nav-header").outerHeight(true))) {
        $(".nav-header").css({
            "background": "linear-gradient(90deg,rgba(181, 23, 158," + 1 + ") 0%,rgba(72, 149, 239," + 1 + ") 100%)"
        })
    } else {
        offset_banner = 0
        $(".nav-header").css({
            "background": "linear-gradient(90deg,rgba(181, 23, 158," + offset_banner + ") 0%,rgba(72, 149, 239," + offset_banner + ") 100%)"
        })
    }
}

function gallery_animate() {
    windows_height = $(window).scrollTop();
    $(".gallery").each(function () {
        gallery_height = $(this).offset().top;
        relative_movement = (windows_height + $(".nav-header").height() - gallery_height) * -.1;
        $(this).css({
            top: relative_movement + 'px'
        })
    });
}

function typingAnimation() {
    const t = $(".type-text"), e = $(".cursor"), n = ["Professional", "Student", "Designer", "Developer"], o = 200, i = 100, s = 2e3; let a = 0, r = 0;

    function u() { r < n[a].length ? (t.text(n[a].substring(0, r + 1)), r++, e.addClass("typing"), setTimeout(u, o)) : (e.removeClass("typing"), setTimeout(l, s)) }

    function l() { r > 0 ? (t.text(n[a].substring(0, r - 1)), r--, setTimeout(l, i)) : (a < n.length - 1 ? a++ : a = 0, setTimeout(u, o)) } setTimeout(u, s)
}

function container_xl(){
    windows_width = $(window).width();
    if(windows_width > 1440){
        $(".container-fluid").addClass("container")
    }else{
        $(".container-fluid").removeClass("container")
    }
}