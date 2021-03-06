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
    define(['ApiClient', 'model/MessageRecipientDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageRecipientDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Winsms) {
      root.Winsms = {};
    }
    root.Winsms.NewMessageDetails = factory(root.Winsms.ApiClient, root.Winsms.MessageRecipientDetails);
  }
}(this, function(ApiClient, MessageRecipientDetails) {
  'use strict';




  /**
   * The NewMessageDetails model module.
   * @module model/NewMessageDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NewMessageDetails</code>.
   * @alias module:model/NewMessageDetails
   * @class
   * @param message {String} The SMS text to be sent.
   * @param recipients {Array.<module:model/MessageRecipientDetails>} An array of messageRecipientDetails objects.
   */
  var exports = function(message, recipients) {
    var _this = this;

    _this['message'] = message;
    _this['recipients'] = recipients;


  };

  /**
   * Constructs a <code>NewMessageDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewMessageDetails} obj Optional instance to populate.
   * @return {module:model/NewMessageDetails} The populated <code>NewMessageDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], [MessageRecipientDetails]);
      }
      if (data.hasOwnProperty('scheduledTime')) {
        obj['scheduledTime'] = ApiClient.convertToType(data['scheduledTime'], 'Number');
      }
      if (data.hasOwnProperty('maxSegments')) {
        obj['maxSegments'] = ApiClient.convertToType(data['maxSegments'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The SMS text to be sent.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * An array of messageRecipientDetails objects.
   * @member {Array.<module:model/MessageRecipientDetails>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.  If specified, this value should have the format YYYYMMDDHHmm. 
   * @member {Number} scheduledTime
   */
  exports.prototype['scheduledTime'] = undefined;
  /**
   * ***Optional*** - The maximum [GSM Encoded segment count](\"https://support.winsms.co.za/rest/GSM\") that the message is allowed to utilise.  This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.  The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.  If you intend to send a message longer than 160 characters, this value should be specified. 
   * @member {Number} maxSegments
   */
  exports.prototype['maxSegments'] = undefined;



  return exports;
}));


