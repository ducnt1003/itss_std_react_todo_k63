import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

/* ライブラリ */
import { firebase, auth, uiConfig } from "../lib/firebase";

export default function Login() {
    return (
        <div className="column panel-block">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
};