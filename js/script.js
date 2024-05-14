AOS.init();
// script for leaf section
gsap.registerPlugin(MotionPathPlugin);
const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
circlePath.id = "circlePath";
document.querySelector("svg").prepend(circlePath);
let items = gsap.utils.toArray(".leaf-item"),
    numItems = items.length,
    itemStep = 1 / numItems,
    wrapProgress = gsap.utils.wrap(0, 1),
    snap = gsap.utils.snap(itemStep),
    wrapTracker = gsap.utils.wrap(0, numItems),
    tracker = { item: 0 };
gsap.set(items, { motionPath: {
    path: circlePath,
    align: circlePath,
    alignOrigin: [0.5, 0.5],
    end: (i) => gsap.utils.wrap(0, 1, i / items.length + 0.75)
    }, scale: 1.9 
});
const tl = gsap.timeline({ paused:true, reversed: true });
tl.to('.circle-area-content', {
    rotation: 360, 
    transformOrigin: 'center', 
    duration: 1, 
    ease: 'none'
});
tl.to(items, {
    rotation: "-=360", 
    transformOrigin: 'center', 
    duration: 1, 
    ease: 'none',
}, 0);
tl.to(tracker, {
    item: numItems,
    duration: 1, 
    ease: 'none',
    modifiers: {
        item(value) {
            return wrapTracker(numItems - Math.round(value))
        }
    }
}, 0);
items.forEach(function (el, i) {

    el.addEventListener("click", function () {
        var current = tracker.item,
            activeItem = i;

        if (i === current) {
            return;
        }
        document.querySelector('.leaf-item.active').classList.remove('active');
        items[activeItem].classList.add('active');
        var diff = current - i;
        if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep);
        } else {
            var amt = numItems - Math.abs(diff);

            if (current > i) {
                moveWheel(amt * -itemStep);
            } else {
                moveWheel(amt * itemStep);
            }
        }
    });
});
document.getElementById('next').addEventListener("click", function () {
    return moveWheel(-itemStep);
});
document.getElementById('prev').addEventListener("click", function () {
    return moveWheel(itemStep);
});
function moveWheel(amount, i, index) {   
    let progress = tl.progress();
    tl.progress(wrapProgress(snap(tl.progress() + amount)))
    let next = tracker.item;
    tl.progress(progress);
    document.querySelector('.leaf-item.active').classList.remove('active');
    items[next].classList.add('active');  
    gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
            progress: wrapProgress
        }
    });
    // let activeClone = document.getElementById('activeClone');
    // activeClone.innerHTML = items[next].innerHTML;
}

// Scroll to Top Button
var mybutton = document.getElementById("scrollToTopBtn");
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

$(document).ready(function(){
    $("#walton").click(function(){
        $("#waltonContent").show().removeClass("d-none");
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#144A9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#144A9D");
    });
    $("#marcel").click(function(){
        $("#marcelContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#D24146");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#D24146");
        $(".active-center-item").css("background-color", "#FFD0D2");
        $(".at-a-glance-bottom-area h2").css("color", "#D24146");
    });
    $("#plaza").click(function(){
        $("#plazaContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#D24146");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#D24146");
        $(".active-center-item").css("background-color", "#FFD0D2");
        $(".at-a-glance-bottom-area h2").css("color", "#D24146");
    });
    $("#plc").click(function(){
        $("#plcContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#144A9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#144A9D");
    });
    $("#acc").click(function(){
        $("#accContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#1A9FDC");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#1A9FDC");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#1A9FDC");
    });
    $("#digitech").click(function(){
        $("#digitechContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#0072BB");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#0072BB");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#0072BB");
    });
    $("#safe").click(function(){
        $("#safeContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#056715");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#056715");
        $(".active-center-item").css("background-color", "#D6FFAE");
        $(".at-a-glance-bottom-area h2").css("color", "#056715");
    });
    $("#risingbd").click(function(){
        $("#risingbdContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#144A9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#144A9D");
    });
    $("#waltoncompressor").click(function(){
        $("#waltoncompressorContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#144A9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#144A9D");
    });
    $("#origin").click(function(){
        $("#originContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#114D9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#114D9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#114D9D");
    });
    $("#nusdat").click(function(){
        $("#nusdatContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#wslContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#144A9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#144A9D");
    });
    $("#wsl").click(function(){
        $("#wslContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#chemicalContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#144A9D");
        $(".active-center-item").css("background-color", "#CADFFF");
        $(".at-a-glance-bottom-area h2").css("color", "#144A9D");
    });
    $("#chemical").click(function(){
        $("#chemicalContent").show().removeClass("d-none");
        $("#waltonContent").hide();
        $("#marcelContent").hide();
        $("#plazaContent").hide();
        $("#plcContent").hide();
        $("#accContent").hide();
        $("#digitechContent").hide();
        $("#safeContent").hide();
        $("#risingbdContent").hide();
        $("#waltoncompressorContent").hide();
        $("#originContent").hide();
        $("#nusdatContent").hide();
        $("#wslContent").hide();
        $(".at-a-glance-top-bg").css("background-color", "#F9A634");
        $(".at-a-glance-bottom-area .custom-button").css("background-color", "#F9A634");
        $(".active-center-item").css("background-color", "#EECC9D");
        $(".at-a-glance-bottom-area h2").css("color", "#F9A634");
    });
});