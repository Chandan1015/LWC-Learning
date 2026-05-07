public with sharing class AccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Id, Name, AccountNumber, Type, Rating, Industry FROM Account Limit 10 ];
    }
}