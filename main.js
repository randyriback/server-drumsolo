#!/usr/bin/env node
const soundplayer = require("sound-player");
const readline = require('readline');
const path = require('path');

exports.drumSolo = () => {


let soundConfigs = {
  kick: {
    filename: path.join(__dirname, "./sounds/JK_BD_06.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  brush: {
    filename: path.join(__dirname, "./sounds/JK_BRSH_02.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  hat: {
    filename: path.join(__dirname, "./sounds/JK_HH_01.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  perc1: {
    filename: path.join(__dirname, "./sounds/JK_PRC_03.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  perc2: {
    filename: path.join(__dirname, "./sounds/JK_PRC_05.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  perc3: {
    filename: path.join(__dirname, "./sounds/JK_PRC_06.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  perc4: {
    filename: path.join(__dirname, "./sounds/JK_PRC_09.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  snare1: {
    filename: path.join(__dirname, "./sounds/JK_SNR_01.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
  snare2: {
    filename: path.join(__dirname, "./sounds/JK_SNR_02.wav"),
    gain: 1,
    debug: false,
    player: "afplay",
  },
};


const sounds = {
    kick: new soundplayer(soundConfigs.kick),
    brush: new soundplayer(soundConfigs.brush),
    hat: new soundplayer(soundConfigs.hat),
    perc1: new soundplayer(soundConfigs.perc1),
    perc2: new soundplayer(soundConfigs.perc2),
    perc3: new soundplayer(soundConfigs.perc3),
    perc4: new soundplayer(soundConfigs.perc4),
    snare1: new soundplayer(soundConfigs.snare1),
    snare2: new soundplayer(soundConfigs.snare2),
}


const methods = {
  PUT: sounds.kick,
  GET: sounds.hat,
  POST: sounds.snare1,
  DELETE: sounds.perc1,
  OPTIONS: sounds.perc2,
  TRACE: sounds.perc3,
  PATCH: sounds.perc4,
  CONNECT: sounds.brush,
  HEAD: sounds.snare2
};

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(l){
    const line = l.toUpperCase();

    if(line.includes('GET')){
        methods.GET.play()
    };
    if(line.includes('DELETE')){
        methods.DELETE.play()
    };
    if(line.includes('PUT')){
        methods.PUT.play()
    };
    if(line.includes('POST')){
        methods.POST.play()
    };
    if(line.includes('HEAD')){
        methods.HEAD.play()
    };
    if(line.includes('CONNECT')){
        methods.CONNECT.play()
    };
    if(line.includes('TRACE')){
        methods.TRACE.play()
    };
    if(line.includes('OPTIONS')){
        methods.OPTIONS.play()
    };
    if(line.includes('HEAD')){
        methods.HEAD.play()
    };
    
})

};



if (require.main === module) {
    exports.drumSolo()
};


