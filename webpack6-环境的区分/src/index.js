

 function component() {


   const element = document.createElement('div');

   element.innerHTML = 'hello webpack23'
    console.log(process.env.NODE_ENV)
   return element;
 }

 document.body.appendChild(component());