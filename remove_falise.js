function bouncer(arr) {
  let temp = [];
  for(let i = 0; i < arr.length;i++){
    let bool = Boolean(arr[i]);
    if (bool){
      temp.push(arr[i]);
    }

  }
  return temp;
}

bouncer([7, "ate", "", false, 9]);
