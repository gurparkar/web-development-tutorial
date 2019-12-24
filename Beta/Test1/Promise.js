function downloadPromise(){
    return new Promise(function (resolve,reject){

        console.log("Starting the download the file")
        setTimeout(function(){
            console.log("Download is complete")
            resolve();
        },3000)
    }
    )
    
}



let downloadFile = downloadPromise()

setTimeout(function(){
    console.log(downloadFile)
},5000)


/* Promise practice session */

let donLoadFile = downloadPromise()

console.log("Believe in God")