public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry FROM Account LIMIT 5];

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%'+searchKey+'%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name Like :key LIMIT 5];

    }
}