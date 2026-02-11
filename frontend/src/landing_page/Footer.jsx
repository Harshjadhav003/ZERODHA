import React from 'react';
function Footer() {
    return ( 
        <div className='container-fluid bg-dark text-white py-4'>
            <div className="col-3">
                <div className="footer-logo">
                    <img className='img-fluid' style={{width:"150px"}} src="/media/images/logo.svg" alt="Zerodha Logo" />
                </div>
            </div>
        </div>
     );
}

export default Footer ;