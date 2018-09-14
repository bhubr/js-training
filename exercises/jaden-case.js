'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const capitalizeFirst = str => str[0].toUpperCase() + str.substr(1).toLowerCase()

const jadenCase = str => str.split(' ').map(capitalizeFirst).join(' ')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
// End of tests */
