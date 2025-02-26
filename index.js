const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
  
const app = express();  
app.use(bodyParser.json());  
app.use(cors());  
  
let messages = []; // Array to store messages  
  
// Endpoint to receive new messages  
app.post('/send-message', (req, res) => {  
    const { message } = req.body;  
    messages.push(message); // Add the new message to the array  
    res.json({ status: 'Message received' });  
});  
  
// Endpoint to retrieve all messages  
app.get('/messages', (req, res) => {  
    res.json({ messages });  
});  
  
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);  
});
