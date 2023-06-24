
nums = [1,1,0,1,1,1]

var findmaxconsecutiveones = function(nums){
    let maxconsec =0;
    let currentconsec =0;

    for(let i=0; i< nums.length; i++){
        if(nums[i] === 1){
            currentconsec++;
        }else{
            currentconsec =0;
        }
        if (currentconsec > maxconsec){
            maxconsec = currentconsec;
        }
    }
    return maxconsec;
}
let res =findmaxconsecutiveones(nums)
console.log(res)