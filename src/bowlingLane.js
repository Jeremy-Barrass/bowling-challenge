function BowlingLane(){
  this.bframes = [];
  this.generateFrames();
}

BowlingLane.prototype.bowl = function(pins){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1,pins + 1);
};

BowlingLane.prototype.runFrames = function(){
  for (var i = 0; i < 2; i++) {
    this.bframe.setFrame(this.bowl(this.bframe.viewPins()));
  }
};

BowlingLane.prototype.generateFrames = function(){
  for (var i = 0; i < 9; i++) {
    this.bframe = new BowlingFrame();
    this.bframes.push(this.bframe);
  }
};
