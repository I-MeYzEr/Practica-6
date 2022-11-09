let rm = [false, false, false, true, false, false, false, false, false, true];
let b = rm.indexOf();
let fm = false;

for ( let m of rm ) {
    console.log( `Танк переместился на позицию ${++b + 1}` );
    if (m == true) {
        fm = true;
        console.log( 'Танк повреждён' );
        continue;
    }
}

console.log( fm ? 'Танк уничтожен' : 'Танк не уничтожен' );