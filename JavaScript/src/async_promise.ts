const asyncFunc = async () => {
  // Promiseがresolveするまで待機
  const x: number = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  // Promiseがresolveするまで待機
  const y: number = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  console.log(x + y);
};

asyncFunc();
