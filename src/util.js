// function findCount(input) {
//     //aaaccde
//     let output = input[0];
//     let count = 1;
//     for(let i=1; i<input.length; i++) {
//       if(input[i] !== input[i-1]) {
//         output = output + count + input[i];
//         count = 1;
//       } else {
//         count++;
//       }
//     }
  
//     output = output + count;
//     console.log(output);
//           // let map = new Map();
//           // let output = "";
//           // for(let i=0; i<input.length; i++) {
//           //   if(!map.has(input[i])) {
//           //     map.set(input[i], 1);
//           //   } else {
//           //     map.set(input[i], map.get(input[i])+1);
//           //   }
//           // }
  
//           // for(let [key, value] of map.entries()) {
//           //   output  += key + value;
//           // }
  
//           // console.log(output)
//   }
  