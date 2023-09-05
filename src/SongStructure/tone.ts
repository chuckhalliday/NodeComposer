export const tone = {
    C: [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093.0, 4186.01],
    Db: [17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
    D: [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.64],
    Eb: [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03],
    E: [20.6, 41.2, 82.41, 164.81, 329.63, 659.26, 1318.51, 2637.02],
    F: [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83],
    Gb: [23.12, 46.25, 92.5, 185.0, 369.99, 739.99, 1479.98, 2959.96],
    G: [24.5, 49.0, 98.0, 196.0, 392.0, 783.99, 1567.98, 3135.96],
    Ab: [25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44],
    A: [27.5, 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0],
    Bb: [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31],
    B: [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07],
  }

  export const midiTone = {
    C: [24, 36, 48, 60, 72, 84, 96, 108, 120],
    Db: [25, 37, 49, 61, 73, 85, 97, 109, 121],
    D: [26, 38, 50, 62, 74, 86, 98, 110, 122],
    Eb: [27, 39, 51, 63, 75, 87, 99, 111, 123],
    E: [28, 40, 52, 64, 76, 88, 100, 112, 124],
    F: [29, 41, 53, 65, 77, 89, 101, 113, 125],
    Gb: [30, 42, 54, 66, 78, 90, 102, 114, 126],
    G: [31, 43, 55, 67, 79, 91, 103, 115, 127],
    Ab: [32, 44, 56, 68, 80, 92, 104, 116],
    A: [33, 45, 57, 69, 81, 93, 105, 117],
    Bb: [34, 46, 58, 70, 82, 94, 106, 118],
    B: [35, 47, 59, 71, 83, 95, 107, 119],
  };

  export const midiMap = [
    87.31, 92.5, 98.0, 103.83, 110.0, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81,
    174.61, 185.0, 196.0, 207.65, 220.0, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 
    349.23, 369.99, 392.0, 415.3, 440.0, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26,
  ]
  
  export const chordToneMappings: { [key: string]: number[] } = {
    'Ab': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.Ab[3], tone.C[3], tone.Eb[3]],
    'Abmaj7': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.G[4], tone.Ab[3], tone.C[3], tone.Eb[3], tone.G[3]],
    'Ab7': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.Gb[4], tone.Ab[3], tone.C[3], tone.Eb[3], tone.Gb[3]],
    'Ab9': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.Bb[4], tone.Ab[3], tone.C[3], tone.Eb[3], tone.Bb[3]],
    'Abm': [tone.Ab[4], tone.B[4], tone.Eb[4], tone.Ab[3], tone.B[3], tone.Eb[3]],
    'Abm7': [tone.Ab[4], tone.B[4], tone.Eb[4], tone.Gb[4], tone.Ab[3], tone.B[3], tone.Eb[3], tone.Gb[3]],
    'Ab°': [tone.Ab[4], tone.B[4], tone.D[4], tone.Ab[3], tone.B[3], tone.D[3]],
  
    'A': [tone.A[4], tone.Db[4], tone.E[4], tone.A[3], tone.Db[3], tone.E[3]],
    'Amaj7': [tone.A[4], tone.Db[4], tone.E[4], tone.Ab[4], tone.A[3], tone.Db[3], tone.E[3], tone.Ab[3]],
    'A7': [tone.A[4], tone.Db[4], tone.E[4], tone.G[4], tone.A[3], tone.Db[3], tone.E[3], tone.G[3]],
    'A9': [tone.A[4], tone.Db[4], tone.E[4], tone.B[4], tone.A[3], tone.Db[3], tone.E[3], tone.B[3]],
    'Am': [tone.A[4], tone.C[4], tone.E[4], tone.A[3], tone.C[3], tone.E[3]],
    'Am7': [tone.A[4], tone.C[4], tone.E[4], tone.G[4], tone.A[3], tone.C[3], tone.E[3], tone.G[3]],
    'A°': [tone.A[4], tone.C[4], tone.Eb[4], tone.A[3], tone.C[3], tone.Eb[3]],

    'A#': [tone.Bb[4], tone.D[4], tone.F[4], tone.Bb[3], tone.D[3], tone.F[3]],
    'A#maj7': [tone.Bb[4], tone.D[4], tone.F[4], tone.A[4], tone.Bb[3], tone.D[3], tone.F[3], tone.A[3]],
    'A#7': [tone.Bb[4], tone.D[4], tone.F[4], tone.Ab[4], tone.Bb[3], tone.D[3], tone.F[3], tone.Ab[3]],
    'A#9': [tone.Bb[4], tone.D[4], tone.F[4], tone.C[4], tone.Bb[3], tone.D[3], tone.F[3], tone.C[3]],
    'A#m': [tone.Bb[4], tone.Db[4], tone.F[4], tone.Bb[3], tone.Db[3], tone.F[3]],
    'A#m7': [tone.Bb[4], tone.Db[4], tone.F[4], tone.Ab[4], tone.Bb[3], tone.Db[3], tone.F[3], tone.Ab[3]],
    'A#°': [tone.Bb[4], tone.Db[4], tone.E[4], tone.Bb[3], tone.Db[3], tone.E[3]],
  
    'Bb': [tone.Bb[4], tone.D[4], tone.F[4], tone.Bb[3], tone.D[3], tone.F[3]],
    'Bbmaj7': [tone.Bb[4], tone.D[4], tone.F[4], tone.A[4], tone.Bb[3], tone.D[3], tone.F[3], tone.A[3]],
    'Bb7': [tone.Bb[4], tone.D[4], tone.F[4], tone.Ab[4], tone.Bb[3], tone.D[3], tone.F[3], tone.Ab[3]],
    'Bb9': [tone.Bb[4], tone.D[4], tone.F[4], tone.C[4], tone.Bb[3], tone.D[3], tone.F[3], tone.C[3]],
    'Bbm': [tone.Bb[4], tone.Db[4], tone.F[4], tone.Bb[3], tone.Db[3], tone.F[3]],
    'Bbm7': [tone.Bb[4], tone.Db[4], tone.F[4], tone.Ab[4], tone.Bb[3], tone.Db[3], tone.F[3], tone.Ab[3]],
    'Bb°': [tone.Bb[4], tone.Db[4], tone.E[4], tone.Bb[3], tone.Db[3], tone.E[3]],
  
    'B': [tone.B[4], tone.Eb[4], tone.Gb[4], tone.B[3], tone.Eb[3], tone.Gb[3]],
    'Bmaj7': [tone.B[4], tone.Eb[4], tone.Gb[4], tone.Bb[4], tone.B[3], tone.Eb[3], tone.Gb[3], tone.Bb[3]],
    'B7': [tone.B[4], tone.Eb[4], tone.Gb[4], tone.A[4], tone.B[3], tone.Eb[3], tone.Gb[3], tone.A[3]],
    'B9': [tone.B[4], tone.Eb[4], tone.Gb[4], tone.Db[4], tone.B[3], tone.Eb[3], tone.Gb[3], tone.Db[3]],
    'Bm': [tone.B[4], tone.D[4], tone.Gb[4], tone.B[3], tone.D[3], tone.Gb[3]],
    'Bm7': [tone.B[4], tone.D[4], tone.Gb[4], tone.A[4], tone.B[3], tone.D[3], tone.Gb[3], tone.A[3]],
    'B°': [tone.B[4], tone.D[4], tone.F[4], tone.B[3], tone.D[3], tone.F[3]],
  
    'C': [tone.C[4], tone.E[4], tone.G[4], tone.C[3], tone.E[3], tone.G[3]],
    'Cmaj7': [tone.C[4], tone.E[4], tone.G[4], tone.B[4], tone.C[3], tone.E[3], tone.G[3], tone.B[3]],
    'C7': [tone.C[4], tone.E[4], tone.G[4], tone.Bb[3], tone.C[3], tone.E[3], tone.G[3], tone.Bb[4]],
    'C9': [tone.C[4], tone.E[4], tone.G[4], tone.D[4], tone.C[3], tone.E[3], tone.G[3], tone.D[3]],
    'Cm': [tone.C[4], tone.Eb[4], tone.G[4], tone.C[3], tone.Eb[3], tone.G[3]],
    'Cm7': [tone.C[4], tone.Eb[4], tone.G[4], tone.Bb[3], tone.C[3], tone.Eb[3], tone.G[3], tone.Bb[4]],
    'C°': [tone.C[4], tone.Eb[4], tone.Gb[4], tone.C[3], tone.Eb[3], tone.Gb[3]],
  
    'C#': [tone.Db[4], tone.F[4], tone.Ab[4], tone.Db[3], tone.F[3], tone.Ab[3]],
    'C#maj7': [tone.Db[4], tone.F[4], tone.Ab[4], tone.C[4], tone.Db[3], tone.F[3], tone.Ab[3], tone.C[3]],
    'C#7': [tone.Db[4], tone.F[4], tone.Ab[4], tone.B[3], tone.Db[3], tone.F[3], tone.Ab[3], tone.B[4]],
    'C#9': [tone.Db[4], tone.F[4], tone.Ab[4], tone.Eb[4], tone.Db[3], tone.F[3], tone.Ab[3], tone.Eb[3]],
    'C#m': [tone.Db[4], tone.E[4], tone.Ab[4], tone.Db[3], tone.E[3], tone.Ab[3]],
    'C#m7': [tone.Db[4], tone.E[4], tone.Ab[4], tone.B[3], tone.Db[3], tone.E[3], tone.Ab[3], tone.B[4]],
    'C#°': [tone.Db[4], tone.E[4], tone.G[4], tone.Db[3], tone.E[3], tone.G[3]],
  
    'Db': [tone.Db[4], tone.F[4], tone.Ab[4], tone.Db[3], tone.F[3], tone.Ab[3]],
    'Dbmaj7': [tone.Db[4], tone.F[4], tone.Ab[4], tone.C[4], tone.Db[3], tone.F[3], tone.Ab[3], tone.C[3]],
    'Db7': [tone.Db[4], tone.F[4], tone.Ab[4], tone.B[3], tone.Db[3], tone.F[3], tone.Ab[3], tone.B[4]],
    'Db9': [tone.Db[4], tone.F[4], tone.Ab[4], tone.Eb[4], tone.Db[3], tone.F[3], tone.Ab[3], tone.Eb[3]],
    'Dbm': [tone.Db[4], tone.E[4], tone.Ab[4], tone.Db[3], tone.E[3], tone.Ab[3]],
    'Dbm7': [tone.Db[4], tone.E[4], tone.Ab[4], tone.B[3], tone.Db[3], tone.E[3], tone.Ab[3], tone.B[4]],
    'Db°': [tone.Db[4], tone.E[4], tone.G[4], tone.Db[3], tone.E[3], tone.G[3]],
  
    'D': [tone.D[4], tone.Gb[4], tone.A[4], tone.D[3], tone.Gb[3], tone.A[3]],
    'Dmaj7': [tone.D[4], tone.Gb[4], tone.A[4], tone.Db[4], tone.D[3], tone.Gb[3], tone.A[3], tone.Db[3]],
    'D7': [tone.D[4], tone.Gb[4], tone.A[4], tone.C[4], tone.D[3], tone.Gb[3], tone.A[3], tone.C[3]],
    'D9': [tone.D[4], tone.Gb[4], tone.A[4], tone.E[4], tone.D[3], tone.Gb[3], tone.A[3], tone.E[3]],
    'Dm': [tone.D[4], tone.F[4], tone.A[4], tone.D[3], tone.F[3], tone.A[3]],
    'Dm7': [tone.D[4], tone.F[4], tone.A[4], tone.C[4], tone.D[3], tone.F[3], tone.A[3], tone.C[3]],
    'D°': [tone.D[4], tone.F[4], tone.Ab[4], tone.D[3], tone.F[3], tone.Ab[3]],
  
    'D#': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.Eb[3], tone.G[3], tone.Bb[3]],
    'D#maj7': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.D[4], tone.Eb[3], tone.G[3], tone.Bb[3], tone.D[3]],
    'D#7': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.Db[4], tone.Eb[3], tone.G[3], tone.Bb[3], tone.Db[3]],
    'D#9': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.F[4], tone.Eb[3], tone.G[3], tone.Bb[3], tone.F[3]],
    'D#m': [tone.Eb[4], tone.Gb[4], tone.Bb[4], tone.Eb[3], tone.Gb[3], tone.Bb[3]],
    'D#m7': [tone.Eb[4], tone.Gb[4], tone.Bb[4], tone.Db[4], tone.Eb[3], tone.Gb[3], tone.Bb[3], tone.Db[3]],
    'D#°': [tone.Eb[4], tone.Gb[4], tone.A[4], tone.Eb[3], tone.Gb[3], tone.A[3]],
  
    'Eb': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.Eb[3], tone.G[3], tone.Bb[3]],
    'Ebmaj7': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.D[4], tone.Eb[3], tone.G[3], tone.Bb[3], tone.D[3]],
    'Eb7': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.Db[4], tone.Eb[3], tone.G[3], tone.Bb[3], tone.Db[3]],
    'Eb9': [tone.Eb[4], tone.G[4], tone.Bb[4], tone.F[4], tone.Eb[3], tone.G[3], tone.Bb[3], tone.F[3]],
    'Ebm': [tone.Eb[4], tone.Gb[4], tone.Bb[4], tone.Eb[3], tone.Gb[3], tone.Bb[3]],
    'Ebm7': [tone.Eb[4], tone.Gb[4], tone.Bb[4], tone.Db[4], tone.Eb[3], tone.Gb[3], tone.Bb[3], tone.Db[3]],
    'Eb°': [tone.Eb[4], tone.Gb[4], tone.A[4], tone.Eb[3], tone.Gb[3], tone.A[3]],
  
    'E': [tone.E[4], tone.Ab[4], tone.B[4], tone.E[3], tone.Ab[3], tone.B[3]],
    'Emaj7': [tone.E[4], tone.Ab[4], tone.B[4], tone.Eb[4], tone.E[3], tone.Ab[3], tone.B[3], tone.Eb[3]],
    'E7': [tone.E[4], tone.Ab[4], tone.B[4], tone.D[4], tone.E[3], tone.Ab[3], tone.B[3], tone.D[3]],
    'E9': [tone.E[4], tone.Ab[4], tone.B[4], tone.Gb[4], tone.E[3], tone.Ab[3], tone.B[3], tone.Gb[3]],
    'Em': [tone.E[4], tone.G[4], tone.B[4], tone.E[3], tone.G[3], tone.B[3]],
    'Em7': [tone.E[4], tone.G[4], tone.B[4], tone.D[4], tone.E[3], tone.G[3], tone.B[3], tone.D[3]],
    'E°': [tone.E[4], tone.G[4], tone.Bb[4], tone.E[3], tone.G[3], tone.Bb[3]],
  
    'F': [tone.F[4], tone.A[4], tone.C[4], tone.F[3], tone.A[3], tone.C[3]],
    'Fmaj7': [tone.F[4], tone.A[4], tone.C[4], tone.E[4], tone.F[3], tone.A[3], tone.C[3], tone.E[3]],
    'F7': [tone.F[4], tone.A[4], tone.C[4], tone.Eb[4], tone.F[3], tone.A[3], tone.C[3], tone.Eb[3]],
    'F9': [tone.F[4], tone.A[4], tone.C[4], tone.G[4], tone.F[3], tone.A[3], tone.C[3], tone.G[3]],
    'Fm': [tone.F[4], tone.Ab[4], tone.C[4], tone.F[3], tone.Ab[3], tone.C[3]],
    'Fm7': [tone.F[4], tone.Ab[4], tone.C[4], tone.Eb[4], tone.F[3], tone.Ab[3], tone.C[3], tone.Eb[3]],
    'F°': [tone.F[4], tone.Ab[4], tone.Bb[4], tone.F[3], tone.Ab[3], tone.Bb[3]],
  
    'F#': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.Gb[3], tone.Bb[3], tone.Db[3]],
    'F#maj7': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.F[4], tone.Gb[3], tone.Bb[3], tone.Db[3], tone.F[3]],
    'F#7': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.E[4], tone.Gb[3], tone.Bb[3], tone.Db[3], tone.E[3]],
    'F#9': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.Ab[4], tone.Gb[3], tone.Bb[3], tone.Db[3], tone.Ab[3]],
    'F#m': [tone.Gb[4], tone.A[4], tone.Db[4], tone.Gb[3], tone.A[3], tone.Db[3]],
    'F#m7': [tone.Gb[4], tone.A[4], tone.Db[4], tone.E[4], tone.Gb[3], tone.A[3], tone.Db[3], tone.E[3]],
    'F#°': [tone.Gb[4], tone.A[4], tone.C[4], tone.Gb[3], tone.A[3], tone.C[3]],
  
    'Gb': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.Gb[3], tone.Bb[3], tone.Db[3]],
    'Gbmaj7': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.F[4], tone.Gb[3], tone.Bb[3], tone.Db[3], tone.F[3]],
    'Gb7': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.E[4], tone.Gb[3], tone.Bb[3], tone.Db[3], tone.E[3]],
    'Gb9': [tone.Gb[4], tone.Bb[4], tone.Db[4], tone.Ab[4], tone.Gb[3], tone.Bb[3], tone.Db[3], tone.Ab[3]],
    'Gbm': [tone.Gb[4], tone.A[4], tone.Db[4], tone.Gb[3], tone.A[3], tone.Db[3]],
    'Gbm7': [tone.Gb[4], tone.A[4], tone.Db[4], tone.E[4], tone.Gb[3], tone.A[3], tone.Db[3], tone.E[3]],
    'Gb°': [tone.Gb[4], tone.A[4], tone.C[4], tone.Gb[3], tone.A[3], tone.C[3]],
  
    'G': [tone.G[4], tone.B[4], tone.D[4], tone.G[3], tone.B[3], tone.D[3]],
    'Gmaj7': [tone.G[4], tone.B[4], tone.D[4], tone.Gb[4], tone.G[3], tone.B[3], tone.D[3], tone.Gb[3]],
    'G7': [tone.G[4], tone.B[4], tone.D[4], tone.F[4], tone.G[3], tone.B[3], tone.D[3], tone.F[3]],
    'G9': [tone.G[4], tone.B[4], tone.D[4], tone.A[4], tone.G[3], tone.B[3], tone.D[3], tone.A[3]],
    'Gm': [tone.G[4], tone.Bb[4], tone.D[4], tone.G[3], tone.Bb[3], tone.D[3]],
    'Gm7': [tone.G[4], tone.Bb[4], tone.D[4], tone.F[4], tone.G[3], tone.Bb[3], tone.D[3], tone.F[3]],
    'G°': [tone.G[4], tone.Bb[4], tone.Db[4], tone.G[3], tone.Bb[3], tone.Db[3]],
  
    'G#': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.Ab[3], tone.C[3], tone.Eb[3]],
    'G#maj7': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.G[4], tone.Ab[3], tone.C[3], tone.Eb[3], tone.G[3]],
    'G#7': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.Gb[4], tone.Ab[3], tone.C[3], tone.Eb[3], tone.Gb[3]],
    'G#9': [tone.Ab[4], tone.C[4], tone.Eb[4], tone.Bb[4], tone.Ab[3], tone.C[3], tone.Eb[3], tone.Bb[3]],
    'G#m': [tone.Ab[4], tone.B[4], tone.Eb[4], tone.Ab[3], tone.B[3], tone.Eb[3]],
    'G#m7': [tone.Ab[4], tone.B[4], tone.Eb[4], tone.Gb[4], tone.Ab[3], tone.B[3], tone.Eb[3], tone.Gb[3]],
    'G#°': [tone.Ab[4], tone.B[4], tone.D[4], tone.Ab[3], tone.B[3], tone.D[3]],
  
    '-': []
  };
  
  export const chordMidiMappings: { [key: string]: number[] } = {
    'Ab': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3]],
    'Abmaj7': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.G[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3], midiTone.G[3]],
    'Ab7': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3], midiTone.Gb[3]],
    'Ab9': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.Bb[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3], midiTone.Bb[3]],
    'Abm': [midiTone.Ab[4], midiTone.B[4], midiTone.Eb[4], midiTone.Ab[3], midiTone.B[3], midiTone.Eb[3]],
    'Abm7': [midiTone.Ab[4], midiTone.B[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.Ab[3], midiTone.B[3], midiTone.Eb[3], midiTone.Gb[3]],
    'Ab°': [midiTone.Ab[4], midiTone.B[4], midiTone.D[4], midiTone.Ab[3], midiTone.B[3], midiTone.D[3]],
  
    'A': [midiTone.A[4], midiTone.Db[4], midiTone.E[4], midiTone.A[3], midiTone.Db[3], midiTone.E[3]],
    'Amaj7': [midiTone.A[4], midiTone.Db[4], midiTone.E[4], midiTone.Ab[4], midiTone.A[3], midiTone.Db[3], midiTone.E[3], midiTone.Ab[3]],
    'A7': [midiTone.A[4], midiTone.Db[4], midiTone.E[4], midiTone.G[4], midiTone.A[3], midiTone.Db[3], midiTone.E[3], midiTone.G[3]],
    'A9': [midiTone.A[4], midiTone.Db[4], midiTone.E[4], midiTone.B[4], midiTone.A[3], midiTone.Db[3], midiTone.E[3], midiTone.B[3]],
    'Am': [midiTone.A[4], midiTone.C[4], midiTone.E[4], midiTone.A[3], midiTone.C[3], midiTone.E[3]],
    'Am7': [midiTone.A[4], midiTone.C[4], midiTone.E[4], midiTone.G[4], midiTone.A[3], midiTone.C[3], midiTone.E[3], midiTone.G[3]],
    'A°': [midiTone.A[4], midiTone.C[4], midiTone.Eb[4], midiTone.A[3], midiTone.C[3], midiTone.Eb[3]],
  
    'A#': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3]],
    'A#maj7': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.A[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3], midiTone.A[3]],
    'A#7': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.Ab[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3], midiTone.Ab[3]],
    'A#9': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.C[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3], midiTone.C[3]],
    'A#m': [midiTone.Bb[4], midiTone.Db[4], midiTone.F[4], midiTone.Bb[3], midiTone.Db[3], midiTone.F[3]],
    'A#m7': [midiTone.Bb[4], midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.Bb[3], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3]],
    'A#°': [midiTone.Bb[4], midiTone.Db[4], midiTone.E[4], midiTone.Bb[3], midiTone.Db[3], midiTone.E[3]],
  
    'Bb': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3]],
    'Bbmaj7': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.A[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3], midiTone.A[3]],
    'Bb7': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.Ab[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3], midiTone.Ab[3]],
    'Bb9': [midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.C[4], midiTone.Bb[3], midiTone.D[3], midiTone.F[3], midiTone.C[3]],
    'Bbm': [midiTone.Bb[4], midiTone.Db[4], midiTone.F[4], midiTone.Bb[3], midiTone.Db[3], midiTone.F[3]],
    'Bbm7': [midiTone.Bb[4], midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.Bb[3], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3]],
    'Bb°': [midiTone.Bb[4], midiTone.Db[4], midiTone.E[4], midiTone.Bb[3], midiTone.Db[3], midiTone.E[3]],
  
    'B': [midiTone.B[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.B[3], midiTone.Eb[3], midiTone.Gb[3]],
    'Bmaj7': [midiTone.B[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.Bb[4], midiTone.B[3], midiTone.Eb[3], midiTone.Gb[3], midiTone.Bb[3]],
    'B7': [midiTone.B[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.A[4], midiTone.B[3], midiTone.Eb[3], midiTone.Gb[3], midiTone.A[3]],
    'B9': [midiTone.B[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.Db[4], midiTone.B[3], midiTone.Eb[3], midiTone.Gb[3], midiTone.Db[3]],
    'Bm': [midiTone.B[4], midiTone.D[4], midiTone.Gb[4], midiTone.B[3], midiTone.D[3], midiTone.Gb[3]],
    'Bm7': [midiTone.B[4], midiTone.D[4], midiTone.Gb[4], midiTone.A[4], midiTone.B[3], midiTone.D[3], midiTone.Gb[3], midiTone.A[3]],
    'B°': [midiTone.B[4], midiTone.D[4], midiTone.F[4], midiTone.B[3], midiTone.D[3], midiTone.F[3]],
  
    'C': [midiTone.C[4], midiTone.E[4], midiTone.G[4], midiTone.C[3], midiTone.E[3], midiTone.G[3]],
    'Cmaj7': [midiTone.C[4], midiTone.E[4], midiTone.G[4], midiTone.B[4], midiTone.C[3], midiTone.E[3], midiTone.G[3], midiTone.B[3]],
    'C7': [midiTone.C[4], midiTone.E[4], midiTone.G[4], midiTone.Bb[3], midiTone.C[3], midiTone.E[3], midiTone.G[3], midiTone.Bb[4]],
    'C9': [midiTone.C[4], midiTone.E[4], midiTone.G[4], midiTone.D[4], midiTone.C[3], midiTone.E[3], midiTone.G[3], midiTone.D[3]],
    'Cm': [midiTone.C[4], midiTone.Eb[4], midiTone.G[4], midiTone.C[3], midiTone.Eb[3], midiTone.G[3]],
    'Cm7': [midiTone.C[4], midiTone.Eb[4], midiTone.G[4], midiTone.Bb[3], midiTone.C[3], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[4]],
    'C°': [midiTone.C[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.C[3], midiTone.Eb[3], midiTone.Gb[3]],
  
    'C#': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3]],
    'C#maj7': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.C[4], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3], midiTone.C[3]],
    'C#7': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.B[3], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3], midiTone.B[4]],
    'C#9': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.Eb[4], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3], midiTone.Eb[3]],
    'C#m': [midiTone.Db[4], midiTone.E[4], midiTone.Ab[4], midiTone.Db[3], midiTone.E[3], midiTone.Ab[3]],
    'C#m7': [midiTone.Db[4], midiTone.E[4], midiTone.Ab[4], midiTone.B[3], midiTone.Db[3], midiTone.E[3], midiTone.Ab[3], midiTone.B[4]],
    'C#°': [midiTone.Db[4], midiTone.E[4], midiTone.G[4], midiTone.Db[3], midiTone.E[3], midiTone.G[3]],
  
    'Db': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3]],
    'Dbmaj7': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.C[4], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3], midiTone.C[3]],
    'Db7': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.B[3], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3], midiTone.B[4]],
    'Db9': [midiTone.Db[4], midiTone.F[4], midiTone.Ab[4], midiTone.Eb[4], midiTone.Db[3], midiTone.F[3], midiTone.Ab[3], midiTone.Eb[3]],
    'Dbm': [midiTone.Db[4], midiTone.E[4], midiTone.Ab[4], midiTone.Db[3], midiTone.E[3], midiTone.Ab[3]],
    'Dbm7': [midiTone.Db[4], midiTone.E[4], midiTone.Ab[4], midiTone.B[3], midiTone.Db[3], midiTone.E[3], midiTone.Ab[3], midiTone.B[4]],
    'Db°': [midiTone.Db[4], midiTone.E[4], midiTone.G[4], midiTone.Db[3], midiTone.E[3], midiTone.G[3]],
  
    'D': [midiTone.D[4], midiTone.Gb[4], midiTone.A[4], midiTone.D[3], midiTone.Gb[3], midiTone.A[3]],
    'Dmaj7': [midiTone.D[4], midiTone.Gb[4], midiTone.A[4], midiTone.Db[4], midiTone.D[3], midiTone.Gb[3], midiTone.A[3], midiTone.Db[3]],
    'D7': [midiTone.D[4], midiTone.Gb[4], midiTone.A[4], midiTone.C[4], midiTone.D[3], midiTone.Gb[3], midiTone.A[3], midiTone.C[3]],
    'D9': [midiTone.D[4], midiTone.Gb[4], midiTone.A[4], midiTone.E[4], midiTone.D[3], midiTone.Gb[3], midiTone.A[3], midiTone.E[3]],
    'Dm': [midiTone.D[4], midiTone.F[4], midiTone.A[4], midiTone.D[3], midiTone.F[3], midiTone.A[3]],
    'Dm7': [midiTone.D[4], midiTone.F[4], midiTone.A[4], midiTone.C[4], midiTone.D[3], midiTone.F[3], midiTone.A[3], midiTone.C[3]],
    'D°': [midiTone.D[4], midiTone.F[4], midiTone.Ab[4], midiTone.D[3], midiTone.F[3], midiTone.Ab[3]],
  
    'D#': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3]],
    'D#maj7': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.D[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3], midiTone.D[3]],
    'D#7': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3], midiTone.Db[3]],
    'D#9': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.F[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3], midiTone.F[3]],
    'D#m': [midiTone.Eb[4], midiTone.Gb[4], midiTone.Bb[4], midiTone.Eb[3], midiTone.Gb[3], midiTone.Bb[3]],
    'D#m7': [midiTone.Eb[4], midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Eb[3], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3]],
    'D#°': [midiTone.Eb[4], midiTone.Gb[4], midiTone.A[4], midiTone.Eb[3], midiTone.Gb[3], midiTone.A[3]],
  
    'Eb': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3]],
    'Ebmaj7': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.D[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3], midiTone.D[3]],
    'Eb7': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3], midiTone.Db[3]],
    'Eb9': [midiTone.Eb[4], midiTone.G[4], midiTone.Bb[4], midiTone.F[4], midiTone.Eb[3], midiTone.G[3], midiTone.Bb[3], midiTone.F[3]],
    'Ebm': [midiTone.Eb[4], midiTone.Gb[4], midiTone.Bb[4], midiTone.Eb[3], midiTone.Gb[3], midiTone.Bb[3]],
    'Ebm7': [midiTone.Eb[4], midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Eb[3], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3]],
    'Eb°': [midiTone.Eb[4], midiTone.Gb[4], midiTone.A[4], midiTone.Eb[3], midiTone.Gb[3], midiTone.A[3]],
  
    'E': [midiTone.E[4], midiTone.Ab[4], midiTone.B[4], midiTone.E[3], midiTone.Ab[3], midiTone.B[3]],
    'Emaj7': [midiTone.E[4], midiTone.Ab[4], midiTone.B[4], midiTone.Eb[4], midiTone.E[3], midiTone.Ab[3], midiTone.B[3], midiTone.Eb[3]],
    'E7': [midiTone.E[4], midiTone.Ab[4], midiTone.B[4], midiTone.D[4], midiTone.E[3], midiTone.Ab[3], midiTone.B[3], midiTone.D[3]],
    'E9': [midiTone.E[4], midiTone.Ab[4], midiTone.B[4], midiTone.Gb[4], midiTone.E[3], midiTone.Ab[3], midiTone.B[3], midiTone.Gb[3]],
    'Em': [midiTone.E[4], midiTone.G[4], midiTone.B[4], midiTone.E[3], midiTone.G[3], midiTone.B[3]],
    'Em7': [midiTone.E[4], midiTone.G[4], midiTone.B[4], midiTone.D[4], midiTone.E[3], midiTone.G[3], midiTone.B[3], midiTone.D[3]],
    'E°': [midiTone.E[4], midiTone.G[4], midiTone.Bb[4], midiTone.E[3], midiTone.G[3], midiTone.Bb[3]],
  
    'F': [midiTone.F[4], midiTone.A[4], midiTone.C[4], midiTone.F[3], midiTone.A[3], midiTone.C[3]],
    'Fmaj7': [midiTone.F[4], midiTone.A[4], midiTone.C[4], midiTone.E[4], midiTone.F[3], midiTone.A[3], midiTone.C[3], midiTone.E[3]],
    'F7': [midiTone.F[4], midiTone.A[4], midiTone.C[4], midiTone.Eb[4], midiTone.F[3], midiTone.A[3], midiTone.C[3], midiTone.Eb[3]],
    'F9': [midiTone.F[4], midiTone.A[4], midiTone.C[4], midiTone.G[4], midiTone.F[3], midiTone.A[3], midiTone.C[3], midiTone.G[3]],
    'Fm': [midiTone.F[4], midiTone.Ab[4], midiTone.C[4], midiTone.F[3], midiTone.Ab[3], midiTone.C[3]],
    'Fm7': [midiTone.F[4], midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.F[3], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3]],
    'F°': [midiTone.F[4], midiTone.Ab[4], midiTone.Bb[4], midiTone.F[3], midiTone.Ab[3], midiTone.Bb[3]],
  
    'F#': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3]],
    'F#maj7': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.F[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3], midiTone.F[3]],
    'F#7': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.E[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3], midiTone.E[3]],
    'F#9': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Ab[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3], midiTone.Ab[3]],
    'F#m': [midiTone.Gb[4], midiTone.A[4], midiTone.Db[4], midiTone.Gb[3], midiTone.A[3], midiTone.Db[3]],
    'F#m7': [midiTone.Gb[4], midiTone.A[4], midiTone.Db[4], midiTone.E[4], midiTone.Gb[3], midiTone.A[3], midiTone.Db[3], midiTone.E[3]],
    'F#°': [midiTone.Gb[4], midiTone.A[4], midiTone.C[4], midiTone.Gb[3], midiTone.A[3], midiTone.C[3]],
  
    'Gb': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3]],
    'Gbmaj7': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.F[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3], midiTone.F[3]],
    'Gb7': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.E[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3], midiTone.E[3]],
    'Gb9': [midiTone.Gb[4], midiTone.Bb[4], midiTone.Db[4], midiTone.Ab[4], midiTone.Gb[3], midiTone.Bb[3], midiTone.Db[3], midiTone.Ab[3]],
    'Gbm': [midiTone.Gb[4], midiTone.A[4], midiTone.Db[4], midiTone.Gb[3], midiTone.A[3], midiTone.Db[3]],
    'Gbm7': [midiTone.Gb[4], midiTone.A[4], midiTone.Db[4], midiTone.E[4], midiTone.Gb[3], midiTone.A[3], midiTone.Db[3], midiTone.E[3]],
    'Gb°': [midiTone.Gb[4], midiTone.A[4], midiTone.C[4], midiTone.Gb[3], midiTone.A[3], midiTone.C[3]],
  
    'G': [midiTone.G[4], midiTone.B[4], midiTone.D[4], midiTone.G[3], midiTone.B[3], midiTone.D[3]],
    'Gmaj7': [midiTone.G[4], midiTone.B[4], midiTone.D[4], midiTone.Gb[4], midiTone.G[3], midiTone.B[3], midiTone.D[3], midiTone.Gb[3]],
    'G7': [midiTone.G[4], midiTone.B[4], midiTone.D[4], midiTone.F[4], midiTone.G[3], midiTone.B[3], midiTone.D[3], midiTone.F[3]],
    'G9': [midiTone.G[4], midiTone.B[4], midiTone.D[4], midiTone.A[4], midiTone.G[3], midiTone.B[3], midiTone.D[3], midiTone.A[3]],
    'Gm': [midiTone.G[4], midiTone.Bb[4], midiTone.D[4], midiTone.G[3], midiTone.Bb[3], midiTone.D[3]],
    'Gm7': [midiTone.G[4], midiTone.Bb[4], midiTone.D[4], midiTone.F[4], midiTone.G[3], midiTone.Bb[3], midiTone.D[3], midiTone.F[3]],
    'G°': [midiTone.G[4], midiTone.Bb[4], midiTone.Db[4], midiTone.G[3], midiTone.Bb[3], midiTone.Db[3]],
  
    'G#': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3]],
    'G#maj7': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.G[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3], midiTone.G[3]],
    'G#7': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3], midiTone.Gb[3]],
    'G#9': [midiTone.Ab[4], midiTone.C[4], midiTone.Eb[4], midiTone.Bb[4], midiTone.Ab[3], midiTone.C[3], midiTone.Eb[3], midiTone.Bb[3]],
    'G#m': [midiTone.Ab[4], midiTone.B[4], midiTone.Eb[4], midiTone.Ab[3], midiTone.B[3], midiTone.Eb[3]],
    'G#m7': [midiTone.Ab[4], midiTone.B[4], midiTone.Eb[4], midiTone.Gb[4], midiTone.Ab[3], midiTone.B[3], midiTone.Eb[3], midiTone.Gb[3]],
    'G#°': [midiTone.Ab[4], midiTone.B[4], midiTone.D[4], midiTone.Ab[3], midiTone.B[3], midiTone.D[3]],
  
    '-': []
  };
  
  