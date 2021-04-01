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
    const classes = useStyls();
    return (
        <form className={classes.root}>
            <Typography variant="h1" className={classes.title}>ログインページ</Typography>
            <TextField variant="filled" label="メールアドレス" />
            <TextField variant="outlined" label="パスワード" />
            <Button variant="contained" color="secondary">
                ログイン
            </Button>
        </form>
    );
};

export default Login;


