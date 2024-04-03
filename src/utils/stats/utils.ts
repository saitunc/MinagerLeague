export function gaussianRandom(mean: number, stdev: number, roundhalf: boolean) {
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