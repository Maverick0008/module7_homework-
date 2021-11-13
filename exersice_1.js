const objFord = {
    name: 'Ford',
    year: 1996
}

function car(object) {
    for (let key in object) {
        if(object.hasOwnProperty(key)) {
            console.log(key + ' -', object[key])
        } 
    }
}
car(objFord)