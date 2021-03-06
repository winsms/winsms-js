/**
 * WinSMS
 * WinSMS RESTful API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@winsms.co.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Winsms) {
      root.Winsms = {};
    }
    root.Winsms.SubAccount = factory(root.Winsms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubAccount model module.
   * @module model/SubAccount
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubAccount</code>.
   * @alias module:model/SubAccount
   * @class
   * @param accountNumber {Number} The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading 'W' displayed in the WinSMS Client Zone. 
   * @param loginName {String} The login name of the user that the Sub Account is registered to. 
   * @param firstName {Number} The first name of the user that the Sub Account is registered to. 
   * @param surname {String} The surname of the user that the Sub Account is registered to. 
   * @param creditBalance {Number} The remaining credit balance for the Sub Account. 
   */
  var exports = function(accountNumber, loginName, firstName, surname, creditBalance) {
    var _this = this;

    _this['accountNumber'] = accountNumber;
    _this['loginName'] = loginName;
    _this['firstName'] = firstName;
    _this['surname'] = surname;
    _this['creditBalance'] = creditBalance;
  };

  /**
   * Constructs a <code>SubAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubAccount} obj Optional instance to populate.
   * @return {module:model/SubAccount} The populated <code>SubAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountNumber')) {
        obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
      }
      if (data.hasOwnProperty('loginName')) {
        obj['loginName'] = ApiClient.convertToType(data['loginName'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'Number');
      }
      if (data.hasOwnProperty('surname')) {
        obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
      }
      if (data.hasOwnProperty('creditBalance')) {
        obj['creditBalance'] = ApiClient.convertToType(data['creditBalance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading 'W' displayed in the WinSMS Client Zone. 
   * @member {Number} accountNumber
   */
  exports.prototype['accountNumber'] = undefined;
  /**
   * The login name of the user that the Sub Account is registered to. 
   * @member {String} loginName
   */
  exports.prototype['loginName'] = undefined;
  /**
   * The first name of the user that the Sub Account is registered to. 
   * @member {Number} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * The surname of the user that the Sub Account is registered to. 
   * @member {String} surname
   */
  exports.prototype['surname'] = undefined;
  /**
   * The remaining credit balance for the Sub Account. 
   * @member {Number} creditBalance
   */
  exports.prototype['creditBalance'] = undefined;



  return exports;
}));


