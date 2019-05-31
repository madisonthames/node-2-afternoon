const express = require("express");
const app = express();
const port = 3001;
const messagesController = require("./controllers/messages_controllers");

app.request(express.json());
app.use(express.static(__dirname + '/../public/build'))

const messagesUrl = '/api/messages'
app.post(messagesUrl, messagesController.create)
app.get(messagesUrl, messagesController.read)
app.put(`${messagesUrl}/:id`, messagesController.update)
app.delete(`${messagesUrl}/:id`, messagesController.delete)


app.listen(3001, () => {
    console.log(`The server is listening on ${port}.`)
})