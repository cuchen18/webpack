const path=require('path')
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname,'lib'),
        filename:'index.js',
        clean:true
    }
}