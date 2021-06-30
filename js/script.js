const awan = document.querySelectorAll('.awan');
const yukinon = document.querySelectorAll('.yukinon');
const skor = document.querySelector('.skor'); 
const kiss = document.querySelector('#kiss');

let awanSebelumnya;
let selesai;
let skorAnda;

function randomAwan(awan) {
    const a = Math.floor(Math.random() * awan.length);
    const aRandom = awan[a];

    if (aRandom == awanSebelumnya) {
        randomAwan(awan);
    }
    awanSebelumnya = aRandom;

    return aRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculYukinon() {
    const aRandom = randomAwan(awan);
    const wRandom = randomWaktu(300, 800);
    aRandom.classList.add('muncul');

    setTimeout(() => {
        aRandom.classList.remove('muncul');
        if (!selesai) {
            munculYukinon();
        }
    }, wRandom);
 
}

function mulai() {
    selesai = false;
    skorAnda = 0;
    skor.textContent = 0;
    munculYukinon();
    setTimeout(() => {
        selesai = true;
    }, 10000);
}

function pukul() {
    skorAnda++;
    skor.textContent = skorAnda;
    this.parentNode.classList.remove('muncul');
    kiss.play();

}

yukinon.forEach(y => {
    y.addEventListener('click', pukul)
});