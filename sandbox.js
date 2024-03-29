const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

//promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         //reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

//const sum = function (a,b) {
//     return a+b;
// }
// console.log(sum(4,5));

// const sum1 = (a,b) => a+b;
// console.log(sum1(4,5));
