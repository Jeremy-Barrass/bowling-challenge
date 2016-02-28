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

  describe('runFrames', function(){
    it('calls the frame\'s setFrame function', function(){
      bowlingLane.runFrames();
      expect(typeof bframe.setFrame).toEqual('function');
    });
  });

  describe('generateFrames', function(){
    it('pre-generates the first nine frames required for a game and pushes them to the frames array', function(){
      expect(bowlingLane.bframes.length).toBe(9)
    });
  });
});
