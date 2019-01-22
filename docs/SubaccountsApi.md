# Winsms.SubaccountsApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubAccounts**](SubaccountsApi.md#getSubAccounts) | **GET** /subaccounts | Get a list of all Sub Accounts.


<a name="getSubAccounts"></a>
# **getSubAccounts**
> SubAccountsResponse getSubAccounts()

Get a list of all Sub Accounts.

Get a list of all the Sub Accounts owned by the Main Account.

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.SubaccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubAccounts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SubAccountsResponse**](SubAccountsResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

