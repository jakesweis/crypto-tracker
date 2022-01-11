import React from 'react'

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>We have received your request!</div>
            <img src={require('../../images/logo.png')} alt='success-image' className='form-image-2' />
        </div>
    )
}

export default FormSuccess
