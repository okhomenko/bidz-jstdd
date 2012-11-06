describe('Odograph', function() {

  it('can we test', function () {

  });

  describe('#constructor', function () {
    it('accept value on init', function () {
      var value = 'value';
      var odo = new Odograph(value);

      expect(odo.value).toBe(value);
    });

  });

  describe('Methods', function () {

    beforeEach(function () {
      this.value = 123;
      this.odo = new Odograph(this.value);
    });

    describe('#render', function () {

      it('should create div.odograph', function () {
        this.odo.render();
        expect(this.odo.el).toBe('div.odograph');
        expect(this.odo.el).toHaveText(this.value);
      });

      it('should return itself', function () {
        expect(this.odo.render()).toBe(this.odo);
      });

      it('should call callback if defined', function () {
        var callbackSpy = jasmine.createSpy('callback');
        this.odo.render(callbackSpy);
        expect(callbackSpy).toHaveBeenCalled();
      });

      it('should call callback with this.el', function () {
        var callbackSpy = jasmine.createSpy('callback');
        this.odo.render(callbackSpy);
        expect(callbackSpy).toHaveBeenCalledWith(this.odo.el);
      });

    });

    describe('#decrease', function () {

      beforeEach(function () {
        spyOn(Odograph.prototype, 'update').andCallFake(function(){});
      });

      it('should decrease value on 1 if value is not defined', function () {
        this.odo.decrease();
        expect(this.odo.value).toBe(this.value - 1);
      });

      it('should decrease value on value if value is defined', function () {
        var decrement = 3;
        this.odo.decrease(decrement);
        expect(this.odo.value).toBe(this.value - decrement);
      });

      it('should call update every call', function() {
        this.odo.decrease();
        expect(Odograph.prototype.update).toHaveBeenCalled();
      });

    });

    describe('#update', function () {

      beforeEach(function () {
        this.odo.el = $('<span>');
        this.odo.update();
      });

      it('should set this.value into our this.el', function() {
        expect(this.odo.el).toHaveText(this.value);
      })

      it('should set classname decreased to our this.el', function() {
        expect(this.odo.el).toBe('.decreased');
      });

    });

  });





});