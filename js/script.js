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
// document.getElementById('next').addEventListener("click", function () {
//     return moveWheel(-itemStep);
// });
// document.getElementById('prev').addEventListener("click", function () {
//     return moveWheel(itemStep);
// });
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
    let activeClone = document.getElementById('activeClone');
    activeClone.innerHTML = items[next].innerHTML;
}
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
        $(".at-a-glance-top-bg").css("background-color", "#144A9D");
        $(".custom-button").css("background-color", "#144A9D");
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
        $(".at-a-glance-top-bg").css("background-color", "#D24146");
        $(".custom-button").css("background-color", "#D24146");
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
        $(".at-a-glance-top-bg").css("background-color", "#0F741F");
        $(".custom-button").css("background-color", "#0F741F");
        $(".active-center-item").css("background-color", "#D6FFAE");
        $(".at-a-glance-bottom-area h2").css("color", "#0F741F");
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
    });
});