const http=require('http');
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./29.4web1/index.html');
const homeCjenik=readFileSync('./29.4web1/cjenik.html');
const homeKatalog=readFileSync('./29.4web1/katalog.html');
const homeKontakt=readFileSync('./29.4web1/kontakt.html');
const homePoruka=readFileSync('./29.4web1/poruka.html');
const homeTecajna=readFileSync('./29.4web1/tecajna.html');
const homeUsluge=readFileSync('./29.4web1/usluge.html');

const homeTecajnax=readFileSync('./29.4web1/tecajna_lista.txt');

const homeStyles=readFileSync('./29.4web1/css/style.css');
const homeLogo=readFileSync('./29.4web1/slike/pocetna.png');

const homeTatto1=readFileSync('./29.4web1/foto/foto1.jpeg');
const homeTatto2=readFileSync('./29.4web1/foto/foto2.jpeg');
const homeTatto3=readFileSync('./29.4web1/foto/foto3.jpeg');
const homeTatto4=readFileSync('./29.4web1/foto/foto4.jpeg');

const homeAlgebra1=readFileSync('./29.4web1/foto/algebra1.jpg');
const homeAlgebra2=readFileSync('./29.4web1/foto/algebra2.jpg');
const homeAlgebra3=readFileSync('./29.4web1/foto/algebra3.jpg');


const homeJs1=readFileSync('./29.4web1/js/js_vanjski.js');
const homeJs2=readFileSync('./29.4web1/js/js_slide.js');
const homeJs3=readFileSync('./29.4web1/js/js_poruka.js');
const homeJs4=readFileSync('./29.4web1/js/js_reklame.js');
const homeJs5=readFileSync('./29.4web1/js/js_cijene.js');
const homeJs6=readFileSync('./29.4web1/js/js_tecajna.js');

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
else if(url==="/index.html")
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
else if(url==="/cjenik.html")
{
res.writeHead(200,{'content-type':'text/html'});
res.write(homeCjenik);
res.end();
}
else if(url==="/katalog.html")
{
res.writeHead(200,{'content-type':'text/html'});
res.write(homeKatalog);
res.end();
}
else if(url==="/kontakt.html")
{
res.writeHead(200,{'content-type':'text/html'});
res.write(homeKontakt);
res.end();
}
else if(url==="/usluge.html")
{
res.writeHead(200,{'content-type':'text/html'});
res.write(homeUsluge);
res.end();
}
else if(url==="/tecajna.html")
{
res.writeHead(200,{'content-type':'text/html'});
res.write(homeTecajna);
res.end();
}
else if(url==="/tecajna_lista.txt")
{
res.writeHead(200,{'content-type':'text/plain'});
res.write(homeTecajnax);
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
// reklame
else if(url==="/foto/algebra1.jpg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeAlgebra1);
res.end();
}
else if(url==="/foto/algebra2.jpg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeAlgebra2);
res.end();
}
else if(url==="/foto/algebra3.jpg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeAlgebra3);
res.end();
}






else if(url==="/foto/foto4.jpeg")
{
res.writeHead(200,{'content-type':'images/svg+xml'});
res.write(homeTatto4);
res.end();
}
else if(url==="/js/js_vanjski.js")
{
res.writeHead(200,{'content-type':'text/javascript'});
res.write(homeJs1);
res.end();
}
else if(url==="/js/js_slide.js")
{
res.writeHead(200,{'content-type':'text/javascript'});
res.write(homeJs2);
res.end();
}
else if(url==="/js/js_poruka.js")
{
res.writeHead(200,{'content-type':'text/javascript'});
res.write(homeJs3);
res.end();
}
else if(url==="/js/js_reklame.js")
{
res.writeHead(200,{'content-type':'text/javascript'});
res.write(homeJs4);
res.end();
}
else if(url==="/js/js_cijene.js")
{
res.writeHead(200,{'content-type':'text/javascript'});
res.write(homeJs5);
res.end();
}
else if(url==="/js/js_tecajna.js")
{
res.writeHead(200,{'content-type':'text/javascript'});
res.write(homeJs6);
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








