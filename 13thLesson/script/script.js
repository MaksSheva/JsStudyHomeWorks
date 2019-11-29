function Applliances(brand, model) {
    this._isOff = true;

    this.getInfo = function () {
        return brand + ' - ' + model;
    };
    this.setInfo = function (_brand, _model) {
        if (_brand) brand = _brand;
        if (_model) model = _model;
    }
};
let instance1 = new Applliances('Bosh', 'XX');

instance1.setInfo('Pofig');

console.log(instance1.getInfo());


function CofeeMachine(brand, model, capacity) {
    Applliances.call(this, brand, model);
    this.capacity = capacity;

    let volume = {
        min: 100,
        current: 0,
        max: capacity
    };

    this.setOn = function () {
        this._isOff = false;
    };
    this.setOff = function () {
        this._isOff = true;
    };

    this.setVolume = function (value) {
        volume.current = value + volume.current > volume.max ? volume.max : value;
    }

    this.makeOne = function () {
        if (this._isOff){
            alert('Please turn on');
            return;
        }
        if (volume.current < volume.min){
            alert('Dude, add some water');
            return;
        }
        alert('Cofee is ready');

        volume.current -= volume.min;
    }
}

let cofeeMachine = new CofeeMachine('Philips', '123', 1000);
cofeeMachine.setOn();
cofeeMachine.setVolume(200);
cofeeMachine.makeOne();
cofeeMachine.makeOne();
cofeeMachine.makeOne();