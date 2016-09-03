/**
 * --------------------------------------------------------------------------
 * Ant Strap (v1.0.1): custom.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import Util from './util'

const Custom = (($) => {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    const NAME = 'custom'
    const VERSION = '1.0.1'
    const DATA_KEY = 'bs.custom'
    const EVENT_KEY = `.${DATA_KEY}`
    const DATA_API_KEY = '.data-api'
    const JQUERY_NO_CONFLICT = $.fn[NAME]

    const ClassName = {
        ACTIVE: 'active',
        CUSTOM: 'ctm',
        FOCUS: 'focus'
    }

    const Selector = {
        DATA_TOGGLE_CARROT: '[data-action^="custom"]',
        DATA_TOGGLE: '[data-action="customss"]',
        INPUT: 'input',
        ACTIVE: '.active',
        CUSTOM: '.ctm'
    }

    const Event = {
        CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
        FOCUS_BLUR_DATA_API: `focus${EVENT_KEY}${DATA_API_KEY} ` +
            `blur${EVENT_KEY}${DATA_API_KEY}`
    }


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    class Custom {

        constructor(element) {
            this._element = element
        }

        // getters

        static get VERSION() {
            return VERSION
        }

        // public

        action() { /* called on click */
            let triggerChangeEvent = true
            let rootElement = $(this._element).closest(
                Selector.DATA_TOGGLE
            )[0]


        }

        // static

        static _jQueryInterface(config) {
            return this.each(function() {
                let data = $(this).data(DATA_KEY)

                if (!data) {
                    data = new Custom(this)
                    $(this).data(DATA_KEY, data)
                }

                if (config === 'action') {
                    data[config]()
                }
            })
        }

    }


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
        .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
            event.preventDefault()

            let custom = event.target

            if (!$(custom).hasClass(ClassName.CUSTOM)) {
                custom = $(custom).closest(Selector.CUSTOM)
            }

            Custom._jQueryInterface.call($(custom), 'action')
        })


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Custom._jQueryInterface
    $.fn[NAME].Constructor = Custom
    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return Custom._jQueryInterface
    }

    return Custom

})(jQuery)

export default Custom
