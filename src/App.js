import React, { useEffect, useState } from 'react';

import Navbar from './component/UI/Navbar/Navbar';
import AppRouter from './component/UI/AppRouter';
import { AuthContext } from './context';

import './App.css';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true);
        }
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
            <div className="App">
                <Navbar />
                <AppRouter />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
