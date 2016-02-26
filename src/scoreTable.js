function ScoreTable() {
  this.score = [];
  this.total = 0;
}

ScoreTable.prototype.setScore = function(frame){
  this.score.push(frame.viewFrame())
};

ScoreTable.prototype.requestScore = function(){
  return this.total;
};

ScoreTable.prototype.sumScore = function(){
  this.total += this.score.reduce(function(frame1, frame2) {
      return frame1 + frame2;
  })
};
