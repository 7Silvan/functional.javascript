// Simple examples of writing functional style in JavaScript

export const double = (nums) =>{
  if(isNull(nums)){
    return [];
  }else{
    const [first, ...tail] = nums;
    return [2*first, ...double(tail)];
  }
};

export const isNull = (collection) =>{
  return !collection || (collection && collection.length === 0);
};


export const sum = (nums)=>{
  if(isNull(nums))
    return 0;
  else {
    const [first, ...tail] = nums;
    return first + sum(tail);
  }
}

export const map = (collection, callback)=> {
  if(collection && collection.length === 0){
    return [];
  }
  else{
    const [first, ...tail] = collection;
    return [callback(first), ...map(tail, callback)];
  }
}

