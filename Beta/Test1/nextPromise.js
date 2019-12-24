function download(url) {

     return new Promise(function(resolve,reject){
         if(!url.startsWith("http")){
             reject(new Error("URL does not match enter the URL starting from http"))
         }

         else{
             setTimeout(function(){
             filename=url.split('/').pop()
             console.log("1")
             resolve(filename)
         },3000)
        
        }
         })
    }


function resize(fileName){
     return new Promise(function(resolve,reject){
         if (!fileName.endsWith(".png")){
             reject(new Error("Filename does not have extension of .png"))
         }
         else{
             setTimeout(function(){
                 let resizedFile=fileName.split(".")[0]+"resized"+".png"
                 console.log("2")
                 resolve(resizedFile)
             },5000)
         }
         
     })
}


download('http://www.google.com/logo.png').then(resize).then(function(resized){
    console.log(resized)
}).catch(function(err) { console.error(err)})

