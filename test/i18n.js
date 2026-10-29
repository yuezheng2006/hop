const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const i18n = require('../src/shared/i18n');
assert.equal(i18n.normalize('zh-Hans-CN'), 'zh-CN');
assert.equal(i18n.normalize('zh_TW'), 'zh-CN');
assert.equal(i18n.normalize('de-DE'), 'en');
const zh = i18n.create('zh-CN');
assert.equal(zh('Receiving from {0}', '月政的 Mac'), '正在接收来自 月政的 Mac 的文件');
assert.equal(zh('{0} of {1} · {2}%', '1 MB', '2 MB', 50), '1 MB / 2 MB · 50%');
assert.equal(zh('{0} more', '<文件>{1}'), '另有 <文件>{1} 项');
assert.equal(zh('toString'), 'toString');
assert.equal(zh('ENOENT: custom diagnostic'), 'ENOENT: custom diagnostic');
assert.equal(i18n.create('en')('Received from {0}', 'PC'), 'Received from PC');
// The renderer has no Node module loader; exercise that export path separately.
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(require.resolve('../src/shared/i18n'), 'utf8'), context);
assert.equal(context.hopI18n.create('zh')('Accept'), '接收');
console.log('i18n ok: locales, interpolation, fallback, sandbox export');
