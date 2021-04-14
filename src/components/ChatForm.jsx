import {useState} from 'react';
import {Button, TextField} from '@material-ui/core';

const ChatForm = ({addChat}) => {
    const [text, setText] =useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addChat(text);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <TextField 
                value={text}
                onChange = {(e) => setText(e.target.value)}
                placeholder='チャットを入力...' 
            />
            <Button type="submit" variant='contained' color='primary'>
                送信
            </Button>
        </form>
    );
};

export default ChatForm;