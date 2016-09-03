$(function () {
  'use strict';

    QUnit.module('custom plugin')

    QUnit.test('should be defined on jquery object', function (assert) {
      assert.expect(1)
      assert.ok($(document.body).custom, 'custom method is defined')
    })

    QUnit.module('custom', {
      beforeEach: function () {
        // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
        $.fn.bootstrapButton = $.fn.custom.noConflict()
      },
      afterEach: function () {
        $.fn.custom = $.fn.bootstrapButton
        delete $.fn.bootstrapButton
      }
    })

    QUnit.test('should provide no conflict', function (assert) {
      assert.expect(1)
      assert.strictEqual($.fn.custom, undefined, 'custom was set back to undefined (org value)')
    })

})
