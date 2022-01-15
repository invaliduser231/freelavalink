# freelavalink
This package will choose the most powerfull server from a list and will post the result as a object. It chooses the server by used memory and used cpu percentage. 


```javascript
let getnode = require("freelavalink")

let node = await getnode()


console.log(node)
/*
{
  host: 'hostname',
  port: 2333,
  password: 'password',
  usedmem: '49.31%',
  usedcpu: '0.04%',
  score: 53.12331486695202 //the lower the better
}
*/
```