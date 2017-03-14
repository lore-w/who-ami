/*
 *@description:who-ami
 *@author: lore-w metro-cpu@hotmail.com
 *@time: 2017/03/14
 */

"use strict";
let shell = require('shelljs');


let userName,
    userEmail = '',
    reg = new RegExp("[\\u4E00-\\u9FFF]+","g");

if (!shell.which('git')) {

    name = process.env.USER;
    userName = reg.test(name) ? 'anonymity' : name;
} else {

    userName = shell.exec('git config --get user.name', {
        silent: true
    }).stdout.trim();

    userEmail = shell.exec('git config --get user.email', {
        silent: true
    }).stdout.trim();
}

exports.name = userName;
exports.email = userEmail;