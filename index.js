const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');
const fs = require('fs');

app.on('ready',(event) => {
    'use strict';
    const win=new BrowserWindow({width:800,height:600});
    win.loadURL(`file://${__dirname}/html/index.html`);

    // devtools
    win.webContents.openDevTools();

    var ipc = require('electron').ipcMain;

    ipc.on('invokeAction', (evt, arg) => {
        console.log(evt, arg);
        evt.sender.send('returnAction', arg);
    });

    ipc.on('openFolder', (evt, arg) => {
        shell.showItemInFolder(arg);
    });

});