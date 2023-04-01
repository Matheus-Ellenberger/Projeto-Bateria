document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLocaleLowerCase());
});

document.querySelector("#btnTocar").addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    if (song !== "") {
        let songArray = song.split('');
        playComposition(songArray);
    }

})

function playSound(sound) {

    let elementSound = document.querySelector(`#s_${sound}`);

    if (elementSound) {
        elementSound.currentTime = 0;
        elementSound.play();
    }

}

function playComposition(songArray) {
    let await = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, await);
        await += 250;
    }
}