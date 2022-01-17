import React, { useEffect, useRef, useState } from "react";

export const GoogleAuth = () => {

    const [isSignedIn, setSignIn] = useState(null);
    const auth = useRef();
    const button = {
        backgroundColor: 'aliceblue',
        borderRadius:'3rem',
        padding:'2rem',
        boxShadow:'0 10px 10px blue',
        fontSize: '3rem',
        cursor: 'pointer'
    }

    useEffect(() => {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.auth2.init({
                client_id: process.env.REACT_APP_CLIENT_ID
            })
            auth.current = window.gapi.auth2.getAuthInstance();
            setSignIn(auth.current.isSignedIn.get());
            auth.current.isSignedIn.listen(()=>{
                setSignIn(auth.current.isSignedIn.get())
            })
        });

    }, [])

    const handleSignIn = () => {
        auth.current.signIn();
    }
  
    const handleSignOut= () => {
        auth.current.signOut();
    }

    return (<>
        {isSignedIn ? <button style={button} onClick={handleSignOut}> Sign Out</button>
            : <button style={button} onClick={handleSignIn}> Sign in with Google</button>}
    </>)
}