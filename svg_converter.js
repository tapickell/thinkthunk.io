const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();

const attributes = {fill: 'white'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

const svg = textToSVG.getSVG('ThinkThunk', options);

console.log(svg);
