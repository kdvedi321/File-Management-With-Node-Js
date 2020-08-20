let path = require("path");
let fs = require("fs");

module.exports.treefy = function treefy(){
    console.log("treefy is implemented");
    let src = arguments[0];
    let dest = arguments[1];
    let root = require(path.join(src, "metadata.json"))
    treefymain(src, dest, root);    
}

function treefymain(src, dest, node){
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
            treefymain(src, childPath, child);
        }
    }
}

