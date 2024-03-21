let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let d;
let h;
let m;
let s;
get_time = () => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    box1.innerHTML = h;
    box2.innerHTML = m;
    box3.innerHTML = s;
    box4.innerHTML = d;

}
get_time()
console.log(h,m,s);
setInterval(get_time,1000);

let iHTML = "";
setAlarm = () => {
    let hour = document.getElementById('hour').value;
    let min = document.getElementById('minute').value;
    let name = document.getElementById('name_text').value;
    
    // calculate time
    let buffer_hour = (hour - h)*3600;
    let buffer_min = (min - m)*60;
    let buffer_sec = (s);
    let calc_sec = Math.abs(buffer_hour+buffer_min-buffer_sec);
    console.log(calc_sec);
    iHTML += `<div class="alarms-box bg-light ms-auto me-auto mb-3 p-2"><div><h3>${hour} : ${min}</h3><h6>Ring Once | ${name}</h6></div>
    <div><label class="switch"><input id="messageBox" type="checkbox" value="1" checked><span class="slider"></span></label></div></div>`
    savedAlarm.innerHTML = iHTML;
    let val = document.getElementById("messageBox");
    setTimeout(()=>{if (val.checked) {PlaySound();}},(calc_sec-1)*1000);

}

PlaySound = function () {
    var audio = new Audio('Images/PuneetSuperstarRoar.mp3');
    audio.loop = false;
    audio.play(); 
}