import assert from 'node:assert/strict'
import { translateUiText } from '../packages/standalone/frontend/locale.mjs'

assert.equal(translateUiText('概览', 'en'), 'Overview')
assert.equal(translateUiText('模型清单', 'en'), 'Model catalog')
assert.equal(translateUiText('服务设置', 'en'), 'Service settings')
assert.equal(translateUiText('第 2 / 4 页', 'en'), 'Page 2 of 4')
assert.equal(translateUiText('3 个模型', 'en'), '3 models')
assert.equal(translateUiText('已清除 2 个出口的冷却。', 'en'), 'Cleared cooldown for 2 exits.')
assert.equal(translateUiText('概览', 'zh-CN'), '概览')
assert.equal(translateUiText('Already English', 'en'), 'Already English')

console.log('Standalone UI locale tests passed.')
