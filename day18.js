// Nested Forloop

// Q Given an target find two number from array which addition is target .

// var target = 119;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17];

// for(var i=0;i<array.length;i++){

//     for(var j=i+1;j<array.length;j++){
//         if(array[i]+array[j]==target){
//             // console.log(array[i],array[j])
//         }
//         console.log(array[i],"+" ,array[j],"=",array[i]+array[j])

//     }
// }


var target=20;
var array=[2, 34, 23, 50, 30, 45, 16];

 for(var i=0; i<array.length;i++){
    
    for(var j=i+1; j<array.length;j++){
        if(array[i]-array[j]==target){
            console.log(array[1],array[j])
        }
    }
 }