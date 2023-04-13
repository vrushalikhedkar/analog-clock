 setInterval(()=> {            // hr second pe vo print krte rahegi iske liye setinterval liya h
     d = new Date();            // d=data  new ayga then date
     htime = d.getHours();      // h= hour 
     mtime = d.getMinutes();     // m=minut
     stime = d.getSeconds();      // s=second
    hrotation = 30*htime + mtime/2;   
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minuts.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);



//formulas
// 12hr = 360 degree rotation
// 1hr = 360/12 = 30 degree rotation


// min : 60min --> 30degree
//        1 -->(1/2)degree
//        m -->(m/2)rotation

// hour : (30h+m/2)

// min : 60min --> 360degree
//        1 mn --> 6degree
//        m minuts -->6mdegree

// second : 60 sec --> 360degree
//           1 sec -->6degree
//           s sec -->6sdegree