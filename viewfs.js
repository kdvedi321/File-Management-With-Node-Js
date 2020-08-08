//file, directory
//directory -> content
let fs = require("fs");
let path = require("path");
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
            viewAsTree(indent+"  ",childPath);
        }
    }
}


function viewAsFlatFile(src){
    let isFile = checkPathisDirectoryorNot(src);
    if(isFile==true){
        console.log(src + "*");
    }else{
        console.log(src);
        let children = childrenReader(src);
        for(let i=0;i<children.length;i++){
            let child = children[i];
            let childPath = path.join(src, child)
            //let child_path=src+"/"+child;
            viewAsFlatFile(childPath);
        }
    }
}
viewAsFlatFile(path.basename(process.argv[2]));

viewAsTree("", process.argv[2]);