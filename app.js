function talk(){
    var know={
        "Who are you" : "Hello, Shivam here",
        "How are you" : "Good :)",
        "What can I do for you" : "Please give your feedback on this ChatBot",
        "What are you doing currently" : "I am currently pursuing BTech in Computer science and engineering",
        "ok" : "Thank You So Much",
        "Bye" : "Okay! Will meet soon..."
             };
    var user = document.getElementById('userBox').value;
         document.getElementById('chatLog').innerHTML = user + "<br>";
         if(user in know) {
         document.getElementById('chatLog').innerHTML = know[user] + "<br>";
                     }
         else{
         document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
             }
}