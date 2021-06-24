import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

const config={
  width:"300px",
  height:"400px",
  floating: true,
}


 class Chatbots extends Component {
 render() {
   return (
         <ChatBot steps={[
     {
            id: '0',
          message: 'Welcome to Corona Announcement Department!',
         end:true
          },
       

          ]
         }
   {...config}
        />
      );
   }
 }
export default Chatbots;