import React from 'react';
import '../css/loading.css';

function Loading() {
    return (
        <div className="loading">
            <img  className="loading__spinner" src="http://www.vitorazevedo.net/external_files/loading_small.png" alt="Loading...." />
        </div>
    )
}

export default Loading
