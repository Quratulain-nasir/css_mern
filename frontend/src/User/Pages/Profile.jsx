import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/context';
import { decodeToken } from 'react-jwt'

export default function Profile() {
    const { state } = useContext(GlobalContext);
    const user = decodeToken(state.token)

    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px', // Adjust the width as needed
        height: 'auto', // Let the height adjust based on content
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px', // Add padding for spacing
        textAlign: 'center', // Center text content
    };

    const profileImageStyles = {
        width: '80%',
        marginBottom: '10px', // Add space between name and image
    };

    return (
        <>
        <div style={cardStyles}>
            <div className="card__title">
                {state.token ? `Welcome, ${state.user}!` : 'Guest'}
            </div>
            {state.token && (
                <>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        style={profileImageStyles}
                        alt="Profile"
                    />
                    <div className="profile__info">
                    <p>Username: {user.username}</p>
                        <p>Role: {state.user}</p>
                        {/* Additional user information */}
                    </div>
                </>
            )}
            {!state.token && (
                <button onClick={handleLogin}>Log In</button>
            )}
            
        </div>

        </>
    );
}
