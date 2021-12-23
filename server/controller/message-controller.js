import Message from '../model/message.js';


export const newMessage = async (request, response) => {

    const newMessage = new Message(request.body);
    try {
        await newMessage.save();

        response.status(200).json('message saved');
    } catch (error) {
        response.status(500).json(error)
    }
}