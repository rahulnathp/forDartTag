const  express  = require( 'express');
const app = express();
const readline = require('readline');
const port  = 3000 ; 

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
  
   const readline = require('readline');
    const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function findArrangement() {
    readLine.question('Enter the value for N , the Ring Diameter and it should not be negative: ', (N) => {
        const NValue = parseInt(N);

        if (isNaN(NValue) || NValue < 0) {
            console.log('Please provide only positive integer.');
        } else {
            // const result = migrateRings(NValue,'A','B','C');
            // console.log(`The arrangement steps will be : ${migrateRings(NValue,'A','B','C')}`);
            migrateRings(NValue,"A","B","C")
        }

        readLine.close();
    });
}
findArrangement()
})





const migrateRings = (N,A,B,C)=>{
    let stepsInfo =  [] ; 

    const movements = (n,a,b,c)=>{
        if(n === 1){
            stepsInfo.push(`${n}: ${a} to ${b}`)
        }
        else{
            movements(n-1,a,c,b);
            stepsInfo.push(`${n}: ${a} to ${b}`)
            movements(n-1,c,b,a) ; 
            
        }
    }

    movements(N,A,B,C);
    console.log(stepsInfo)
    return stepsInfo
}

