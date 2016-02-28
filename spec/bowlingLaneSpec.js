describe('bowlingLane',function(){
  beforeEach(function(){
    bowlingLane = new BowlingLane;
    bframe = {viewPins: function(){}, setFrame: function(){} };
    spyOn(bframe, 'viewPins').and.returnValue(10)
  });

  it('has a frames array', function(){
    expect(bowlingLane.bframes).toBeDefined();
  });

  describe('bowl', function(){
    it('knocks the pins over', function(){
      expect(bowlingLane.bowl(bframe.viewPins())).toBeGreaterThan(0);
    });

    it('can\'t knock over more pins than are standing', function(){
      expect(bowlingLane.bowl(bframe.viewPins())).toBeLessThan(bframe.viewPins()+1);
    });
  });

  describe('runFrame', function(){
    it('calls the frame\'s setFrame function', function(){
      bowlingLane.runFrame();
      expect(typeof bframe.setFrame).toEqual('function');
    });

    it('passes the completed frame to the frames array', function(){
      bowlingLane.runFrame();
      expect(bowlingLane.bframes.length).toEqual(1);
    });

    it('generates a new frame', function(){
      bowlingLane.runFrame();
      expect(bowlingLane.bframe).not.toBe('Spy Object');
    });
  });
});
