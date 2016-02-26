describe('ScoreTable', function(){
  beforeEach(function(){
    frame1 = {viewFrame: function(){} };
    spyOn(frame1, 'viewFrame').and.returnValue(4);
    frame2 = {viewFrame: function(){}};
    spyOn(frame2, 'viewFrame').and.returnValue(7);
    scoreTable = new ScoreTable;
  });

  describe('setScore', function(){
    it ('passes the frame to the score property', function(){
      scoreTable.setScore(frame1);
      expect(scoreTable.score).toContain(frame1.viewFrame())
    });
  });

  describe('requestScore', function(){
    it ('returns the score total to the requestor', function(){
      expect(scoreTable.requestScore()).toEqual(scoreTable.total);
    });
  });

  describe('sumScore', function(){
    it ('adds all the frames together', function(){
      scoreTable.setScore(frame1);
      scoreTable.setScore(frame2);
      scoreTable.sumScore();
      expect(scoreTable.total).toEqual(11);
    });
  });
});
