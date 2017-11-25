/*
 * Arduino MCP4xxx library API wrapper
 */

#include "mcp4xxx.h"

#ifdef __cplusplus
extern "C"
{
#endif


MCP4XXX *mgos_mcp4xxx_create(int pin, int pot, int res, int config);

int mgos_mcp4xxx_maxValue(MCP4XXX *mcp4x);

int mgos_mcp4xxx_set(MCP4XXX *mcp4x, int value);

#ifdef __cplusplus
}
#endif  /* __cplusplus */
