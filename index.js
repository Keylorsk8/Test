let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    setTimeout(() => {
        if(a == 2) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 2000);
    
});

const test = async () => {
    let response = await p;
    return response;
}

console.log(test());
console.log('Test');

setTimeout(() => {
    console.log(test());
}, 5000);

const feature3 = () =>{
    console.log('Hola');
};

const bugFix = () =>{
    console.log('Hola');
};

