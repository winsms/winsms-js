# Winsms.ShortcodeApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getShortCodeMessages**](ShortcodeApi.md#getShortCodeMessages) | **GET** /shortcode/incoming | Get a list of incoming short/long code messages 


<a name="getShortCodeMessages"></a>
# **getShortCodeMessages**
> ShortcodeMessageResponse getShortCodeMessages(opts)

Get a list of incoming short/long code messages 

***Only available to users with a [WinSMS Short/Long Code](https://support.winsms.co.za/winsms-long-short-code-system/).*** Get a list of all incoming short/long code messages received by the account.  Only the first 100 incoming short/long code messages will be returned if no ***offset*** and ***limit*** parameters are specified. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.ShortcodeApi();

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
apiInstance.getShortCodeMessages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.  | [optional] [default to 0]
 **limit** | **Number**| ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.  | [optional] [default to 100]

### Return type

[**ShortcodeMessageResponse**](ShortcodeMessageResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

