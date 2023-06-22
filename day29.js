// nums =[1,1,2,2,3,3]

// for( var i=0 ; i < nums.length-1;i++){
//     for(j=i+1 ; j< nums.length; j++){
//         if(nums[i]=nums[j+1]){
//             console.log([i,j])
//         }
//     }
// }


// var nums = [1,3,5,6];
//  var target = 5;

//  for (var i = 0; i < nums.length; i++) {
//     var index = nums.findIndex((object) => nums[i] == target);
//     console.log(index)
//  }


//  nums = [2,2,1];
//  var answer =[];
//  var removeElement = function(nums){
// for (var i=0; i<nums.length; i++){
    
//     if( nums[i] == nums[i+1]){
//     //   answer.push();
//     if( nums[i] != nums[i+1]){
//         answer.push(nums[i]);
//     }
//     }
// }
// return answer;
//  }


// nums = [0,0,2,4,1,2]
// var singleNumber = function(nums) {
//     let n = nums.length;
//     let c = 0;
//     for (let i = 0; i < n; i++) {
//     //    console.log(nums[i])
//         c = c ^ nums[i];
//     }
//     return c; 
// }
// var result = singleNumber(nums);
// console.log(result)



nums = [4,3,2,7,8,2,3,1]


var findDisappearedNumbers = function(nums) {
    let n = nums.length;
     let ans = new Set(nums);
     let array = [];
     for (let i = 1; i <= n; i++) {
         if (!ans.has(i)) {
            array.push(i);
         }
     }
     return array;
     
 }
     let res = findDisappearedNumbers(nums)
     console.log(res)




