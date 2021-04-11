import {useState} from 'react';
import {useHistory,Link} from 'react-router-dom';
import {Button, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {auth} from '../firebase/config';

const useStyles = makeStyles({
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
        color:"red",
    },
});

const Signup = () => {
    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    
    const handleSubmit= (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                userCredential.user
                    .updateProfile({
                        displayName: username,
                    })
                    .then(() => {
                        console.log('ユーザーの作成に成功しました。', userCredential);
                        history.push('/');                        
                    })
            })
            .catch((err) => {
                console.log('ユーザーの作成に失敗しました。', err);
            });
    };

    return(
        <form onSubmit={handleSubmit} className={classes.root}>
            <Typography variant="h1" className={classes.title}>ユーザー登録ページ</Typography>
            <TextField 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                variant="filled" 
                label="メールアドレス" 
            />
            <TextField 
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined" 
                label="パスワード"
            />
            <TextField 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="standard"
                label="ユーザー名" 
            />
            <Button fullWidth type='submit' variant="contained" color="primary">
                新規登録
            </Button>
            <Link to = '/login'>アカウントを既にお持ちの方</Link>
        </form>
    );
};

export default Signup;