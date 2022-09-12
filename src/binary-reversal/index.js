/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */

    function binaryReversal(value) {
        // convert value to binary
        let binary = Number(value).toString(2);

        // pad the binary with 0s to make it 8 digits
        let paddedBinary = binary.padStart(8, '0');

        // reverse the padded binary
        let reversedBinary = paddedBinary.split('').reverse().join('');

        // convert the reversed binary to decimal (base 10)
        let decimalB = parseInt(reversedBinary, 2)

        return decimalB.toString();
        
    }
console.log(binaryReversal('47'));

module.exports = binaryReversal;
