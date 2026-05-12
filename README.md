Reusable Advanced Data Table (LWC)
Overview
A reusable Lightning Web Component (LWC) that dynamically displays data for any standard or custom object using configurable properties.

Features
	• Dynamic object & field configuration
	• Sorting, filtering, and global search
	• Pagination (client + server-side)
	• Inline editing (LDS)
	• CSV export
	• Loading, error, and empty states

Deployment
sfdx force:auth:web:login -a myOrg
sfdx force:source:deploy -p force-app
sfdx force:org:open

Test Data
insert new Account(Name='Test 1', Industry='IT');
insert new Account(Name='Test 2', Industry='Finance');

Usage
	1. Open App Builder
	2. Drag Reusable Data Table
	3. Configure:
	Object Name → Account  
Fields → Id,Name,Industry,Phone
	4. Save & Activate
  
Demo
	• Search, filter, sort
	• Inline edit
	• Pagination
Export CSV
