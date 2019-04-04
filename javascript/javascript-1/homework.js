  const sum = a => { 
    const f = b => sum(a + (b || 0));
    f.toString = () => a; 
    return f; 
  }
