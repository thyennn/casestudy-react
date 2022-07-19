## Task1 - Create new package/folder 'result' in /src and configure webpack to build package

## Task2 - Create ApisDetails container/component to fetch and present development apis from 'https://api.publicapis.org/entries':
1. Create component
2. Create container to component
3. Create new reducer and actions (implement async/await fetcher)
how state should looks like
   const initState = {
    allApisInDevsCategory: [],
   }
   
4. Present development apis in the html table\
index | api_name | link | CORS | description | category

## Task3 - Visibility columns - Create list with checkboxes to add or remove visible columns (configuration should be stored in local storage using hooks)
## Task4 - Edit description column and remove record - Implement ability to edit description in table record and extend columns by 'Action' column with remove button
## Task5 - Add styles to app
## Task6 - Code refactoring