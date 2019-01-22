# Winsms.ScheduledMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiMessageId** | **Number** | The WinSMS API Message Id identifying the SMS message. | 
**mobileNumber** | **String** | The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format | 
**submitTime** | **Number** | The date and time the message was originally submitted for scheduled delivery, in the format YYYYMMDDHHmm. | 
**scheduledSendTime** | **Number** | The date and time the message is scheduled to be delivered to the recipient, in the format YYYYMMDDHHmm. | 
**creditCost** | **Number** | The number of credits deducted from your account for the SMS to this recipient.  This is the number of credits that will be refunded if you delete this scheduled message.  | 


