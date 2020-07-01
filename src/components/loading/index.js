import React from 'react'
import { RotateSpinner } from 'react-spinners-kit'

import './style.css'

const Loading = () => {
    return(
        <div className="loading">
            <RotateSpinner size={35} color="#231225" />
        </div>
    );
}

export default Loading;