import _ from 'lodash';

 function component() {
   const element = document.createElement('div');
  // lodash 在当前 script 中使用 import 引入
   element.innerHTML = _.join(['Hello', 'webpack11'], ' ');

   return element;
 }

 document.body.appendChild(component());