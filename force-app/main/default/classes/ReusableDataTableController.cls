public with sharing class ReusableDataTableController {

    @AuraEnabled(cacheable=true)
    public static List<SObject> fetchRecords(
        String objectName,
        String fields,
        String searchKey,
        Integer limitSize,
        Integer offsetSize
    ) {
        if (String.isBlank(objectName) || String.isBlank(fields)) {
            throw new AuraHandledException('Object and fields are required');
        }

        String query = 'SELECT ' + fields + ' FROM ' + objectName;

        if (String.isNotBlank(searchKey)) {
            List<String> conditions = new List<String>();

            for (String f : fields.split(',')) {
                String fieldName = f.trim();

                if (fieldName.equalsIgnoreCase('Id')) {
                    conditions.add(fieldName + ' = \'' + searchKey + '\'');
                } else {
                    conditions.add(fieldName + ' LIKE \'%' + searchKey + '%\'');
                }
            }

            if (!conditions.isEmpty()) {
                query += ' WHERE ' + String.join(conditions, ' OR ');
            }
        }

        query += ' LIMIT :limitSize OFFSET :offsetSize';

        return Database.query(query);
    }

    @AuraEnabled
    public static String generateCSV(String objectName, String fields) {

        List<SObject> records = Database.query(
            'SELECT ' + fields + ' FROM ' + objectName
        );

        String csv = fields + '\n';

        for (SObject rec : records) {
            List<String> row = new List<String>();

            for (String f : fields.split(',')) {
                row.add(String.valueOf(rec.get(f.trim())));
            }

            csv += String.join(row, ',') + '\n';
        }

        return csv;
    }
}