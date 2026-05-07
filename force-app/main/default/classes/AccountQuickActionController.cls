public with sharing class AccountQuickActionController {

    @AuraEnabled
    public static void updateAccountPhone(Id recordId, String phoneValue) {
        // Fetch account record
        Account acc = [SELECT Id, Phone FROM Account WHERE Id = :recordId LIMIT 1];
        // Update Phone field with value from LWC
        acc.Phone = phoneValue;
        update acc;
    }
}