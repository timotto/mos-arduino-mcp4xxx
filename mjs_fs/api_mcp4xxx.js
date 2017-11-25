// Arduino MCP4xxx library API. Source C API is defined at:
// [mgos_arduino_mpc4xxx.h]

let Arduino_MCP4XXX = {
  _create: ffi('void *mgos_mcp4xxx_create(int, int, int, int)'),
  _maxValue: ffi('int mgos_mcp4xxx_maxValue(void *)'),
  _set: ffi('int mgos_mcp4xxx_set(void *, int)'),

  _proto: {
    close: function() {
      // return Adafruit_PWMServoDriver._close(this.pwm);
    },

    begin: function() {
      // return Adafruit_PWMServoDriver._begin(this.pwm);
    },
  },
	
	maxValue: function() {
      return Adafruit_MCP4XXX._maxValue(this.mcp4x);
    },
	
	set: function(value) {
      return Adafruit_MCP4XXX._set(this.mcp4x, value);
    },
	
  create: function(pin, pot, res, conf) {
    let obj = Object.create(Adafruit_MCP4XXX._proto);
    obj.mcp4x = Adafruit_MCP4XXX._create(pin, pot, res, conf);
    return obj;
  },

  createMCP4132: function(pin) {
    let obj = Object.create(Adafruit_MCP4XXX._proto);
    obj.mcp4x = Adafruit_MCP4XXX._create(pin, 0, 0, 0);
    return obj;
  }

}
