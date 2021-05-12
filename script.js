//Script to list the number of characters in a book 

//Fetch the book.txt file to a variable
 fs  = require('fs');
 const book = fs.readFileSync('./book.txt', 'utf8')

// Convert to book Array
const bookArray = book.split('');

// Remove whitespace

const bookArrayWithoutSpace = bookArray.filter(n => n !== ' ');

//Function to count character in the array

function count(array) {

//define count object

    let count = {};
    
// Just verify if value if null

    if (typeof array !== 'object' || array.length < 1)
    
        throw new Error('Either value if not a array or array is empty');
        
// Using for each to iterate and add/increment characters to the object

    bookArrayWithoutSpace.forEach((function (n) {
    
        if (count[n]) 
        
            count[n]++;
            
        else
        
            count[n] = 1;
            
        // count[n] ? count[n]++ : count[n] = 1;

    }));
    
    return count;
}

// Print characters and its count

console.log(count(bookArrayWithoutSpace));

// Here we are putting each characters in to another object with character name as key and count as value, by this way we just need to iterate only once throught the array. For better understanding I have put the split and filter seperately.
