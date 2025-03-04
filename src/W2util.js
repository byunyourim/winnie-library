/**
 * winnie javascript library
 *
 * @author winnie
 * @since  1.0
 */
var $W2util = (function () {
  'use strict';

  var _utils = {
    /**
     * validation
     */
    isBlank: function() {},
    isEmpty: function () {},
    isValid: function () {},
    deleteSpace: function () {},
    /**
     * formatting
     */
    addComma: function (src) {
      return src.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    numToPercentage: function (src) {
      if (typeof src == 'number') {
        return src * 0.01;
      }
      return undefined;
    },
    formatDate: function () {},
    setPeriod: function () {},
    upperCase: function () {},
    downCase: function () {},
    capitalize: function () {},
    /**
     * Array
     */
    uniqueArray: function () {},
    shallowCopy: function () {},
    deepCopy: function () {},
    /**
     * convert
     */
    templateParse: function () {},
    formToJson: function () {},
    /**
     * validation
     */
    isValidEmail: function () {},
    isValidPassword: function () {},
    isValidId: function () {},
    validPhoneNumber: function () {},
    isValidUrl: function () {},
    isNumeric: function () {}
  };

  return _utils;

})();

