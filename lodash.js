// Simple example of writing functional style in JavaScript

let double = (nums) =>{
  if(isNull(nums)){
    return [];
  }else{
    let [first, ...tail] = nums;
    return [2*first, ...double(tail)];
  }
};

let isNull = (collection) =>{
  return !collection || (collection && collection.length === 0);
};


let sum = (nums)=>{
  if(isNull(nums))
    return 0;
  else {
    let [first, ...tail] = nums;
    return first + sum(tail);
  }
}

