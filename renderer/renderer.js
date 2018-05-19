const fs = require('fs');

fs.readdir('.', (err, files) => {
    'use strict';
    if(err) throw err;

    for(let file of files) {
        console.log(file);
        document.getElementById('display').innerHTML += `<li>${file}</li>`;

    }
});