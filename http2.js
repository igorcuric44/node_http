const http=require('http');
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./29.4web1/index.html');
const homeStyles=readFileSync('./29.4web1/css/style.css');
const homeLogo=readFileSync('./29.4web1/slike/pocetna.png');

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
else if(url==="/css/style.css")
{
res.writeHead(200,{'content-type':'text/css'});
res.write(homeStyles);
res.end();
}
else if(url==="/slike/pocetna.png")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeLogo);
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


