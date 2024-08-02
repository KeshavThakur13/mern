import http from "http";
const port = process.env.PORT||8000;
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>This is Home Page</h1>");
    }
    else if(req.url==="/about"){
        res.end("<h1>This is About Us Page</h1>");
    }
    else if(req.url==="/contact"){
        res.end("<h1>This is contact us Page</h1>");
    }
    else{
        res.end("<h1>404 Page Not Found</h1>");
    }
})
server.listen(port,'localhost',()=>{
    console.log("Running");
})

