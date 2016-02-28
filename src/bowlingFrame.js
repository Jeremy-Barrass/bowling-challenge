function BowlingFrame(){
  this.roll1 = null;
  this.roll2 = null;
  this.bonus = null;
  this.pins = 10;
}

BowlingFrame.prototype.viewPins = function(){
  return this.pins
};

BowlingFrame.prototype.setFrame = function(pinsDown){
  if (this.roll1 === null) {
    this.roll1 = pinsDown;
  } else if (this.roll2 === null) {
    if (this.roll1 !== 10) {
      this.roll2 = pinsDown;
    }
  }
};

BowlingFrame.prototype.viewFrame = function(){
  return this.roll1 + this.roll2 + this.bonus
};
