const http=require('http');
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./index.html');



const server=http.createServer((req,res)=>
{
//console.log(req.method);
console.log(req.url);

const url=req.url;

if(url==="/")
{
res.writeHead(200,{'content-type':'text/html'});
//res.writeHead(200,{'content-type':'text/plain'});
res.write(homePage);
res.end();
}
else if(url==="/about")
{
res.writeHead(200,{'content-type':'text/html'});
res.write('<h1>About Page</h1>');
res.end();
}
else
{
res.writeHead(404,{'content-type':'text/html'});
res.write('<h1>Not Found</h1>');
res.end();
}

});

server.listen(5000);


