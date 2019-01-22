# Winsms.SmsApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteScheduledMessages**](SmsApi.md#deleteScheduledMessages) | **POST** /sms/scheduled/delete | Delete scheduled SMS messages and refund credits
[**getIncomingMessages**](SmsApi.md#getIncomingMessages) | **GET** /sms/incoming | Get a list of incoming SMS messages
[**getOptoutMessages**](SmsApi.md#getOptoutMessages) | **GET** /sms/incoming/optout | Get a list of incoming opt-out SMS messages
[**getScheduledMessages**](SmsApi.md#getScheduledMessages) | **GET** /sms/scheduled | Get a list of scheduled SMS messages
[**smsSend**](SmsApi.md#smsSend) | **POST** /sms/outgoing/send | Send SMS messages
[**smsStatus**](SmsApi.md#smsStatus) | **POST** /sms/outgoing/status | Get SMS delivery statuses


<a name="deleteScheduledMessages"></a>
# **deleteScheduledMessages**
> DeleteScheduledResponse deleteScheduledMessages(messageDeleteRequest)

Delete scheduled SMS messages and refund credits

Delete a list of previously scheduled SMS messages that have not yet been sent.  Credits originally deducted for each SMS message will be refunded to your account upon successful deletion. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SmsApi();

var messageDeleteRequest = [new Winsms.[Number]()]; // [Number] | An array of WinSMS API Ids received after submitting scheduled messages to the ***_/sms/outgoing/send*** endpoint.<br> A maximum of 1000 API Ids can be supplied in a single request. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteScheduledMessages(messageDeleteRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageDeleteRequest** | **[Number]**| An array of WinSMS API Ids received after submitting scheduled messages to the ***_/sms/outgoing/send*** endpoint.&lt;br&gt; A maximum of 1000 API Ids can be supplied in a single request.  | 

### Return type

[**DeleteScheduledResponse**](DeleteScheduledResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIncomingMessages"></a>
# **getIncomingMessages**
> IncomingMessageResponse getIncomingMessages(opts)

Get a list of incoming SMS messages

Get a list of all incoming SMS messages received by the account.  Only the first 100 incoming messages will be returned if no ***offset*** and ***limit*** parameters are specified. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SmsApi();

var opts = { 
  'offset': 0, // Number | ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0. 
  'limit': 100 // Number | ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIncomingMessages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  | [optional] [default to 0]
 **limit** | **Number**| ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  | [optional] [default to 100]

### Return type

[**IncomingMessageResponse**](IncomingMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOptoutMessages"></a>
# **getOptoutMessages**
> OptoutMessageResponse getOptoutMessages()

Get a list of incoming opt-out SMS messages

Get a list of all opt-out SMS messages received by the account, as well as all manually added opt-out numbers.&lt;br&gt;

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SmsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOptoutMessages(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OptoutMessageResponse**](OptoutMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheduledMessages"></a>
# **getScheduledMessages**
> MessageStatusResponse1 getScheduledMessages(opts)

Get a list of scheduled SMS messages

Get a list of all scheduled SMS messages that have not yet been sent.  Only the first 100 scheduled messages will be returned if no ***offset*** and ***limit*** parameters are specified. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SmsApi();

var opts = { 
  'offset': 0, // Number | ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0. 
  'limit': 100 // Number | ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScheduledMessages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  | [optional] [default to 0]
 **limit** | **Number**| ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  | [optional] [default to 100]

### Return type

[**MessageStatusResponse1**](MessageStatusResponse1.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="smsSend"></a>
# **smsSend**
> NewMessageResponse smsSend(newMessageDetails)

Send SMS messages

Submit 1 or more SMS messages to be sent by WinSMS. Maximum 1000 recipients per request.  The SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SmsApi();

var newMessageDetails = new Winsms.NewMessageDetails(); // NewMessageDetails | The message, recipients and delivery options of an SMS message to be sent. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.smsSend(newMessageDetails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newMessageDetails** | [**NewMessageDetails**](NewMessageDetails.md)| The message, recipients and delivery options of an SMS message to be sent.  | 

### Return type

[**NewMessageResponse**](NewMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="smsStatus"></a>
# **smsStatus**
> MessageStatusResponse smsStatus(messageStatusRequest)

Get SMS delivery statuses

Get a list of previously submitted SMS message delivery statuses.  Post an array of API Message Ids received from the ***_/sms/outgoing/send*** endpoint. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SmsApi();

var messageStatusRequest = [new Winsms.[Number]()]; // [Number] | An array of WinSMS API Ids received after submitting messages to the ***_/sms/outgoing/send*** endpoint.  A maximum of 1000 API Ids can be supplied in a single request. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.smsStatus(messageStatusRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageStatusRequest** | **[Number]**| An array of WinSMS API Ids received after submitting messages to the ***_/sms/outgoing/send*** endpoint.  A maximum of 1000 API Ids can be supplied in a single request.  | 

### Return type

[**MessageStatusResponse**](MessageStatusResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

