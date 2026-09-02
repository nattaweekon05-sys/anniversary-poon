const PASSWORD="140569";
const start=new Date("2026-05-14T00:00:00+07:00");

function unlock(){
 const p=document.getElementById("pass"),e=document.getElementById("err");
 if(p.value===PASSWORD){
  document.getElementById("lock").hidden=true;
  document.getElementById("main").hidden=false;
  updateCounter(); setInterval(updateCounter,1000);
  window.scrollTo(0,0);
 }else{e.style.display="block";p.value="";p.focus();}
}
document.getElementById("pass").addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});
function updateCounter(){
 let s=Math.max(0,Math.floor((Date.now()-start.getTime())/1000));
 document.getElementById("days").textContent=Math.floor(s/86400).toLocaleString("th-TH");
 document.getElementById("hours").textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");
 document.getElementById("minutes").textContent=String(Math.floor(s%3600/60)).padStart(2,"0");
 document.getElementById("seconds").textContent=String(s%60).padStart(2,"0");
}
function view(src){document.getElementById("large").src=src;document.getElementById("lightbox").hidden=false}
function openLetter(){document.getElementById("envelope").classList.toggle("open")}
function surprise(){
 document.getElementById("finalMessage").hidden=false;
 for(let i=0;i<55;i++){
  const h=document.createElement("span");h.textContent=Math.random()>.2?"♥":"♡";
  h.style.position="fixed";h.style.left=(30+Math.random()*40)+"vw";h.style.top="55vh";
  h.style.zIndex=200;h.style.color=["#ff78a5","#f3a0bb","#ffd16f"][Math.floor(Math.random()*3)];
  h.style.fontSize=(14+Math.random()*24)+"px";document.body.appendChild(h);
  const x=(Math.random()-.5)*650,y=-(180+Math.random()*500);
  h.animate([{transform:"translate(0,0)",opacity:0},{transform:`translate(${x}px,${y}px)`,opacity:1},{transform:`translate(${x*1.2}px,${y*1.2}px)`,opacity:0}],{duration:1600+Math.random()*1000}).onfinish=()=>h.remove();
 }
}