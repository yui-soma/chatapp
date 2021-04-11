import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoggedInRoute = ({children}) => {
    const authState = useContext(AuthContext);
    console.log(authState);
    
    if (authState.loading){
        return <h1>ロード中...</h1>
    }

    if (authState.user === null){
        return <Redirect to = '/login' />;
    }

    return(children);
};


export default LoggedInRoute;