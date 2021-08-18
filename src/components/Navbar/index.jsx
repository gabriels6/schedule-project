import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveUser} from '../../store/actions/user'
import {Main,NavMenu,Logo,NavLink,NavButton} from './styles';


const Navbar = ({user,saveUser}) => {

    const history = useHistory();

    function handleLogout(){
        saveUser('','');
        history.push('/Login');
    }

    return(
        <Main>
            <Logo>
                Schedule
            </Logo>
            <NavMenu>
                <div>
                    <NavLink to="/Schedule">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/DR">Daily Reviews</NavLink>
                </div>
                <div>
                    {"<" + user.Username + ">"}
                </div>
                <div>
                    <NavButton onClick={handleLogout}>Log out</NavButton>
                </div>
            </NavMenu>
        </Main>
    );
}

const mapStateToProps = (state) => ({
    user: state.users.user
});

export default connect(mapStateToProps,{saveUser})(Navbar);