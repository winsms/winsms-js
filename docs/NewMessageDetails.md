# Winsms.NewMessageDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | The SMS text to be sent. | 
**recipients** | [**[MessageRecipientDetails]**](MessageRecipientDetails.md) | An array of messageRecipientDetails objects. | 
**scheduledTime** | **Number** | ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.  If specified, this value should have the format YYYYMMDDHHmm.  | [optional] 
**maxSegments** | **Number** | ***Optional*** - The maximum [GSM Encoded segment count](\&quot;https://support.winsms.co.za/rest/GSM\&quot;) that the message is allowed to utilise.  This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.  The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.  If you intend to send a message longer than 160 characters, this value should be specified.  | [optional] 


