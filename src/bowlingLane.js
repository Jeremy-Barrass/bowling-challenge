function BowlingLane(){
  this.bframes = [];
}

BowlingLane.prototype.bowl = function(){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1,11)
};
