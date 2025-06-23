import {Outlet} from 'react-router-dom';

import LoginPage from "../../components/login/login.component";

const SignUp = () => {
    return (
        <div> 
            <LoginPage/>
            <Outlet/>
        </div>
    );
};

export default SignUp;