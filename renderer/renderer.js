const fs = require('fs');
const $ = require('../js/jquery-3.3.1.min.js');

fs.readFile(`${__dirname}/config.json`,'utf8', (err, data) => {
    'use strict';
    if(err) throw err;

    $('#listDiv').html('');
    JSON.parse(data)['list'].map((e) => {
        $('#listDiv').append(`
        <div class="row keydiv" data-label="${e.linkname}" style="display: flex; margin-bottom: 5px;">
            <div class="col-xs-3">
                <input class="btn btn-primary form-control key" type="button" value="${e.linkname}" data-url="${e.filepath}">
            </div>
            <div class="col-xs-7" style="margin-top: 0.5em;">
                ${e.filepath}
            </div>
        </div>
        `);
    });
});