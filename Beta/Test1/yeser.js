function someAsyncTask(callback) {
    setTimeout(function(){
        callback();
    }, 3000)
    console.log("we did this by team effort")
}

let someTaskPromise = function () {

    return new Promise (function(resolve,reject){
        someAsyncTask(resolve)
    })

}

someTaskPromise();