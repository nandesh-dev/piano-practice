const t=document.querySelector("canvas"),o=t.getContext("2d");t.width=600,t.height=200;const e=[];!function(){let i=0;for(let t=0;t<50;t++).5>Math.random()&&e.push({row:Math.round(4*Math.random()-2),location:i}),i+=10;!function i(){for(let n of(setTimeout(()=>{requestAnimationFrame(i)},20),o.clearRect(0,0,1e4,1e4),!function(){let e=t.height/2;for(let i=-2;i<3;i++)o.beginPath(),o.moveTo(0,e+16*i),o.lineTo(t.width,e+16*i),o.strokeStyle="white",o.lineWidth=1.5,o.stroke()}(),e))n.location<100&&n.location>0&&function(e,i){let n=16/3;o.beginPath(),o.strokeStyle="white",o.lineWidth=4,o.ellipse(i*t.width/100,t.height/2+8*e,1.5*n,n,0,0,2*Math.PI),o.stroke()}(n.row,n.location),n.location+=.5,n.location=n.location%500}()}();//# sourceMappingURL=index.b9d8bde6.js.map

//# sourceMappingURL=index.b9d8bde6.js.map
