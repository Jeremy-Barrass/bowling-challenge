function BowlingFrame(){
  this.roll1 = null;
  this.roll2 = null;
  this.bonus = null;
  this.pins = 10;
  this.strike = false;
  this.spare = false;
}

BowlingFrame.prototype.viewPins = function(){
  return this.pins
};

BowlingFrame.prototype.setFrame = function(pinsDown){
  if (this.roll1 === null) {
    this.roll1 = pinsDown;
    this.pins -= this.roll1;
  } else if (this.roll2 === null) {
    if (this.roll1 !== 10) {
      this.roll2 = pinsDown;
      this.pins -= this.roll2;
    }
  }
};

BowlingFrame.prototype.viewFrame = function(){
  return this.roll1 + this.roll2 + this.bonus
};
