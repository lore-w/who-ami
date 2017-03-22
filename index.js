/*
 *@description:who-ami
 *@author: lore-w metro-cpu@hotmail.com
 *@time: 2017/03/14
 */

"use strict";
let shell = require('shelljs');

let userName = '',
    userEmail = '';

if (shell.which('git')) {

    userName = shell.exec('git config --get user.name', {
        silent: true
    }).stdout.trim();

    userEmail = shell.exec('git config --get user.email', {
        silent: true
    }).stdout.trim();

    userName = !!userName ? userName : '';
    userEmail = !!userEmail ? userEmail : '';
}

exports.name = userName;
exports.email = userEmail;