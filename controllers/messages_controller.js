let messages = [];
let id = 0;

const createMessages = (req, res) => {
    const {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.json(text, time);
}

const readMessages = (req, res) => {
    res.status(200).send(messages);
}

const updateMessages = (req, res) => {
   const {text} = req.body
   const updateId = req.params.id
   const messageIndex = messages.findIndex(messages => messages.id == updateId)
   let message = messages[messageIndex]

   message[messageIndex] = {
       id: message.id,
       text: message.text,
       time: message.time
   }

   res.status(200).send(messages)
}

const deleteMessages = (req, res) => {
   const deleteId = req.params.id;
   messageIndex = messages.findIndex(message => message.id == deleteId)
   messages.splice(messageIndex, 1)
   res.status(200).send(messages)
}

module.exports = {
    createMessages,
    readMessages,
    updateMessages,
    deleteMessages
}