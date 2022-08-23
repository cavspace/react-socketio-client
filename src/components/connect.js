import React from 'react';
import io from 'socket.io-client';

/**
 * 1. input， 输入用户id（给个默认值）
 * 2. button， 点击建立长链接
 */
class SocketIoConnection extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }


}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            连接
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            断开
        </button>
    );
}

function UserGreeting(props) {
    return <h1>已连接</h1>;
}

function GuestGreeting(props) {
    return <h1>已断开</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

export default SocketIoConnection;