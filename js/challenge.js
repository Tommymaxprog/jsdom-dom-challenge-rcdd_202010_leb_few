
counter=document.getElementById('counter');

let timeoutID = window.
inc=function(){return setInterval (function(){let b=parseInt(counter.innerText);
counter.innerText=b+1;},1*1000)};
interval=inc();
 minus=document.getElementById("minus"),
 plus=document.getElementById("plus"),
 heart=document.getElementById("heart"),
 pause=document.getElementById("pause"),
 commentForm=document.getElementsByTagName("form")[0];
  minus.addEventListener("click",function(){
    b=parseInt(counter.innerText);
    counter.innerText=b-1}),
    
  plus.addEventListener("click",function(){
    b=parseInt(counter.innerText);
    counter.innerText=b+1});
    
 heart.addEventListener("click",function(){
        var a=document.getElementById("counter"),
        b=parseInt(a.innerText),
        c=document.querySelector(".likes"),
        d=void 0;
        if([].concat(_toConsumableArray(c.children)).map(function(a){
          return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');
          var e=parseInt(d.children[0].innerText);
          d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}
          else(d=document.createElement("li")).setAttribute("data-num",b),
          d.innerHTML=b+" has been liked <span>1</span> time",
          c.appendChild(d)});
          
          pause.addEventListener("click",function(){
            window.clearInterval(interval);
            pause.innertext="resume";
          })
          
    