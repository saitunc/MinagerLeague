
// Takes the number and transforms to some number between 0 and 1.

export function scaleNumberByBitLength(x: String | undefined): number {
  if(typeof x ===undefined){
    throw Error("Value is resolved to undefined");
  }
  else { 
  const stringed = x?.toString();

  return Number('0.' + stringed);
}
}

export function gaussianRandom(mean: number, stdev: number, roundhalf: boolean){
  const u = 1 - Math.random();
  const v = Math.random();
  const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  //z distribution
  if (roundhalf == false){
    return z * stdev + mean
  }
  else {
    //0.5, 0.0 rounder
    return(Math.round((z * stdev + mean) * 2)/2)
  }
}

export function interactiveGaussianRandom(mean: number, stdev: number, roundhalf: boolean , rand: BigInt) {
    const scaledRandom = scaleNumberByBitLength(rand.toString());
    const u = 1 - scaledRandom;
    const v = Math.random();
    const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    //z distribution
    if (roundhalf == false){
      return z * stdev + mean
    }
    else {
      //0.5, 0.0 rounder
      return(Math.round((z * stdev + mean) * 2)/2)
    }
}