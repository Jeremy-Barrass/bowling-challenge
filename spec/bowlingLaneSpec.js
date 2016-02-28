describe('bowlingLane',function(){
  beforeEach(function(){
    frame = {setFrame: function(){} };
    spyOn(frame, 'setFrame')
    bowlingLane = new BowlingLane(frame);
  });

  it('has a frames array',function(){
    expect(bowlingLane.bframes).toBeDefined();
  });

  describe('bowl',function(){
    it('knocks the pins over',function(){
      expect(bowlingLane.bowl()).toBeGreaterThan(0)
    });
  });

  describe('runFrame',function(){
    it('calls the frame\'s setFrame function',function(){
      bowlingLane.runFrame();
      expect(frame.setFrame).toHaveBeenCalled();
    });
  });
});
