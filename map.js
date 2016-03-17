const map = (callback)=>{
  if(!collection){
    return [];
  }else{
    let [first, ...tail];
    return [callback(first), ...map(tail)];
  }
};
