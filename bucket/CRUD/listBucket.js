const AWS = require("aws-sdk");
const s3 = new AWS.S3();

var params = {};

s3.listBuckets(params, function(err,data){

    if(err){
        console.log(err, err.stack);    //error
    } else{
        console.log(data);      //successfull
    }

});