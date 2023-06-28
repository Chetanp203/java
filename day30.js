
// nums = [1,1,0,1,1,1]

// var findmaxconsecutiveones = function(nums){
//     let maxconsec =0;
//     let currentconsec =0;

//     for(let i=0; i< nums.length; i++){
//         if(nums[i] === 1){
//             currentconsec++;
//         }else{
//             currentconsec =0;
//         }
//         if (currentconsec > maxconsec){
//             maxconsec = currentconsec;
//         }
//     }
//     return maxconsec;
// }
// let res =findmaxconsecutiveones(nums)
// console.log(res)


// letters = ["c","f","j"];
// target ="a";


// var greaterNumbers = function(letters) {
//      for (let i = 0; i < letters.length; i++) {
//          if (letters[i] > target) 
//          return letters[i];
//      }
     
//  }
//     let res=greaterNumbers(letters);
//      console.log(res)



// Q no 747

nums = [3,6,1,0]
index=0;
count=0;
let max = nums[0];
var largestNumber =function(nums){
    for(i=1; i< nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
            index=i;
        }
    }
    for(i=0; i<nums.length;i++){
        if(i!=index && max>=2*nums[i]){
            count++;
        }
    }
    if(count==nums.length-1)
    return index;
    else
    return -1;
}
let res = largestNumber(nums)
console.log(res);