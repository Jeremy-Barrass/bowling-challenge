describe('bowlingLane',function(){
  beforeEach(function(){
    frame = {setFrame: function(){} , viewPins: function(){} };
    spyOn(frame, 'setFrame');
    spyOn(frame, 'viewPins').and.returnValue(5);
    bowlingLane = new BowlingLane(frame);
  });

  it('has a frames array',function(){
    expect(bowlingLane.bframes).toBeDefined();
  });

  describe('bowl',function(){
    it('knocks the pins over',function(){
      expect(bowlingLane.bowl(frame.viewPins())).toBeGreaterThan(0);
    });

    it('can\'t knock over more pins than are standing', function(){
      expect(bowlingLane.bowl(frame.viewPins())).toBeLessThan(frame.viewPins()+1);
    });
  });

  describe('runFrame',function(){
    it('calls the frame\'s setFrame function',function(){
      bowlingLane.runFrame();
      expect(frame.setFrame).toHaveBeenCalled();
    });
  });
});
