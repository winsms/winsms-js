# Winsms.DeletedMessageStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiMessageId** | **Number** | The WinSMS API Message Id identifying the SMS message.  | 
**mobileNumber** | **String** | The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format  | 
**deleted** | **Boolean** | A boolean value indicating whether a scheduled SMS message was successfully deleted  | 
**deleteError** | **String** | If the ***deleted*** value is false, this will contain an error code indicating the reason for the failure. If the scheduled SMS message was successfully deleted, this value will be blank.  | 
**creditCost** | **Number** | The number of credits refunded to your account after deleting the scheduled message.  If the deletion was unsuccessful, this value will be 0.  | 


