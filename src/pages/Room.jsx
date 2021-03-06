import {useContext, useEffect,useState} from 'react';
import {
    Button, 
    TextField, 
    Card, 
    CardHeader, 
    CardContent,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase,{auth} from '../firebase/config';
import {AuthContext} from '../context/AuthContext';
import {db} from '../firebase/config';
import ChatForm from '../components/ChatForm';
import DeleteDialog from '../components/DeleteDialog';

const useStyles = makeStyles({
    root: {
        minHeight: '100hv',
        backgroundColor: "#F0F0F0",
    },
    cardContainer: {
        margin: '20px',
    },
    card: {
        padding: '15px',
        width: '400px',
        margin: '20px auto',
    },
});

const Room = () => {
    const classes = useStyles();
    const authState = useContext(AuthContext);
    const [massages, setMessages] = useState([]);
    const messagesRef = db.collection('messages');
    const [deleteChatId, setDeleteChatId] = useState();

    const logout = () => {
        auth
            .signOut()
            .then(() => console.log('ログアウト成功') )
            .catch(() =>console.log('ログアウト失敗'));
    };

const addChat = (text) => {
    if (authState.loading || authState.user ==! null){
        return;
    }
    messagesRef.add({
        content: text,
        username: authState.user.displayName,
        autherId: authState.user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

const deleteChat = (id) => {
    db.collection('messages')
    .doc(id)
    .delete()
    .then(() => setDeleteChatId('')) 
    .catch((err) => console.log("削除失敗", err));
};

    useEffect(() => {
        messagesRef.orderBy('createdAt','desc').onSnapshot((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => {
                    return {
                    ...doc.data(),
                    id: doc.id,
                    };
                });
                setMessages(data);
            })
            
        // messagesRef
        //     .get()
        //     .then((querySnapshot) => {
        //         const data = querySnapshot.docs.map((doc) => ({
        //             ...doc.data(),
        //             id: doc.id,
        //         }));
        //         console.log(data);
        //         setMessages(data);
        //     })
        //     .catch((err) => {
        //         console.log('ユーザー取得失敗', err);
        //     });
    },[]);

    return (
        <div className = {classes.root}>
            <h1>チャットルーム</h1>
            <ChatForm addChat = {addChat} />
            <div className = {classes.cardContainer}>
                {massages.map((massage) => {
                    console.log(authState.user.uid , massage)
                    return (
                        <Card key = {massage.id} className = {classes.card}>
                            <CardHeader 
                                title= {massage.username}
                                action = {
                                    authState.user.uid === massage.autherId && (
                                <Button
                                    onClick = {() =>setDeleteChatId(massage.id)}
                                    variant = 'contained'
                                >
                                    削除
                                </Button>
                                    )}
                            />
                            <CardContent>
                                <Typography>{massage.content}</Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
            <Button onClick={logout}>ログアウト</Button>
            <DeleteDialog 
                id = {deleteChatId}
                onOk={deleteChat} 
                onCancel= {() => setDeleteChatId("")} />
        </div>
    );
};

export default Room;
