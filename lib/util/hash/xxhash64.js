/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const create = require("./wasm-hash");

// #region wasm code: xxhash64 (../../../assembly/hash/xxhash64.asm.ts) --initialMemory 1
/**
 * xxhash64 是一种非加密哈希算法，专为速度而优化，特别适合于大量数据的哈希计算。在 webpack 中，这类哈希函数通常用于：
 * - 内容哈希生成（用于缓存无效化）
 * - 模块标识符生成
 * - 构建过程中的各种内部优化
 */
const xxhash64 = new WebAssembly.Module(
	Buffer.from(
		// 1160 bytes
		"AGFzbQEAAAABCAJgAX8AYAAAAwQDAQAABQMBAAEGGgV+AUIAC34BQgALfgFCAAt+AUIAC34BQgALByIEBGluaXQAAAZ1cGRhdGUAAQVmaW5hbAACBm1lbW9yeQIACqgIAzAAQtbrgu7q/Yn14AAkAELP1tO+0ser2UIkAUIAJAJC+erQ0OfJoeThACQDQgAkBAvUAQIBfwR+IABFBEAPCyMEIACtfCQEIwAhAiMBIQMjAiEEIwMhBQNAIAIgASkDAELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiECIAMgASkDCELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiEDIAQgASkDEELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiEEIAUgASkDGELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiEFIAFBIGoiASAASQ0ACyACJAAgAyQBIAQkAiAFJAMLngYCAn8CfiMEQgBSBH4jAEIBiSMBQgeJfCMCQgyJfCMDQhKJfCMAQs/W077Sx6vZQn5CH4lCh5Wvr5i23puef36FQoeVr6+Ytt6bnn9+Qp2jteqDsY2K+gB9IwFCz9bTvtLHq9lCfkIfiUKHla+vmLbem55/foVCh5Wvr5i23puef35CnaO16oOxjYr6AH0jAkLP1tO+0ser2UJ+Qh+JQoeVr6+Ytt6bnn9+hUKHla+vmLbem55/fkKdo7Xqg7GNivoAfSMDQs/W077Sx6vZQn5CH4lCh5Wvr5i23puef36FQoeVr6+Ytt6bnn9+Qp2jteqDsY2K+gB9BULFz9my8eW66icLIwQgAK18fCEDA0AgAUEIaiICIABNBEAgAyABKQMAQs/W077Sx6vZQn5CH4lCh5Wvr5i23puef36FQhuJQoeVr6+Ytt6bnn9+Qp2jteqDsY2K+gB9IQMgAiEBDAELCyABQQRqIgIgAE0EQCADIAE1AgBCh5Wvr5i23puef36FQheJQs/W077Sx6vZQn5C+fPd8Zn2masWfCEDIAIhAQsDQCAAIAFHBEAgAyABMQAAQsXP2bLx5brqJ36FQguJQoeVr6+Ytt6bnn9+IQMgAUEBaiEBDAELC0EAIAMgA0IhiIVCz9bTvtLHq9lCfiIDQh2IIAOFQvnz3fGZ9pmrFn4iA0IgiCADhSIDQiCIIgRC//8Dg0IghiAEQoCA/P8Pg0IQiIQiBEL/gYCA8B+DQhCGIARCgP6DgIDgP4NCCIiEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEIIANC/////w+DIgNC//8Dg0IghiADQoCA/P8Pg0IQiIQiA0L/gYCA8B+DQhCGIANCgP6DgIDgP4NCCIiEIgNCj4C8gPCBwAeDQgiGIANC8IHAh4CegPgAg0IEiIQiA0KGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gA0Kw4MCBg4aMmDCEfDcDAAs=",
		"base64"
	)
);
// #endregion

module.exports = create.bind(null, xxhash64, [], 32, 16);
