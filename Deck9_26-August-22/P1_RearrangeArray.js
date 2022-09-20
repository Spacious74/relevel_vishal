function rearrangeArray(a, n) {

    // Sort the array
    a.sort();
  
    let result = [];
    let p = 0, q = n - 1;
    for (let i = 0; i < n; i++) {
  
      // Assign even indexes with maximum elements
      if ((i + 1) % 2 == 0)
        result[i] = a[q--];
  
      // Assign odd indexes with remaining elements
      else
        result[i] = a[p++];
    }
  
    return result;
  }
   
  let a = [ 1, 3, 2, 4, 5, 6, 7, 8, 9 ];
  let n = a.length;
  console.log(rearrangeArray(a, n));