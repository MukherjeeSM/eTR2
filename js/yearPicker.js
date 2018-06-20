
function picker(self){
	 // var self = this;
        var today = new Date();
        var app = self.$app;
        console.log(1234);
        // iOS Device picker
        self.pickerDevice = app.picker.create({
          inputEl: '#demo-picker-device',
          cols: [
            {
              textAlign: 'center',
              values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }
          ]
        });
}