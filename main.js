//callback function
function myFirst(callback)
{
    setTimeout(function(){
        console.log("First Function");
        callback();
    },1000);
}
function mySecond()
{
    setTimeout(function(){
        console.log("Second Function")
    },1000);
}
myFirst(mySecond);

//Callback hell
function myfirstcallback(callhel1)
{
    setTimeout(function(){
        console.log("First Callback Function");
        callhel1(mythridcallback);
    },3000);
}
function mysecondcallback(callhel2)
{
    setTimeout(function(){
        console.log("Second Callback Function");
        callhel2();
    },1000);
}
function mythridcallback()
{
    setTimeout(function(){
        console.log("Thrid Callback Function");
    },1000);
}

myfirstcallback(mysecondcallback);

//Promise
function myPromise()
{    
   
        return new Promise(function(resolve,reject){
            setTimeout(function(){
            console.log("First Promise")
            resolve();
        },5000);
        })
    
}
function mysecondPromise()
{
    console.log("Second Promise");   
}
myPromise().then(mysecondPromise)
.catch(function(){
    console.log("Error");
});
//Promise Chaning
function mychanPromise()
{    
   
        return new Promise(function(resolve,reject){
            setTimeout(function(){
            console.log("First Promise chaning")
            resolve();
        },5000);
        })
    
}
function mysecondchanPromise()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("Second Promise chaning")
        resolve();
    },1000);
    })
}
function mythridchanPromise()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("Thrid Promise chaning")
        reject();
    },1000);
    })
}
function myfourchanPromise()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("Four Promise chaning")
        reject();
    },1000);
    })   
}
mychanPromise().then(mysecondchanPromise)
.then(mysecondchanPromise)
.then(mythridchanPromise)
.then(myfourchanPromise)
.catch(function(){
    console.log("Error");
});
//asny await
async function myacsyPromise()
{    
   
        return new Promise(function(resolve,reject){
            setTimeout(function(){
            console.log("First Promise chaning")
            resolve();
        },5000);
        })
    
}

