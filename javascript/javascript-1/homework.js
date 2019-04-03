  const sum = a => { 
    let f = b => sum(a + (b || 0));
    f.toString = () => a; 
    return f; 
  }
