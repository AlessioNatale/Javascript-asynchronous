function printAsyncName( name) {
    setTimeout(() => {
      console.log("hello");
      
      setTimeout(() => {
        console.log(name);
      }, 1000);
    }, 1000);
  }


  
printAsyncName( "pippo");