const path = require('path')
const extension = path.extname('arquivo.txt') //.txt

function getExtension(ext){
    return path.extname(ext)
}

console.log(extension) //.txt
console.log(getExtension('arquivo.php')) //.php