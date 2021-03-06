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
    define(['ApiClient', 'model/IncomingMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IncomingMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.Winsms) {
      root.Winsms = {};
    }
    root.Winsms.IncomingMessageResponse = factory(root.Winsms.ApiClient, root.Winsms.IncomingMessage);
  }
}(this, function(ApiClient, IncomingMessage) {
  'use strict';




  /**
   * The IncomingMessageResponse model module.
   * @module model/IncomingMessageResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IncomingMessageResponse</code>.
   * @alias module:model/IncomingMessageResponse
   * @class
   * @param timeStamp {String} The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
   * @param version {String} The current version of the API of the endpoint that was called
   * @param statusCode {Number} The http status code returned - reflected in the body for convenience
   * @param resultsOffset {Number} The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0. 
   * @param resultsLimit {Number} The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100. 
   * @param resultsTotalAvailable {Number} The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned. 
   * @param incomingMessages {Array.<module:model/IncomingMessage>} An array of ***incomingMessage*** objects containing properties of each incoming message. 
   */
  var exports = function(timeStamp, version, statusCode, resultsOffset, resultsLimit, resultsTotalAvailable, incomingMessages) {
    var _this = this;

    _this['timeStamp'] = timeStamp;
    _this['version'] = version;
    _this['statusCode'] = statusCode;
    _this['resultsOffset'] = resultsOffset;
    _this['resultsLimit'] = resultsLimit;
    _this['resultsTotalAvailable'] = resultsTotalAvailable;
    _this['incomingMessages'] = incomingMessages;
  };

  /**
   * Constructs a <code>IncomingMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncomingMessageResponse} obj Optional instance to populate.
   * @return {module:model/IncomingMessageResponse} The populated <code>IncomingMessageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timeStamp')) {
        obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
      }
      if (data.hasOwnProperty('resultsOffset')) {
        obj['resultsOffset'] = ApiClient.convertToType(data['resultsOffset'], 'Number');
      }
      if (data.hasOwnProperty('resultsLimit')) {
        obj['resultsLimit'] = ApiClient.convertToType(data['resultsLimit'], 'Number');
      }
      if (data.hasOwnProperty('resultsTotalAvailable')) {
        obj['resultsTotalAvailable'] = ApiClient.convertToType(data['resultsTotalAvailable'], 'Number');
      }
      if (data.hasOwnProperty('incomingMessages')) {
        obj['incomingMessages'] = ApiClient.convertToType(data['incomingMessages'], [IncomingMessage]);
      }
    }
    return obj;
  }

  /**
   * The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
   * @member {String} timeStamp
   */
  exports.prototype['timeStamp'] = undefined;
  /**
   * The current version of the API of the endpoint that was called
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * The http status code returned - reflected in the body for convenience
   * @member {Number} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0. 
   * @member {Number} resultsOffset
   */
  exports.prototype['resultsOffset'] = undefined;
  /**
   * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100. 
   * @member {Number} resultsLimit
   */
  exports.prototype['resultsLimit'] = undefined;
  /**
   * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned. 
   * @member {Number} resultsTotalAvailable
   */
  exports.prototype['resultsTotalAvailable'] = undefined;
  /**
   * An array of ***incomingMessage*** objects containing properties of each incoming message. 
   * @member {Array.<module:model/IncomingMessage>} incomingMessages
   */
  exports.prototype['incomingMessages'] = undefined;



  return exports;
}));


