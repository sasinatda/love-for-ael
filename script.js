const loading = document.querySelector(".loading");
const app = document.getElementById("app");

setTimeout(()=>{
    loading.style.display="none";
    app.style.display="block";
},2000);

const music=document.getElementById("music");
const playBtn=document.getElementById("playMusic");

playBtn.onclick=function(){
    music.play();
    playBtn.innerHTML="🎵 เพลงกำลังเล่น...";
}

const messages=[
"🐶 เชียร์ : แอล... เราขอโทษนะ",
"🐰 แอล : ยังงอนอยู่เลย...",
"🐶 เชียร์ : เราจะพิสูจน์ด้วยการกระทำ ไม่ใช่แค่คำพูด",
"🐰 แอล : งั้นสัญญานะว่าจะไม่ทำให้เสียใจอีก",
"🐶 เชียร์ : สัญญาเลย ❤️",
"💖 เชียร์รักแอลที่สุด 💖"
];

let i=0;

const dialog=document.getElementById("dialog");
const next=document.getElementById("nextBtn");

dialog.innerHTML=messages[0];

next.onclick=function(){

    i++;

    if(i>=messages.length){
        i=0;
    }

    dialog.innerHTML=messages[i];

}

const photos=[
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg"
];

let p=0;

setInterval(function(){

    p++;

    if(p>=photos.length){
        p=0;
    }

    document.getElementById("photo").src=photos[p];

},3000);
