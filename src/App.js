import React from 'react';
import { GoogleAuth } from './component/GoogleAuth';

const App = () => {
    const styles = {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
   
    return (
        <div style={styles}>
            <GoogleAuth/>
        </div>
    )
}

export default App;