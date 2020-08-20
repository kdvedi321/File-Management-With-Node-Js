const input = process.argv;
let {view} = require("./commands/view")
let {help} = require("./commands/help")
let {treefy} = require("./commands/treefy")
let {untreefy} = require("./commands/untreefy")

//console.log(input);
//console.log(input[2]);
//console.log(input[3]);

let cmd = process.argv[2];
switch(cmd){
    case "view":
        view(process.argv[3], process.argv[4]);
        //console.log("View is implemented");
        break;
    case "treefy":
        treefy(process.argv[3], process.argv[4]);
        //console.log("treefy is implemnted");
        break;
    case "untreefy":
        untreefy(process.argv[3], process.argv[4]);
        //console.log("untreefy is implemented");
        break;
    case "help":
        help();
        //console.log("help command is implemented");
        break;
    default:
        console.log("Wrong Command");
}