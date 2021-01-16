import React from 'react'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Basic React Boilerplate with 'SASS', 'live-server', and 'webpack --watch' for real-time editing, and 'normalize-css'</h1>
                <p>If the H1 is red it's because
                the base.scss file located in src sets
                H1 to red.
                <br></br>
                This is a good thing because it means 
                everything is working. 
                <br></br>
                <br></br>
                If this text is blue that is also a 
                good sign because it means the related imports
                are working.
                <br></br>
                <br></br>
                Another good sign everything is working is if
                this text doesn't look too "default".
                <br></br>
                Then this means normalize.css is working fine, too.
                </p>
            </div>
        )
    };
};

export default App;
