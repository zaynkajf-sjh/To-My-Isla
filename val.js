for(let i=0;i<25;i++){
    const f=document.createElement("div");
    f.className="feather";
    f.style.left=Math.random()*100+"vw";
    f.style.animationDuration=8+Math.random()*12+"s";
    f.style.animationDelay=Math.random()*10+"s";
    document.body.appendChild(f);
}