import {Button} from '@material-ui/core';
import {auth} from '../firebase/config';

const Room = () => {
    const logout = () => {
        auth
            .signOut()
            .then(() => console.log('ログアウト成功') )
            .catch(() =>console.log('ログアウト失敗'));
    }
    return (
        <>
            <h1>チャットルーム</h1>
            <Button onClick={logout}>ログアウト</Button>
        </>
    );
};

export default Room;