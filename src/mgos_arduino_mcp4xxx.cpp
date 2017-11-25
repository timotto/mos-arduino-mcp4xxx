
#include "mgos_arduino_mcp4xxx.h"

MCP4XXX *mgos_mcp4xxx_create(int pin, int pot, int res, int config) {
  return new MCP4XXX(pin, pot, res, config);
}

int mgos_mcp4xxx_maxValue(MCP4XXX *mcp4x) {
  return mcp4x->max_value();
}

int mgos_mcp4xxx_set(MCP4XXX *mcp4x, int value) {
  return mcp4x->set(value);
}

