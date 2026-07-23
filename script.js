// افکت حرکت سه‌بعدی عنوان

const title = document.querySelector("h1");

if(title){
    document.addEventListener("mousemove",(e)=>{

        let x=(window.innerWidth/2-e.pageX)/30;
        let y=(window.innerHeight/2-e.pageY)/30;

        title.style.transform=
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });
}

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/30;

let y=(window.innerHeight/2-e.pageY)/30;

title.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});



// ساخت ذرات طلایی

for(let i=0;i<40;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(star);

}




const hidden=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}else{

entry.target.classList.remove("show");

}

});

});

hidden.forEach(el=>observer.observe(el));



const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=
`rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0) rotateX(0)";

});

});






const hiddenElements = document.querySelectorAll(".hidden");


entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}else{

entry.target.classList.remove("show");

}

});

hiddenElements.forEach(el=>observer.observe(el));




const light=document.getElementById("light");

if(light){

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX+"px";
light.style.top=e.clientY+"px";

});

}

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX+"px";
light.style.top=e.clientY+"px";

});




