function isEmpty(obj) {
  // ваш код...
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}
