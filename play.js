import { sumArray, shuffleArray, subdivideArray } from "./groove.js";
import { createDrums, kickString, snareString, hatString, flairString, } from "./drums.js";
import { primaryGroove, bassString1V, bassString2V, bassString3V, bassString4V,
      adjustBassString, bassString1C, bassString2C, bassString3C, bassString4C} from "./bass.js";
import { melodyGroove, melodyString } from "./melody.js";
import { setKey, findKey } from './key.js';
import { adjustBassNotes } from './playParts.js';
import { generateSongStructure } from './songStructure.js';
import { playSong } from './playSong.js'

const primaryBass = primaryGroove();
const primaryBass2 = primaryGroove();
const initBass = primaryBass.concat(primaryBass, primaryBass, primaryBass);
//let bassCount = sumArray(initBass);
//console.log(bassCount);

const primaryDrums = createDrums(primaryBass);
const primaryDrums2 = createDrums(primaryBass2);
const drumTrips = subdivideArray(primaryDrums);
const initDrums = primaryDrums.concat(drumTrips, primaryDrums2, drumTrips);
//let drumCount = sumArray(initDrums);
//console.log(drumCount);

const primaryMelody = melodyGroove(primaryBass);
const primaryMelody2 = melodyGroove(primaryBass2);
const initMelody = primaryMelody.concat(primaryMelody, primaryMelody2, primaryMelody);
//let melodyCount = sumArray(initMelody);
//console.log(melodyCount);

//verse

const bassLine1V = bassString1V(primaryBass);
const bassLine2V = bassString2V(primaryBass, bassLine1V);
const bassLine3V = bassString3V(primaryBass2, bassLine2V);
const bassLine4V = bassString4V(primaryBass, bassLine1V);
const bassV = bassLine1V.concat(bassLine2V + bassLine3V + bassLine4V);

const melodyLine1V = melodyString(primaryMelody, primaryBass, bassLine1V);
const melodyLine2V = melodyString(primaryMelody, primaryBass, bassLine2V);
const melodyLine3V = melodyString(primaryMelody2, primaryBass2, bassLine3V);
const melodyLine4V = melodyString(primaryMelody, primaryBass, bassLine4V);
const melodyV = melodyLine1V.concat(melodyLine2V + melodyLine3V + melodyLine4V);

const bassDrum1V = kickString(primaryDrums, primaryBass, bassLine1V);
const bassDrum2V = kickString(drumTrips, primaryBass, bassLine2V);
const bassDrum3V = kickString(primaryDrums2, primaryBass2, bassLine3V);
const bassDrum4V = kickString(drumTrips, primaryBass, bassLine4V);
const bassDrumV = bassDrum1V.concat(bassDrum2V + bassDrum3V + bassDrum4V);

const snareDrumV = snareString(initDrums);

const hiHatV = hatString(initDrums);

const flairV = flairString(initDrums, snareDrumV, hiHatV);

//chorus

const bassLine1C = bassString1C(primaryBass, bassLine1V);
const bassLine2C = bassString2C(primaryBass, bassLine1C);
const bassLine3C = bassString3C(primaryBass2, bassLine1V);
const bassLine4C = bassString4C(primaryBass, bassLine1V);
const bassC = bassLine1C.concat(bassLine2C + bassLine3C + bassLine4C);

const melodyLine1C = melodyString(primaryMelody, primaryBass, bassLine1C);
const melodyLine2C = melodyString(primaryMelody, primaryBass, bassLine2C);
const melodyLine3C = melodyString(primaryMelody2, primaryBass2, bassLine3C);
const melodyLine4C = melodyString(primaryMelody, primaryBass, bassLine4C);
const melodyC = melodyLine1C.concat(melodyLine2C + melodyLine3C + melodyLine4C);

const bassDrum1C = kickString(primaryDrums, primaryBass, bassLine1C);
const bassDrum2C = kickString(drumTrips, primaryBass, bassLine2C);
const bassDrum3C = kickString(primaryDrums2, primaryBass2, bassLine3C);
const bassDrum4C = kickString(drumTrips, primaryBass, bassLine4C);
const bassDrumC = bassDrum1C.concat(bassDrum2C + bassDrum3C + bassDrum4C);

const snareDrumC = snareString(initDrums);

const hiHatC = hatString(initDrums);

const flairC = flairString(initDrums, snareDrumC, hiHatC);

//bridge

const bassLine1B = bassString1C(primaryBass, bassLine1V);
const bassLine2B = bassString2C(primaryBass, bassLine1B);
const bassLine3B = bassString3C(primaryBass2, bassLine1V);
const bassLine4B = bassString4C(primaryBass, bassLine1V);
const bassB = bassLine1B.concat(bassLine2B + bassLine3B + bassLine4B);

const melodyLine1B = melodyString(primaryMelody, primaryBass, bassLine1B);
const melodyLine2B = melodyString(primaryMelody, primaryBass, bassLine2B);
const melodyLine3B = melodyString(primaryMelody2, primaryBass2, bassLine3B);
const melodyLine4B = melodyString(primaryMelody, primaryBass, bassLine4B);
const melodyB = melodyLine1B.concat(melodyLine2B + melodyLine3B + melodyLine4B);

const bassDrum1B = kickString(primaryDrums, primaryBass, bassLine1B);
const bassDrum2B = kickString(drumTrips, primaryBass, bassLine2B);
const bassDrum3B = kickString(primaryDrums2, primaryBass2, bassLine3B);
const bassDrum4B = kickString(drumTrips, primaryBass, bassLine4B);
const bassDrumB = bassDrum1B.concat(bassDrum2B + bassDrum3B + bassDrum4B);

const snareDrumB = snareString(initDrums);

const hiHatB = hatString(initDrums);

const flairB = flairString(initDrums, snareDrumB, hiHatB);

const songtime = Math.round(Math.random() * (240 - 210) + 210);
const bpm = Math.round(Math.random() * (140 - 60) + 60);
const bps = bpm / 60;
const beatstotal = bps * songtime;
const measures = Math.round(beatstotal / 4 / 4) * 4;
const partsLength = measures / 4;
let songStructure = generateSongStructure(partsLength)

let keyAdjust = setKey()
let key = findKey(bassV, keyAdjust)
adjustBassNotes(keyAdjust)


console.log(`Tempo: ` + bpm)
console.log(`Runtime: ` + Math.floor(songtime / 60) + `:` + songtime % 60 + `
`)

songStructure.forEach(part => {
    console.log(`${part.type}: ${part.length}x
    `);
  });

let line = "";
let sum = 0;
let barCount = 0;

console.log(`Bass Groove:`)

for (let i = 0; i < initBass.length; i++) {
  sum += initBass[i];
  line += initBass[i] + ",";
  if (Math.abs(sum / 2 - Math.round(sum / 2)) <= 0.005) {
    line += " | ";
  }
  if (sum >= 3.9 && sum <= 4.1) {
    barCount += 1
    console.log(`Bar ` + barCount + `: ` + line);
    line = "";
    sum = 0;
  }
}
barCount = 0

console.log(`
Drum Groove:`)

for (let i = 0; i < initDrums.length; i++) {
  sum += initDrums[i];
  line += initDrums[i] + ",";
  if (Math.abs(sum / 2 - Math.round(sum / 2)) <= 0.005) {
    line += " | ";
  }
  if (sum >= 3.9 && sum <= 4.1) {
    barCount += 1
    console.log(`Bar ` + barCount + `: ` + line);
    line = "";
    sum = 0;
  }
}
barCount = 0

console.log(`
Key: ` + key)

console.log(`Verse:
`)

let spacedBassV = "";

for (let i = 0; i < bassV.length; i++) {
  spacedBassV += bassV[i] + " ";
}
let bassVA = adjustBassString(spacedBassV, keyAdjust)

console.log(`Bass:  ` + bassVA + `
`)

console.log(`Misc:  ` + flairV)
console.log(`HiHat: ` + hiHatV)
console.log(`Snare: ` + snareDrumV)
console.log(`Kick:  ` + bassDrumV + `
`)

console.log(`Chorus:
`)

let spacedBassC = "";

for (let i = 0; i < bassC.length; i++) {
  spacedBassC += bassC[i] + " ";
}
let bassCA = adjustBassString(spacedBassC, keyAdjust)
console.log(`Bass:  ` + bassCA + `
`)

console.log(`Misc:  ` + flairC)
console.log(`HiHat: ` + hiHatC)
console.log(`Snare: ` + snareDrumC)
console.log(`Kick:  ` + bassDrumC + `
`)

console.log(`Bridge:
`)

let spacedBassB = "";

for (let i = 0; i < bassB.length; i++) {
  spacedBassB += bassB[i] + " ";
}
let bassBA = adjustBassString(spacedBassB, keyAdjust)
console.log(`Bass:  ` + bassBA + `
`)

console.log(`Misc:  ` + flairB)
console.log(`HiHat: ` + hiHatB)
console.log(`Snare: ` + snareDrumB)
console.log(`Kick:  ` + bassDrumB + `
`)

playSong(songStructure, initDrums, initBass, bassDrumV, snareDrumV, hiHatV, flairV, bassV, bassDrumC, snareDrumC, hiHatC, flairC, bassC, bassDrumB, snareDrumB, hiHatB, flairB, bassB, bpm);