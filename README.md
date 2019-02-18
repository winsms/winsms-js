# WinSMS - JavaScript Client

- API version: 1.0.0
- Package version: 1.0.0

For more information, please visit [http://support.winsms.co.za/](http://support.winsms.co.za/)

> # DISCLAIMER:
> The SDK is provided as a guideline to accessing the WinSMS API. The code is provided "as is" without any guarantees. Depending on your environment, the SDK may not work "out-of-the-box", therefore it is expected that you have sufficient technical knowledge and development skills to address any coding issues that may arise from using this SDK.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install winsms --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your winsms from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('winsms')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/winsms
then install it via:

```shell
    npm install YOUR_USERNAME/winsms --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Winsms = require('winsms');

var defaultClient = Winsms.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix['AUTHORIZATION'] = "Token"

var api = new Winsms.CreditsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCreditBalance(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.winsms.co.za/api/rest/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Winsms.CreditsApi* | [**getCreditBalance**](docs/CreditsApi.md#getCreditBalance) | **GET** /credits/balance | Get your current WinSMS credit balance
*Winsms.CreditsApi* | [**transferCredits**](docs/CreditsApi.md#transferCredits) | **POST** /credits/transfer | Transfer credits between main and sub accounts.
*Winsms.ShortcodeApi* | [**getShortCodeMessages**](docs/ShortcodeApi.md#getShortCodeMessages) | **GET** /shortcode/incoming | Get a list of incoming short/long code messages 
*Winsms.SmsApi* | [**deleteScheduledMessages**](docs/SmsApi.md#deleteScheduledMessages) | **POST** /sms/scheduled/delete | Delete scheduled SMS messages and refund credits
*Winsms.SmsApi* | [**getIncomingMessages**](docs/SmsApi.md#getIncomingMessages) | **GET** /sms/incoming | Get a list of incoming SMS messages
*Winsms.SmsApi* | [**getOptoutMessages**](docs/SmsApi.md#getOptoutMessages) | **GET** /sms/incoming/optout | Get a list of incoming opt-out SMS messages
*Winsms.SmsApi* | [**getScheduledMessages**](docs/SmsApi.md#getScheduledMessages) | **GET** /sms/scheduled | Get a list of scheduled SMS messages
*Winsms.SmsApi* | [**smsSend**](docs/SmsApi.md#smsSend) | **POST** /sms/outgoing/send | Send SMS messages
*Winsms.SmsApi* | [**smsStatus**](docs/SmsApi.md#smsStatus) | **POST** /sms/outgoing/status | Get SMS delivery statuses
*Winsms.SubaccountsApi* | [**getSubAccounts**](docs/SubaccountsApi.md#getSubAccounts) | **GET** /subaccounts | Get a list of all Sub Accounts.


## Documentation for Models

 - [Winsms.CreditBalanceResponse](docs/CreditBalanceResponse.md)
 - [Winsms.CreditTransferDetails](docs/CreditTransferDetails.md)
 - [Winsms.CreditTransferResponse](docs/CreditTransferResponse.md)
 - [Winsms.DeleteScheduledResponse](docs/DeleteScheduledResponse.md)
 - [Winsms.DeletedMessageStatus](docs/DeletedMessageStatus.md)
 - [Winsms.ErrorDetails](docs/ErrorDetails.md)
 - [Winsms.IncomingMessage](docs/IncomingMessage.md)
 - [Winsms.IncomingMessageResponse](docs/IncomingMessageResponse.md)
 - [Winsms.IncomingOptoutMessage](docs/IncomingOptoutMessage.md)
 - [Winsms.MessageRecipientDetails](docs/MessageRecipientDetails.md)
 - [Winsms.MessageRecipientResponse](docs/MessageRecipientResponse.md)
 - [Winsms.MessageStatus](docs/MessageStatus.md)
 - [Winsms.MessageStatusResponse](docs/MessageStatusResponse.md)
 - [Winsms.NewMessageDetails](docs/NewMessageDetails.md)
 - [Winsms.NewMessageResponse](docs/NewMessageResponse.md)
 - [Winsms.OptoutMessageResponse](docs/OptoutMessageResponse.md)
 - [Winsms.ScheduledMessage](docs/ScheduledMessage.md)
 - [Winsms.ScheduledMessageResponse](docs/ScheduledMessageResponse.md)
 - [Winsms.ShortcodeMessage](docs/ShortcodeMessage.md)
 - [Winsms.ShortcodeMessageResponse](docs/ShortcodeMessageResponse.md)
 - [Winsms.SubAccount](docs/SubAccount.md)
 - [Winsms.SubAccountsResponse](docs/SubAccountsResponse.md)


## Documentation for Authorization


### APIKeyHeader

- **Type**: API key
- **API key parameter name**: AUTHORIZATION
- **Location**: HTTP header

