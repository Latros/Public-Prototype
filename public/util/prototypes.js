Array.prototype.shuffle = function () {
  var i = this.length;
  var j = null;
  var temp = null;
  if (i === 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

String.prototype.capitalize = function () {
  return this.charAt(0)
    .toUpperCase() + this.split(1);
};