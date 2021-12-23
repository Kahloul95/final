import { useState, useContext } from 'react'
import { Box, makeStyles } from '@material-ui/core';

import { AccountContext } from '../../context/AccountProvide';
import { newMessage } from '../../service/api';


import Footer from './Footer';

const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        // height: 'calc(100% - 114px)',
        backgroundSize: '50%'
    },
    footer: {
        height: '55px',
        background: '#ededed',
        // position: 'absolute',
        width: '100%',
        // bottom: 0
    },
    component: {
        height: '79vh',
        overflowY: 'scroll'
    },
    container: {
        padding: '1px 80px'
    }
})

const Messages = ({ conversation }) => {
    const classes = useStyles();

    const [value, setValue] = useState();

    const { account } = useContext(AccountContext);

    const sendText = async (e) => {
        let code = e.keyCode || e.which
        if(!value) return;

        if (code === 13) {
            let message = {
                sender: account.googlrId,
                conversationId: conversation._id,
                text: value
            }
            

           await newMessage(message);
        }
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component}>
                heloo
            </Box>
            <Footer sendTesxt={sendText} setValue={setValue} value={value} />
        </Box>
    )
}

export default Messages;