
const  express  = require( 'express');
const app = express();
const readline = require('readline');
const port  = 3000 ; 

app.get('/',(req,res)=>{
    res.send('your server is up')
})


    app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
  
   const readline = require('readline');
    const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    function calculateFibonacci() {
        readLine.question('Enter the position at the Fibonacci series: ', (positionInput) => {
            const position = parseInt(positionInput);
    
            if (isNaN(position) || position < 0) {
                console.log('Please provide only positive integer.');
            } else {
                const result = findFibonacci(position);
                console.log(`The Fibonacci value at position ${position} is: ${result}`);
            }
    
            readLine.close();
        });
    }
    calculateFibonacci()
})


const findFibonacci = (n,result = {})=>{

    if(n in result){
        return result[n]
    }
    if(n<=1){
        return n
    }
    else {
        const fibunacciValue = findFibonacci(n-1,result) + findFibonacci(n-2,result);
        result[n] =fibunacciValue ;
        return fibunacciValue
    }

}



