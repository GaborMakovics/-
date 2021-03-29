//get row by class
export function getRowByClassName(table, rowClassName) {
    return cy.get(table).get('tr').filter('.' + rowClassName)
}

//get columns from a table, by row
export function getColumns(table, rowClassName) {
    return getRowByClassName(table, rowClassName).find('td')
}

//get cell text content from a table
export function getCellText(table, rowClassName, tdIndex) {
    const text = getColumns(table, rowClassName).then(($cells) => {
        cy.wrap($cells).eq(tdIndex).invoke('text')
    })
    return text
}