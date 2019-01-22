# Winsms.CreditsApi

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCreditBalance**](CreditsApi.md#getCreditBalance) | **GET** /credits/balance | Get your current WinSMS credit balance
[**transferCredits**](CreditsApi.md#transferCredits) | **POST** /credits/transfer | Transfer credits between main and sub accounts.


<a name="getCreditBalance"></a>
# **getCreditBalance**
> CreditBalanceResponse getCreditBalance()

Get your current WinSMS credit balance

Get the current remaining credit balance for the account.  ***Note*** - The credit balance is expressed as a value with a single decimal place. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.CreditsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCreditBalance(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CreditBalanceResponse**](CreditBalanceResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferCredits"></a>
# **transferCredits**
> CreditTransferResponse transferCredits(creditTransferDetails)

Transfer credits between main and sub accounts.

Transfer credits between accounts. - From Main account to Sub account.  - From Sub account to Main account.  - From Sub account to another Sub account.  Your WinSMS account number and sub account number/s can be obtained by logging in to the WinSMS Client Zone (www.winsms.co.za/cz) with the main account&#39;s credentials.  The main account number is on the home tab and the sub account numbers are under the sub accounts tab.  Account numbers should be submitted as integers. Do not add the &#39;W&#39; prefix. 

### Example
```javascript
var Winsms = require('winsms');
var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Winsms.CreditsApi();

var creditTransferDetails = new Winsms.CreditTransferDetails(); // CreditTransferDetails | The details of the credit transfer. Sender account number, recipient account number, and number of credits to transfer.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transferCredits(creditTransferDetails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditTransferDetails** | [**CreditTransferDetails**](CreditTransferDetails.md)| The details of the credit transfer. Sender account number, recipient account number, and number of credits to transfer. | 

### Return type

[**CreditTransferResponse**](CreditTransferResponse.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

