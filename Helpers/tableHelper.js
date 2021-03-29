//get row by class
export function getRowByClassName(table, rowClassName) {
    return cy.get(table).get('tr').filter('.' + rowClassName)
}

//get row by rowIndex
export function getRowByIndex(table, rowIndex) {
    return cy.get(table).get('tr').then(($rows) => {
        cy.wrap($rows).eq(rowIndex)
    })
}

//get columns from a table, by rowClassName
export function getColumns(table, rowClassName) {
    return getRowByClassName(table, rowClassName).find('td')
}

//get columns from a table, by rowIndex
export function getColumnsByRowIndex(table, rowIndex) {
    return getRowByIndex(table, rowIndex).find('td')
}

//get cell
export function getCell(table, rowClassName, tdIndex) {
    return getColumns(table, rowClassName).then(($cells) => {
        cy.wrap($cells).eq(tdIndex)
    })
}

//get cell rowindex
export function getCellByRowIndex(table, rowIndex, tdIndex) {
    return getColumnsByRowIndex(table, rowIndex).then(($cells) => {
        cy.wrap($cells).eq(tdIndex)
    })
}

//get cell text content from a table by rowClassName
export function getCellText(table, rowClassName, tdIndex) {
    return getCell(table, rowClassName, tdIndex).invoke('text')
}