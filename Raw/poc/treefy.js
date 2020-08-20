//import { treefy } from "../../Activity/commands/treefy";
let path = require("path");
let fs = require("fs");
function treefy(src, dest, node){
    if(node.isFile==true){
        let srcPath=path.join(src, node.newName);
        let destPath=path.join(dest, node.oldName);
        fs.copyFileSync(srcPath, destPath);
    }else{
        let dirPath=path.join(dest, node.oldName);
        fs.mkdirSync(dirPath);
        let children=node.children;
        for(let i=0;i<children.length;i++){
            let child=children[i];
            //let childPath=path.join(src,child.oldName);
            let childPath = dirPath;
            treefy(src, childPath, child);
        }
    }
}

let root = require(path.join(process.argv[2], "metadata.json"))
treefy(process.argv[2], process.argv[3], root);






