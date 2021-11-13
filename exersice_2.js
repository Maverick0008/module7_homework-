const objFord = {
    name: 'Ford',
    year: 1996
}

function car(object,string) {
    let result = (string in object);
    return result;
        
    }
console.log(car(objFord, 'year'))