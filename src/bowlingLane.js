function BowlingLane(frame){
  this.bframes = [];
  this.bframe = frame;
}

BowlingLane.prototype.bowl = function(){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1,11)
};

BowlingLane.prototype.runFrame = function(){
  this.bframe.setFrame(this.bowl());
};
