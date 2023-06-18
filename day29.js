nums =[1,1,2,2,3,3]

for( var i=0 ; i < nums.length-1;i++){
    for(j=i+1 ; j< nums.length; j++){
        if(nums[i]=nums[j+1]){
            console.log([i,j])
        }
    }
}