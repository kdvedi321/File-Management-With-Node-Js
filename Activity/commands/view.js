let fs = require("fs");
let path = require("path");
module.exports.view = function view(){
    console.log("view is implemented");
    //console.log(arguments);
    let src = arguments[0];
    let mode = arguments[1];
    
    if(mode == "-t"){
        viewAsTree("", src);
    }else if(mode=="-f"){
        viewAsFlatFile(src, path.basename(src));
    }else{
        console.log("Wrong mode");
        console.log(mode);
    }    
}
function checkPathisDirectoryorNot(src){
    let ans = fs.lstatSync(src).isFile();
    return ans;
}
function childrenReader(src){
    let children = fs.readdirSync(src);
    return children;
}

function viewAsTree(indent,src){
    let isFile = checkPathisDirectoryorNot(src);
    if(isFile==true){
        console.log(indent+path.basename(src) + "*");
    }else{
        console.log(indent+path.basename(src));
        let children = childrenReader(src);
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let childPath = path.join(src, child)
            //let child_path=src+"/"+child;
            viewAsTree(indent+"\t",childPath);
        }
    }
}
function viewAsFlatFile(src, toprint){
    let isFile = checkPathisDirectoryorNot(src);
    if(isFile==true){
        console.log(toprint + "*");
    }else{
        console.log(toprint);
        let children = childrenReader(src);
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let childPath = path.join(src, child)
            //let child_path=src+"/"+child;
            viewAsFlatFile(childPath, path.join(toprint,child));
        }
    }
}
