#!/usr/bin/env node
let inputArr = process.argv.splice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
// console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help

let command = inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives:['zip','7z','rar','tar','gz','ar','iso',"xz"],
    documents: ['docx','doc','pdf','xlsx','odt','ods','odp','odg','odf','txt','ps'],
    app:['exe','dmg','pkg',"deb"],
    html:['html'],
    css:['css'],
    js:['js']
}

switch(command){
    case "tree":
    treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("🙏🙏 Please input right command");
        break;
}





