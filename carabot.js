var botui = new BotUI('carabot'),

botui.message.bot({ // show first message
  delay: 200,
  content: "Hi! I'm Cara"
}).then(function(){
  return botui.message.bot({ // second messages
    delay:1000, // 1 second
    content: 'How are you?'
  });
}).then(function(){
  return botui.action.button({//
    delay:1000,
    action: [
      {
        text: 'Good',
        value: 'good'
      }
      {
        text:'Really Good'
        value:'really_good'
      }
    ]
  });
}).then(function(res){
  return botui.message.bot({
    delay:1000,
    content: 'You are feeling' +res.text+'!'
  });
});
