import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';

import {signIn, signOut} from './../actions'

const GoogleAuth = (props) => {

    const {isSignedIn} = props.auth;
    const auth = useRef();
    const button = {
        backgroundColor: '#e50914',
        lineHeight: 'normal',
        padding: '7px 17px',
        fontWeight: '400',
        fontSize: '1rem',
        float:'right'
    }
    

    useEffect(() => {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.auth2.init({
                client_id: process.env.REACT_APP_CLIENT_ID
            })
            auth.current = window.gapi.auth2.getAuthInstance();
            handleAuth(auth.current.isSignedIn.get())
            auth.current.isSignedIn.listen(handleAuth)
        });

    }, [])

    const handleAuth = (isSignedIn)=>{
        if(isSignedIn){
            props.signIn()
        }else{
            props.signOut()
        }
    }

    const handleSignIn = () => {
        auth.current.signIn()
    }

    const handleSignOut = () => {
        auth.current.signOut()
    }

    return (<>
        {isSignedIn ? <button style={button} onClick={handleSignOut}> Sign Out</button>
            : <button style={button} onClick={handleSignIn}> Sign in with Google</button>}
    </>)
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{
    signOut,
    signIn
})(GoogleAuth)