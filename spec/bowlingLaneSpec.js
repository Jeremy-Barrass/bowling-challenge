describe('bowlingLane',function(){
  beforeEach(function(){
    frame = {viewPins: function(){} };
    spyOn(frame, 'viewPins').and.returnValue(10)
    bowlingLane = new BowlingLane;
  });

  it('has a frames array',function(){
    expect(bowlingLane.bframes).toBeDefined();
  });

  it('has a turn counter',function(){
    expect(bowlingLane.turnCount).toBeDefined();
  });

  describe('bowl',function(){
    it('knocks the pins over',function(){
      expect(bowlingLane.bowl()).toBeGreaterThan(0)
    });
  });
});
