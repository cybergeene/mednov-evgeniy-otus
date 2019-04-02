  function sum(a) {

    var currentSum = a;
    
    if(!currentSum){
      currentSum = 0;
    }
    function f(b) {
      if (b) {
        currentSum += b;
      }
      return f;
    }

    f.toString = function() {
      return currentSum;
    };

    return f;
  }
