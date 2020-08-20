let fs = require("fs");
let path = require("path");
let uniqid = require("uniqid");

module.exports.untreefy = function untreefy(){
    console.log("untreefy is implemented");
    let src = arguments[0];
    let dest = arguments[1];
    let root = {};
    untreefymain(src, dest, root);
    fs.writeFileSync(path.join(dest,"metadata.json"),JSON.stringify(root));    
}

function checkPathisDirectoryorNot(src){
    let ans = fs.lstatSync(src).isFile();
    return ans;
}
function childrenReader(src){
    let children = fs.readdirSync(src);
    return children;
}
function untreefymain(src, dest, node){
    let isFile = checkPathisDirectoryorNot(src);
    if(isFile===true){
        let newFileName=uniqid();
        node.isFile = true;
        node.oldName =  path.basename(src);
        node.newName =  newFileName;
        let destPath=path.join(dest, newFileName);
        fs.copyFileSync(src, destPath);
        console.log(`file copied from ${path.basename(src)} to ${path.basename(destPath)}`);
        //newName data copy
        // unique name file
        // oldfile => new File with unique name data copy from old file
        //console.log("I am a file and I will copied "+path.basename(src));
    }else{
        node.isFile =  false;
        node.oldName =  path.basename(src);
        node.children = [];
        console.log("I am a directory "+path.basename(src));
        let childrens=childrenReader(src);
        for(let i=0;i<childrens.length;i++){
            let cpath = path.join(src, childrens[i]);
            let chobj  = {};
            untreefymain(cpath, dest, chobj);
            node.children.push(chobj);
        }
    }
}
