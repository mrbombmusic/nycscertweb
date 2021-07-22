let pendulums = [];

let l = [301.05, 289.58, 278.75, 268.53, 258.85, 249.69, 241, 232.76, 224.94, 217.51, 210.43, 203.7, 197.28, 191.17, 185.33];

let note = [ 91, 88, 84, 79, 76,72, 67, 64, 60, 55, 52, 48, 43, 40, 36]

let osc = [];
let env = [];


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 15; i++) {
    pendulums.push(new Pendulum(l[i]));

    env.push(new p5.Envelope())
    env[i].setADSR(0.01, 0.01,1 , 0.1);
    env[i].setRange(1, 0);

    osc.push(new p5.Oscillator());
    osc[i].start();
    osc[i].freq(midiToFreq(note[i]))
    osc[i].amp(env[i]);
  }
}

function draw() {
  background(220);


  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].display();
    pendulums[i].update();

    if(Math.abs(pendulums[i].bob.x - width/2) < 10) {
      env[i].play();
      pendulums[i].played();
    } else {
      pendulums[i].notPlayed();
    }

  }

}
