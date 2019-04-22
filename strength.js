const fs = require('fs')
// // var a = []
// // // var a=[3,4,6,7,8,9,2,4,6,7,8,5,5,4,3,];
// // for(i=10000; i<100000; i++){
// //     b=Math.floor(Math.random()*90000) + 10000
// // a.push(b);

// // }
// // var c = a.sort();

// fs.appendFile('./sona', c, (err, res) => {
//     if(err) console.log(err)
//     else {
//         console.log('successfully write file')
//     }
// })

fs.readFile('./sona', 'utf8', (err, res) => {
    if(err) {
        console.log(err)
    }else {
        console.log("successfully read")
    arr = res.split(',')
var current = null;
 var cnt = 0; 

         function count() {
            for(i=0; i< arr.length; i++){
                if(arr[i]!=current){
                    if(cnt>0){
                        console.log(current + ' comes--> ' + cnt + ' times')
                    }
                    current = arr[i];
                    cnt = 1
                }else {
                    cnt++;
                }
            }
            if(cnt>0) {
                console.log(current + ' comes--> ' + cnt + ' times')
            }
        }count()
 
        // console.log(count())
    }
})
// // for(i=0; i<e.length; i++) {
// //     var C = e.charAt(i);
// //         arr.push(parseInt(C))
// //     }
// // console.log(arr)
// // var f = e.toString()
// // var arr = [e]
// // for(i=0; i<f.length; i++) {
// //     var C = f.charAt(i);
// //         arr.push(parseInt(C))
// //     }

// // console.log(arr)

    

// console.log(arr)
// ,(err,res) => {
//     if(err) { 
//         console.log('something wrong')
//     }
//     else
//     {
//         var d = res.toString()
//         var arr = [d]
//         


