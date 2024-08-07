var crsr = document.querySelector("#cursor")
var crsr2 = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr2.style.left = dets.x-200+"px"
    crsr2.style.top = dets.y-200+"px"
})



gsap.to("#nav",{
    backgroundColor : "#4169E1",
    duration :0.5,
    height : "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller :"body",
        start:"top -10%",
        end : "top -11%",
        scrub:1

    }

}
)

gsap.to("#main" ,{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start : "top -20%",
        end : "top -70%",
        scrub:2
    }
})

var a = document.querySelector(".enroll");

a.addEventListener("click", function(){
  a.textContent = "Enrolled!";
  a.style.backgroundColor = "#95c11e";
});
