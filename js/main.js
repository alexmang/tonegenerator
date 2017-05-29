var running = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(frequency, volume, cycleTime) {
    var context = new AudioContext();
    var tone = context.createOscillator()
    var gainNode = context.createGain();
    
    tone.type = "sine"
    tone.frequency.value = frequency;
    tone.connect(gainNode);
    gainNode.connect(context.destination);
    gainNode.gain.value = volume;
    
    tone.start(0);
    
    await sleep(cycleTime*1000-40);

    gainNode.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 0.04
    )
    await sleep(40);
    context.close();
}

async function run() {
    var tone1 = document.getElementById("tone-one").value;
    var tone2 = document.getElementById("tone-two").value;

    var vol1 = document.getElementById("vol-one").value/100;
    var vol2 = document.getElementById("vol-two").value/100;

    var totalTime = document.getElementById("total-time").value;
    var cycleTime = document.getElementById("cycle-time").value;
    var numCycles=totalTime*60/cycleTime;

    for (var i = 0; i < numCycles; i++) {
        document.getElementById("cycle-number").innerHTML = (i+1) + "/" + numCycles;
        document.getElementById("current-tone").innerHTML = "Tone 1 ("+tone1+"Hz)";
        demo(tone1, vol1, cycleTime);
        await sleep(cycleTime*1000);
        document.getElementById("current-tone").innerHTML = "Tone 2 ("+tone2+"Hz)";
        demo(tone2, vol2, cycleTime);
        await sleep(cycleTime*1000);
    }

    document.getElementById("cycle-number").innerHTML = "0/0";
    document.getElementById("current-tone").innerHTML = "--";
    running = false;
}


var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");

startButton.addEventListener('click', function() {
    if (!running) {
        run();
        running = true;
    }
});

resetButton.addEventListener('click', function(){
    window.location.reload();
});





//TODO: save values on reload