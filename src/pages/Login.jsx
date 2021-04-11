import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {auth} from '../firebase/config';

const useStyls = makeStyles({
    root: {
        width: "400px",
        height: "370px",
        margin: "50px auto",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    title: {
        fontSize: "32px",
        color: "red",
    },
});

const Login = () => {
    const history = useHistory();
    const classes = useStyls();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('ログイン成功', userCredential);
                history.push('/');
            })
    };
    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <Typography variant="h1" className={classes.title}>
                ログインページ
            </Typography>
            <TextField 
                value = {email}
                onChange = {(e) => {setEmail(e.target.value)}}
                fullWidth
                variant="filled" 
                label="メールアドレス" 
            />
            <TextField 
                value = {password}
                onChange = {(e) => {setPassword(e.target.value)}}
                type = 'password'
                fullWidth
                variant="outlined" 
                label="パスワード" 
            />
            <Button type='submit' fullWidth variant="contained" color="secondary">
                ログイン
            </Button>
            <Link to='/signup'>アカウントを既にお持ちの方</Link>
        </form>
    );
};

export default Login;


