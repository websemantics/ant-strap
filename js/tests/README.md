## How does Ant Strap's test suite work?

Ant Strap uses [QUnit](http://api.qunitjs.com/), a powerful, easy-to-use JavaScript unit test framework. Each plugin has a file dedicated to its tests in `unit/<plugin-name>.js`.

* `unit/` contains the unit test files for each Ant Strap plugin.
* `vendor/` contains third-party testing-related code (QUnit and jQuery).
* `visual/` contains "visual" tests which are run interactively in real browsers and require manual verification by humans.

To run the unit test suite via [PhantomJS](http://phantomjs.org/), run `grunt test-js`.

To run the unit test suite via a real web browser, open `index.html` in the browser.


## How do I add a new unit test?

1. Locate and open the file dedicated to the plugin which you need to add tests to (`unit/<plugin-name>.js`).
2. Review the [QUnit API Documentation](http://api.qunitjs.com/) and use the existing tests as references for how to structure your new tests.
3. Write the necessary unit test(s) for the new or revised functionality.
4. Run `grunt test-js` to see the results of your newly-added test(s).

**Note:** Your new unit tests should fail before your changes are applied to the plugin, and should pass after your changes are applied to the plugin.

More about unit testing in the original [Bootstrap documentation](http://v4-alpha.getbootstrap.com/).
