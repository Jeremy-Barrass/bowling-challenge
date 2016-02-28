function BowlingLane(){
  this.bframes = [];
  this.bframe = new BowlingFrame;
}

BowlingLane.prototype.bowl = function(pins){
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1,pins + 1);
};

BowlingLane.prototype.runFrame = function(){
  for (var i = 0; i < 2; i++) {
    this.bframe.setFrame(this.bowl(this.bframe.viewPins()));
  }
  this.bframes.push(this.bframe);
  this.bframe = new BowlingFrame();
};
