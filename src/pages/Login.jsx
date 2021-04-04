import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    return (
        <form className={classes.root}>
            <Typography variant="h1" className={classes.title}>ログインページ</Typography>
            <TextField variant="filled" label="メールアドレス" />
            <TextField variant="outlined" label="パスワード" />
            <Button variant="contained" color="secondary">
                ログイン
            </Button>
            <Link to='/signup'>アカウントを既にお持ちの方</Link>
        </form>
    );
};

export default Login;


