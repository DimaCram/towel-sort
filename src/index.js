
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix === 'undefined') return [];

  let rez = [];
  matrix.forEach(function(element, index, array){
    let arr = (index + 1) % 2 === 0 ? element.reverse() : element;
    rez.push(...arr);
  });
  return rez;
}
