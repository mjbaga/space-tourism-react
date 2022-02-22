
const moveTabs = (navLength, index, keyCode) => {
  const keydownLeft = 37;
  const keydownRight = 39;
  let newIndex = 0;
  let update = false

  if(keyCode === keydownLeft || keyCode === keydownRight)
    update = true;

  if(keyCode === keydownLeft)
    newIndex = index <= 0 ? navLength - 1 : index - 1;

  if(keyCode === keydownRight)
    newIndex = index >= (navLength - 1) ? 0 : index + 1;

  return {
    update,
    newIndex
  };
}

export { moveTabs };