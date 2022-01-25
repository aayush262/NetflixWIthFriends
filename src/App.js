import React from 'react';
import Form from './component/Form';
import Header from './component/Header';

const App = () => {
    const styles = {
        display: 'flex',
        height: '85vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
   
    return (
        <div>
            <Header />
            <div style={styles}>
                <Form/>
            </div>
        </div>
    )
}

export default App;