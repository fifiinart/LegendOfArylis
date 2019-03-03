module.exports = function(start, end, by = 1) {
  let y = [];
  for (let x = start; x < end; x += by) {
    y.push(x);
  }
  return y;
}