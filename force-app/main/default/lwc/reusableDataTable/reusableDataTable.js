import { LightningElement, api, track } from 'lwc';
import fetchRecords from '@salesforce/apex/ReusableDataTableController.fetchRecords';
import generateCSV from '@salesforce/apex/ReusableDataTableController.generateCSV';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ReusableDataTable extends LightningElement {

    @api objectName;

    _fields;
    @api
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = value;
        this.initColumns();
        this.loadData();
    }

    @api title = 'Reusable Data Table';

    @api rowActions = [
        { label: 'Edit', name: 'edit' },
        { label: 'Delete', name: 'delete' }
    ];

    @track records = [];
    @track columns = [];
    @track error;
    @track isLoading = false;
    @track draftValues = [];

    pageSize = 10;
    pageNumber = 0;

    sortedBy;
    sortedDirection = 'asc';

    searchKey = '';
    selectedFilterField;
    filterValue = '';

    connectedCallback() {
        if (this.objectName && this.fields) {
            this.initColumns();
            this.loadData();
        }
    }

    get fieldArray() {
        return this.fields ? this.fields.split(',').map(f => f.trim()) : [];
    }

    initColumns() {
        if (!this.fields) return;

        this.columns = this.fieldArray.map(field => ({
            label: field,
            fieldName: field,
            editable: true,
            sortable: true,
            type: 'text'
        }));

        this.columns.push({
            type: 'action',
            typeAttributes: {
                rowActions: this.rowActions
            }
        });
    }

    loadData() {
        if (!this.objectName || !this.fields) return;

        this.isLoading = true;

        fetchRecords({
            objectName: this.objectName,
            fields: this.fields,
            searchKey: this.searchKey,
            limitSize: this.pageSize,
            offsetSize: this.pageNumber * this.pageSize
        })
        .then(data => {
            this.records = data;
            this.error = undefined;
        })
        .catch(err => {
            this.error = err.body?.message || err.message;
            this.records = [];
        })
        .finally(() => {
            this.isLoading = false;
        });
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
        this.pageNumber = 0;
        this.loadData();
    }

    get fieldOptions() {
        return this.fieldArray.map(f => ({
            label: f,
            value: f
        }));
    }

    handleFilterFieldChange(event) {
        this.selectedFilterField = event.detail.value;
    }

    handleFilterValue(event) {
        this.filterValue = event.target.value;
    }

    get displayData() {
        let data = [...this.records];

        if (this.selectedFilterField && this.filterValue) {
            data = data.filter(r =>
                (r[this.selectedFilterField] || '')
                    .toString()
                    .toLowerCase()
                    .includes(this.filterValue.toLowerCase())
            );
        }

        const start = this.pageNumber * this.pageSize;
        return data.slice(start, start + this.pageSize);
    }

    prevPage() {
        if (this.pageNumber > 0) {
            this.pageNumber--;
            this.loadData(); 
        }
    }

    nextPage() {
        this.pageNumber++;
        this.loadData();
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortedDirection = event.detail.sortDirection;

        let data = [...this.records];

        data.sort((a, b) => {
            let v1 = a[this.sortedBy] || '';
            let v2 = b[this.sortedBy] || '';

            return this.sortedDirection === 'asc'
                ? (v1 > v2 ? 1 : -1)
                : (v1 < v2 ? 1 : -1);
        });

        this.records = data;
    }

    handleSave(event) {
        const updates = event.detail.draftValues.map(d => ({
            fields: { ...d }
        }));

        Promise.all(updates.map(updateRecord))
            .then(() => {
                this.showToast('Success', 'Records updated', 'success');
                this.draftValues = [];
                this.loadData();
            })
            .catch(error => {
                this.showToast('Error', error.body?.message, 'error');
            });
    }

    handleRowAction(event) {
        const action = event.detail.action.name;
        const row = event.detail.row;

        if (action === 'edit') {
            this.showToast('Edit clicked', row.Id, 'info');
        } else if (action === 'delete') {
            this.showToast('Delete clicked', row.Id, 'warning');
        }
    }

    exportCSV() {
        generateCSV({
            objectName: this.objectName,
            fields: this.fields
        })
        .then(csv => {
            const link = document.createElement('a');
            link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
            link.download = 'data.csv';
            link.click();
        })
        .catch(error => {
            this.showToast('Error', error.body?.message, 'error');
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({ title, message, variant })
        );
    }

    get noRecords() {
        return this.displayData.length === 0 && !this.isLoading;
    }
}