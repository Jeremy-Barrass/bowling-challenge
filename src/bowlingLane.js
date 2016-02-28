function BowlingLane(frame){
  this.bframes = [];
  this.bframe = frame;
}

BowlingLane.prototype.bowl = function(pins){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1,pins + 1)
};

BowlingLane.prototype.runFrame = function(){
  this.bframe.setFrame(this.bowl(this.bframe.viewPins()));
};
