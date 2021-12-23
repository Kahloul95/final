import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api";
import { Box, makeStyles } from '@material-ui/core';

import { AccountContext } from '../../context/AccountProvide';

import Conversations from './Conversations';

const useStyles = makeStyles({
    component: {
        overflow: 'overlay',
        height: '81vh'
    },
    divider: {
        margin: '0 0 0 67px',
        backgroundColor: '#F2F2F2'
    }

})


const Conversation = ({ text }) => {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    const { account  }  = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
           const data = await getUsers();
           const fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
           setUsers(data);
        }
        fetchData();
    },[text])

    return (
        <Box classes={classes.component}>
            {
                users.map(user => (
                    user.googleId !== account.googleId &&
                    <Conversations user={user} />
                ))
            }
        </Box>
    )
}

export default Conversation;