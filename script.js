

$('#letter h1').textillate({ in: { effect: 'hinge' } });



var m1 = document.querySelectorAll("#part4 h1")
m1.forEach(function(elem){
        var m2 = elem.textContent
        var m3 = m2.split("")
        var clutter = "";
         m3.forEach(function(e){
         clutter+= `<span>${e}</span>`
        })
        elem.innerHTML = clutter;
})

gsap.to("#part4 h1 span" ,{
    duration: 1,
    stagger: 0.3,
    color: "black",
    duration: 1,
    scrollTrigger: {
      trigger: "#part4",
      scroller: "body",
      pin: true,
      markers: true,
      star: "top 0%",
      end: "top -100%",
      scrub: 1,
      pin: true,
    markers: true,
    star: "top 0%",
    end: "top -100%",
    scrub: 1,
     onstart:function(){
      $('#part4 h1').textillate({ in: { effect: 'shake' } });
    }
   
    }
        
    }
)


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  var main = document.querySelector("body")
  var cursor = document.querySelector("#cursor")

 main.addEventListener("mousemove" , function(dets){
    cursor.style.left = dets.X+30+"px"
    cursor.style.top = dets.y+30+"px"

 })


document.querySelector("#part3").addEventListener("mouseenter",function(){ 
  $('#let h1').textillate({ in: { effect: 'shake' } });
})