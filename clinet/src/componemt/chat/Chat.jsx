import { useState, useEffect, useContext } from 'react';
import { Box } from '@material-ui/core';

import { UserContext } from '../../context/UserProvider';
import { getConversation } from '../../service/api';
import { AccountContext } from '../../context/AccountProvide';

import ChatHeader from './ChatHeader';
import Messages from './Messages'

const Chat = () => {

    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({})

    useEffect(() => {
        const getConversationDetails = async () => {
           let data = await getConversation({senser: account.googleId, receiver: person.googleId })
           setConversation(data);
                }
        getConversationDetails();
    }, [person.googleId])

    return (
        <Box>
            <ChatHeader />
            <Messages conversation={conversation} />
        </Box>
    )
}

export default Chat;