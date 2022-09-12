function listSorting(needle, haystack) {
    
    //check if haystack is an array of arrays
    if(typeof(haystack[0]) == "object") {
        let column;
        let row;

        
        //loop through haystack to find the row that contains the needle
    for (let i = 0; i < haystack.length; i++) {
        
        //loop through each row to find the column that contains the needle
        for (let j = 0; j < haystack[i].length; j++) {
            
            //if the needle is found, store the column and row
            if (haystack[i][j] === needle) {
                column = haystack[i].lastIndexOf(needle);
                row = i;
                
            }
        }
    }
    //check if needle is in any row and return the column and row
    if (row == undefined) return -1;
    return [row, column];   
    }

    //return column or needle index if haystack is not an array of arrays
    else {
        return haystack.lastIndexOf(needle);
    }
}


module.exports = listSorting;

