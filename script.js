const pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    KeysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = []

audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
    audio.play(); // playing audio


    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // pushing data-key value to allKeys array
    // calling playTune function with passing data-key as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // setting audio volume according to the volume slider value
}
const showHideKeys = () => {
    // toggling hide class from each key on checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
}

volumeSlider.addEventListener("input", handleVolume);
KeysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);