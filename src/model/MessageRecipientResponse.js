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
    root.Winsms.MessageRecipientResponse = factory(root.Winsms.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageRecipientResponse model module.
   * @module model/MessageRecipientResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MessageRecipientResponse</code>.
   * @alias module:model/MessageRecipientResponse
   * @class
   * @param clientMessageId {String} If the optional ***clientMessageId*** value was specified in the recipient object for the recipient, it will be returned here. If not, ***clientMessageId*** will be **null**. 
   * @param mobileNumber {String} The mobile number specified as the ***mobileNumber*** value of the recipient object of the request. 
   * @param accepted {Boolean} A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be **false** If you have insufficient credits or the recipient mobile number supplied is not valid. 
   * @param acceptError {String} If the ***accepted*** value is **false**, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank. 
   * @param apiMessageId {Number} The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be **null**. 
   * @param scheduledTime {Number} The date and time that the message was scheduled for delivery to the recipient.  If no ***scheduledTime*** value was specified in the request, or the recipient was not accepted for delivery, this value will be **null**. 
   * @param creditCost {Number} The number of credits deducted from your account for the SMS to this recipient.  The credit cost is based on the destination country of the recipient and the length (number of segments) of the message.  This credit cost will be reimbursed if the message is scheduled and subsequently deleted.  If the recipient is not accepted for delivery, the ***creditCost*** value will be **null**. 
   * @param newCreditBalance {Number} The number of WinSMS credits remaining in your account after processing this recipient. 
   */
  var exports = function(clientMessageId, mobileNumber, accepted, acceptError, apiMessageId, scheduledTime, creditCost, newCreditBalance) {
    var _this = this;

    _this['clientMessageId'] = clientMessageId;
    _this['mobileNumber'] = mobileNumber;
    _this['accepted'] = accepted;
    _this['acceptError'] = acceptError;
    _this['apiMessageId'] = apiMessageId;
    _this['scheduledTime'] = scheduledTime;
    _this['creditCost'] = creditCost;
    _this['newCreditBalance'] = newCreditBalance;
  };

  /**
   * Constructs a <code>MessageRecipientResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageRecipientResponse} obj Optional instance to populate.
   * @return {module:model/MessageRecipientResponse} The populated <code>MessageRecipientResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientMessageId')) {
        obj['clientMessageId'] = ApiClient.convertToType(data['clientMessageId'], 'String');
      }
      if (data.hasOwnProperty('mobileNumber')) {
        obj['mobileNumber'] = ApiClient.convertToType(data['mobileNumber'], 'String');
      }
      if (data.hasOwnProperty('accepted')) {
        obj['accepted'] = ApiClient.convertToType(data['accepted'], 'Boolean');
      }
      if (data.hasOwnProperty('acceptError')) {
        obj['acceptError'] = ApiClient.convertToType(data['acceptError'], 'String');
      }
      if (data.hasOwnProperty('apiMessageId')) {
        obj['apiMessageId'] = ApiClient.convertToType(data['apiMessageId'], 'Number');
      }
      if (data.hasOwnProperty('scheduledTime')) {
        obj['scheduledTime'] = ApiClient.convertToType(data['scheduledTime'], 'Number');
      }
      if (data.hasOwnProperty('creditCost')) {
        obj['creditCost'] = ApiClient.convertToType(data['creditCost'], 'Number');
      }
      if (data.hasOwnProperty('newCreditBalance')) {
        obj['newCreditBalance'] = ApiClient.convertToType(data['newCreditBalance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * If the optional ***clientMessageId*** value was specified in the recipient object for the recipient, it will be returned here. If not, ***clientMessageId*** will be **null**. 
   * @member {String} clientMessageId
   */
  exports.prototype['clientMessageId'] = undefined;
  /**
   * The mobile number specified as the ***mobileNumber*** value of the recipient object of the request. 
   * @member {String} mobileNumber
   */
  exports.prototype['mobileNumber'] = undefined;
  /**
   * A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be **false** If you have insufficient credits or the recipient mobile number supplied is not valid. 
   * @member {Boolean} accepted
   */
  exports.prototype['accepted'] = undefined;
  /**
   * If the ***accepted*** value is **false**, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank. 
   * @member {String} acceptError
   */
  exports.prototype['acceptError'] = undefined;
  /**
   * The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be **null**. 
   * @member {Number} apiMessageId
   */
  exports.prototype['apiMessageId'] = undefined;
  /**
   * The date and time that the message was scheduled for delivery to the recipient.  If no ***scheduledTime*** value was specified in the request, or the recipient was not accepted for delivery, this value will be **null**. 
   * @member {Number} scheduledTime
   */
  exports.prototype['scheduledTime'] = undefined;
  /**
   * The number of credits deducted from your account for the SMS to this recipient.  The credit cost is based on the destination country of the recipient and the length (number of segments) of the message.  This credit cost will be reimbursed if the message is scheduled and subsequently deleted.  If the recipient is not accepted for delivery, the ***creditCost*** value will be **null**. 
   * @member {Number} creditCost
   */
  exports.prototype['creditCost'] = undefined;
  /**
   * The number of WinSMS credits remaining in your account after processing this recipient. 
   * @member {Number} newCreditBalance
   */
  exports.prototype['newCreditBalance'] = undefined;



  return exports;
}));


