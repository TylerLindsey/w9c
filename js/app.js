var tweets = ["I'm tweet 1", "I'm tweet 2", "I'm tweet 3", "I'm tweet 4", "I'm tweet 5", "I'm tweet 6", "I'm tweet 7", "I'm tweet 8", "I'm tweet 9", "I'm tweet 10"];
// in the tweets above, I kept it simple so as to not waste time on the content, and made it numbered to be organized.

// var counter = 0;
for(let index = 0; index < tweets.length; index++){
  console.log(tweets[index]);
}
// use the for statement to loop until condition is false
// index is the variable name for the index
// the let statement is the starting point on the index and it specifies the first spot on the list which is 0, and index < tweets.length means it will go the entire length of the tweets variable, and index++ makes it go 1 step at a time. 
// finally the log will make the console display the tweets in order.