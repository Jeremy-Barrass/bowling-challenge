describe('bowlingFrame', function(){
  beforeEach(function(){
    bowlingFrame = new BowlingFrame;
  });

  it('has a pins property', function(){
    expect(bowlingFrame.pins).toBeDefined();
  });

  it('has a strike property', function(){
    expect(bowlingFrame.strike).toBeDefined();
  });

  it('has a spare property', function(){
    expect(bowlingFrame.spare).toBeDefined();
  });

  describe('viewPins', function(){
    it('returns the number of pins standing', function(){
      expect(bowlingFrame.viewPins()).toEqual(bowlingFrame.pins);
    });
  });

  describe('setFrame', function(){
    beforeEach(function(){
      lane = {bowl: function(){}, bowl2: function(){}, bowl3: function(){} };
      spyOn(lane, 'bowl').and.returnValue(4);
      spyOn(lane, 'bowl2').and.returnValue(3);
      spyOn(lane, 'bowl3').and.returnValue(10);
    });

    it ('passes the number of pins fallen to the roll1 property', function(){
      bowlingFrame.setFrame(lane.bowl());
      expect(bowlingFrame.roll1).toEqual(lane.bowl());
    });

    it ('deducts the roll1 property from the pins property', function(){
      preBowl = bowlingFrame.pins;
      bowlingFrame.setFrame(lane.bowl());
      expect(bowlingFrame.viewPins()).toBeLessThan(preBowl);
    });

    it ('passes the number of pins fallen to the roll2 property', function(){
      bowlingFrame.setFrame(lane.bowl());
      bowlingFrame.setFrame(lane.bowl2());
      expect(bowlingFrame.roll2).toEqual(lane.bowl2());
    });

    it ('deduct the roll2 property from the pins property', function(){
      bowlingFrame.setFrame(lane.bowl());
      preBowl = bowlingFrame.pins;
      bowlingFrame.setFrame(lane.bowl2());
      expect(bowlingFrame.viewPins()).toBeLessThan(preBowl);
    });

    it ('skips roll2 if roll1 equals 10', function(){
      bowlingFrame.setFrame(lane.bowl3());
      bowlingFrame.setFrame(lane.bowl());
      expect(bowlingFrame.roll2).toBeNull();
    });

    it ('has a bonus property', function(){
      expect(bowlingFrame.bonus).toBeDefined();
    });
  });

  describe('viewFrame', function(){
    it ('returns the total of all rolls for the frame property', function(){
      bowlingFrame.setFrame(lane.bowl());
      bowlingFrame.setFrame(lane.bowl2());
      expect(bowlingFrame.viewFrame()).toEqual(bowlingFrame.roll1 + bowlingFrame.roll2);
    });
  });

});
