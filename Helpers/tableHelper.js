/* //get row by class
export function getRowByClassName(table, rowClassName) {
    return cy.get(table).get('tr').filter('.' + rowClassName)
} */

//get row by id
export function getRowById(table, rowId) {
    return cy.get(table).get('tr').filter('#' + rowId)
}

//get row by rowIndex
export function getRowByIndex(table, rowIndex) {
    return cy.get(table).get('tr').then(($rows) => {
        cy.wrap($rows).eq(rowIndex)
    })
}

//get columns from a table, by rowId
export function getColumns(table, rowId) {
    return getRowById(table, rowId).find('td')
}

//get columns from a table, by rowIndex
export function getColumnsByRowIndex(table, rowIndex) {
    return getRowByIndex(table, rowIndex).find('td')
}

//get cell
export function getCell(table, rowId, tdIndex) {
    return getColumns(table, rowId).then(($cells) => {
        cy.wrap($cells).eq(tdIndex)
    })
}

//get cell rowindex
export function getCellByRowIndex(table, rowIndex, tdIndex) {
    return getColumnsByRowIndex(table, rowIndex).then(($cells) => {
        cy.wrap($cells).eq(tdIndex)
    })
}

//get cell text content from a table by rowId
export function getCellText(table, rowId, tdIndex) {
    return getCell(table, rowId, tdIndex).invoke('text')
}