(() => {
  let i = 0;
  const followInterval = setInterval(() => {
    if (i >= 100) {
      clearInterval(followInterval);
      return;
    }
    const buttons = document.querySelectorAll("button");
    const nextButton = buttons[i];
    nextButton.click();
    i+=5 ;
  }, 1000);
  console.log("intervalID => ", followInterval);
})();
