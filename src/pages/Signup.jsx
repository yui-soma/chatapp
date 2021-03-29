import {Button, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

const useStyls = makeStyles({
    root: {
        width: "350px",
        height: "370px",
        desplay: "flex",
        flexDirection: "colum",
        justifyContent: "space-bitween",
    }
});

const Signup = () => {
    const classes = useStyls();
    return(
        <form className={classes.root}>
            <Typography variant="h1">ユーザー登録ページ</Typography>
            <TextField variant="filled" label="メールアドレス" />
            <TextField variant="outlined" label="パスワード" />
            <TextField variant="standard" label="ユーザー名" />
            <Button variant="contained">新規登録</Button>
        </form>
    );
};

export default Signup;