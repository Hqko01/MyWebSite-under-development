const eggOne = document.getElementById("eggOne")
const DC = document.getElementById("DC")
const GM = document.getElementById("GM")
const EGU = document.getElementById("EGU")
const GT = document.getElementById("GT")
const LogoDc = document.getElementById("Dc")
const LogoGt = document.getElementById("Gt")
const LogoGm = document.getElementById("Gm")
const LogoEgu = document.getElementById("Egu")
const content_2 = document.querySelector(".content-2")
const DcName = "Hqko#4059"
const Gmail = "hakan34yilmaz01@gmail.com"
const Egunom = "https://discord.com/oauth2/authorize?client_id=869536273872879626&permissions=8&scope=bot"
const Github = "https://github.com/Hqko01"
var timeOne = 10000
var timeTwo = 15000
var timeThree = 20000
const result_h2 = document.querySelector(".result h2")
const result_p = document.querySelector(".result p")
const Dc_Content2 = document.getElementById("Dc-content2")


eggOne.addEventListener('click', () => {
    eggOne.innerText = "Welcome!!"
    eggOne.style.color = "limegreen"
})

LogoDc.addEventListener('click', () => {
    navigator.clipboard.writeText(DcName);
    DC.innerText = "copied!"
    DC.style.color = "limegreen"
})

LogoGt.addEventListener('click', () => {
    window.open(Github)
    GT.innerText = "opened!"
    GT.style.color = "limegreen"
})

LogoGm.addEventListener('click', () => {
    navigator.clipboard.writeText(Gmail)
    GM.innerText = "copied!"
    GM.style.color = "limegreen"
})

LogoEgu.addEventListener('click', () => {
    window.open(Egunom)
    EGU.innerText = "opened!"
    EGU.style.color = "limegreen"
})

window.addEventListener("scroll", () => {
    const hideing = document.querySelector('.header')
    const main = document.querySelector('.main')
    main.classList.toggle('sticky', window.scrollY > 0)
    hideing.classList.toggle('sticky', window.scrollY > 0)
});

setInterval(() => {
    result_h2.innerText = "Egunom"
    result_p.innerText = `deserunt, laudantium adipisci necessitatibus doloribus soluta nulla labore temporibus reiciendis quaerat
    dignissimos optio quae excepturi accusamus incidunt, facere fuga autem quasi cupiditate! Ab modi
    molestias
    `
    content_2.style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/591/885/89/8k-nasa-pluto-4k-wallpaper-preview.jpg')";

}, timeOne)

setInterval(() => {
    result_h2.innerText = "Discord"
    result_p.innerHTML = "Discord İsmim <b id='Dc-content2'>Hqko#4059</b> ,Discord Sunucum <a src='https://discord.gg/QDN7RJw'>DC"
    content_2.style.backgroundImage = "url('https://images.alphacoders.com/102/thumb-1920-1026332.jpg')";
    var timeOne = (timeOne + timeTwo)

}, timeTwo)

