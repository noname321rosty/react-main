import React from 'react';
import {Route, Switch} from "react-router";


import './App.css';
import Users from "./components/users";
// import {Posts} from "./components/posts";
import {NavLink} from "react-router-dom";
import User from "./components/user1";

class App extends React.Component {

    state = {
        trigger: true
    }

    block = () => {
        this.setState({trigger: !this.state.trigger})
    }

    render() {
        return (
            <div>

                <div>
                    <NavLink to='/'> home </NavLink>
                    <NavLink to='/users'> users </NavLink>
                    {/*<NavLink to='/posts' > posts </NavLink>*/}
                    <hr/>

                </div>
                <div>
                    <button onClick={this.block}>{this.state.trigger ? 'off' : 'on'}</button>
                </div>
                <div>
                    <Switch>
                        <Route path='/' exact render={() => <h2>Main </h2>}/>
                        {
                            this.state.trigger && (
                                <>
                                    <Route path={'/users/:id'} exact component={User}/>
                                    <Route path='/users' exact component={Users}/>
                                </>
                            )
                        }



                        {/*<Route path={'/users/:id'} exact component={User}/>*/}
                        {/*<Route path='/users' exact component={Users}/>*/}


                        <Route render={() => <h2 style={{background: 'red', color: 'white'}}> Eror 404 </h2>}/>
                    </Switch>
                    {/*<Route path='/posts' component={Posts}/>*/}
                </div>

            </div>
        );
    }


}

export default App;
