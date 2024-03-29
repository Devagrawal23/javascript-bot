function sendMsg(){
   var userInp = document.getElementById("userInp");
   var message = userInp.value;

   //document..write(message);
   if (message.trim() != "") {       //trim is use to hide unwanted space  . if mesg is not blank it apper on chat
    appendMessage("you", message)
    userInp.value="";
    processMessage(message);
   }
   

   function appendMessage(sender, message){     //it is responsible to display the msg on chat container
    var chatContainer = document.getElementById("chatContainer");   // it get msg drom id called chatcontainer
    var messageElement = document.createElement('p');    //create a element called p to display the msg
    messageElement.innerHTML = '<strong>' + sender + ':<strong>' + message;

    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
   }

   function processMessage(message) {
    if(message.includes("hello")) {
         response = "Hello I am Chatbot. how can i help you ?"
   }else if (message.includes("how are you")) {
        response = "I'm just a bot, so I don't have feelings, but thanks for asking!"
    } else if (message.includes("weather")) {
        response = "I'm sorry, I don't have access to weather information. please go to google.com"
    } else if (message.includes("joke")){
        response = "Why couldn't the bicycle stand up by itself? It was two-tired!"
    } else if(message.includes("thank you")){
        response = "youre welcome!"
    }
     else {
        response = "I'm sorry, I don't understand. Can you please rephrase your question?"
    }
    
   
}

setTimeout(function(){
    appendMessage("chatbot" ,response);
   }, 2000);
   }
