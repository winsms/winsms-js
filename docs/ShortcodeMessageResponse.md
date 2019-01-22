# Winsms.ShortcodeMessageResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeStamp** | **String** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | 
**version** | **String** | The current version of the API of the endpoint that was called | 
**statusCode** | **Number** | The http status code returned - reflected in the body for convenience | 
**resultsOffset** | **Number** | The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.  | 
**resultsLimit** | **Number** | The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.  | 
**resultsTotalAvailable** | **Number** | The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.  | 
**shortcodeMessages** | [**[ShortcodeMessage]**](ShortcodeMessage.md) | An array of ***shortcodeMessage*** objects containing properties of each incoming shortcode message received by WinSMS.  | 


