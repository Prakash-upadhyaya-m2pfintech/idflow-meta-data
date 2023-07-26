import React from 'react'
import './timer.css'
import { Helmet } from 'react-helmet'
function Timer() {
    return (
        <div className='main'>
            <Helmet>
                <title>Custom Title</title>
                <meta name='test' content='Test description' />
            </Helmet>
            <div>
                <button>Start</button>
                <button>Stop</button>
                <button>Pause</button>
            </div>
        </div>
    )
}

export default Timer