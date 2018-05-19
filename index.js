const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');
const fs = require('fs');

app.on('ready',(event) => {
    'use strict';
    const win=new BrowserWindow({width:800,height:600});
    win.loadURL(`file://${__dirname}/html/index.html`);

    // devtools
    //win.webContents.openDevTools();

    var ipc = require('electron').ipcMain;

    ipc.on('invokeAction', (evt, arg) => {
        fs.readFile(`${process.cwd()}/renderer/config.js`, (err, data) => {
            if(err) console.log(err);
            var initObj = JSON.parse(data);
            initObj.list.push(arg);
            fs.writeFile(`${process.cwd()}/renderer/config.js`, JSON.stringify(initObj));
        });
        evt.sender.send('returnAction', arg);
    });

    ipc.on('openFolder', (evt, arg) => {
        shell.showItemInFolder(arg);
    });
});