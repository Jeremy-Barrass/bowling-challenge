describe('bowlingFrame', function(){
  beforeEach(function(){
    bowlingFrame = new BowlingFrame;
  });

  it('has a pins property', function(){
    expect(bowlingFrame.pins).toBeDefined();
  });

  describe('viewPins', function(){
    it('returns the number of pins standing', function(){
      expect(bowlingFrame.viewPins()).toEqual(bowlingFrame.pins);
    });
  });

  describe('setFrame', function(){
    it ('passes the number of pins fallen to the roll1 property', function(){
      bowlingFrame.setFrame(4);
      expect(bowlingFrame.roll1).toEqual(4);
    });

    it ('passes the number of pins fallen to the roll2 property', function(){
      bowlingFrame.setFrame(4);
      bowlingFrame.setFrame(3);
      expect(bowlingFrame.roll2).toEqual(3);
    });

    it ('skips roll2 if roll1 equals 10', function(){
      bowlingFrame.setFrame(10);
      bowlingFrame.setFrame(1);
      expect(bowlingFrame.roll2).toBeNull();
    });

    it ('has a bonus property', function(){
      expect(bowlingFrame.bonus).toBeDefined();
    });
  });

  describe('viewFrame', function(){
    it ('returns the total of all rolls for the frame property', function(){
      bowlingFrame.setFrame(4);
      bowlingFrame.setFrame(3);
      expect(bowlingFrame.viewFrame()).toEqual(bowlingFrame.roll1 + bowlingFrame.roll2);
    });
  });

});
