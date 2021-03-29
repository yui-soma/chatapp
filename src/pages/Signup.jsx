import {Button, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
        color:"red",
    },
});

const Signup = () => {
    const classes = useStyls();
    return(
        <form className={classes.root}>
            <Typography variant="h1" className={classes.title}>ユーザー登録ページ</Typography>
            <TextField variant="filled" label="メールアドレス" />
            <TextField variant="outlined" label="パスワード" />
            <TextField variant="standard" label="ユーザー名" />
            <Button variant="contained" color="primary">
                新規登録
            </Button>
        </form>
    );
};

export default Signup;