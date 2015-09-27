#!/usr/bin/env node

var path = require('path');
var express = require('express');
var contentDisposition = require('content-disposition');
var pkg = require( path.join(__dirname, 'package.json') );




// Parse command line options

var program = require('commander');

var sentiment = require('sentiment');



var request = require("request");
var cheerio = require("cheerio");

request({
  uri: "https://en.wikivoyage.org/wiki/Palm_Springs",
}, function(error, response, body) {
  var $ = cheerio.load(body);

  var text = $(body).text();



    console.log(text);

    var str2 = text.split(".");
//console.log(str);
//console.log(str2);
var count=0;
var pontuation=0;

for(var k in str2) {
	
	if (str2[k].indexOf("gay") > -1){

		console.log( "\ngay? " + (str2[k].indexOf("gay") > -1));
		
		console.log("\n\n!!");
		
		console.log(str2[k]);
	   	
	   	var r3 = sentiment(str2[k]);
		
	   	if (r3.score !== 0){

	   		count++;
	   		pontuation+=r3.score;

	   	}
		
		console.log(r3.score);
	}
}

console.log("score sum: " + pontuation + "\nnumber of phrases summed:"+count + "\nmean: "+ (pontuation/count));
  
});


program
	.version(pkg.version)
	.option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
	.parse(process.argv);


console.log('Cute files is running on port ' + "Rui\n");

var r1 = sentiment('According to the law in Iran, homosexuality is punishable by death and sex by lesbians is punishable with lashes.');
//console.log(r1);  

var r2 = sentiment('Palm Springs is also a favorite for gay travelers and naturist communities.');
//console.log(r2); 


var str="By plane Palm Springs International Airport (IATA: PSP).Located right in the heart of Palm Springs.Scheduled daily flight connections with major cities throughout the United States and Canada.Served by Westjet and all major US airlines except Southwest.Palm Springs International Airport is also popular for general aviation and business jet travelers.Air taxi and aircraft charter companies such as Air Royale International and Desert Jet provide private aircraft charter services from this airport. You can take Palm Springs bus number 24 to go from the airport to downtown Palm Springs. The bus does not stop right at the terminal; you'll need to catch the bus one block west of the airport at Civic Drive and East Tahquitz Canyon Way";
//var str2 = str.replace(/([.?!])\s*(?=[A-Z])/, "$1|").split("|")
var str2 = str.split(".");
//console.log(str);
//console.log(str2);


for(var k in str2) {
//	console.log( "\ngay? " + (str2[k].indexOf("gay") > -1));
//	console.log("\n\n!!");
//	console.log(str2[k]);
   	var r3 = sentiment(str2[k]);
//	console.log(r3.score);
}