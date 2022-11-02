const http=require('http');
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./29.4web1/index.html');
const homeStyles=readFileSync('./29.4web1/css/style.css');
const homeLogo=readFileSync('./29.4web1/slike/pocetna.png');
const homeTatto1=readFileSync('./29.4web1/foto/foto1.jpeg');
const homeTatto2=readFileSync('./29.4web1/foto/foto2.jpeg');
const homeTatto3=readFileSync('./29.4web1/foto/foto3.jpeg');
const homeTatto4=readFileSync('./29.4web1/foto/foto4.jpeg');

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
else if(url==="/foto/foto1.jpeg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeTatto1);
res.end();
}
else if(url==="/foto/foto2.jpeg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeTatto2);
res.end();
}
else if(url==="/foto/foto3.jpeg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeTatto3);
res.end();
}
else if(url==="/foto/foto4.jpeg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeTatto4);
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


