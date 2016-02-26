function BowlingFrame(){
  this.roll1 = null;
  this.roll2 = null;
  this.bonus = null;
}

BowlingFrame.prototype.setFrame = function(pins){
  if (this.roll1 === null) {
    this.roll1 = pins;
  } else if (this.roll2 === null) {
    if (this.roll1 !== 10) {
      this.roll2 = pins;
    }
  }
};

BowlingFrame.prototype.viewFrame = function(){
  return this.roll1 + this.roll2 + this.bonus
};
