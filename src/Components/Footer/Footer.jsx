import React from 'react'
import "./footer.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-helper">
                    <div className="footer-address">
                        <div>
                            115 Salasar Vatika 9th, Nangal Road, Jhotwara, Jaipur, Rajasthan, India-302012 
                        </div>
                        <div className="number">
                            +91-9413666423
                        </div>
                        <div>TheITstudio@redpositive.import</div>
                        <div>Carrers: hr@studio.in</div>
                    </div>
                    <div className="footer-account">
                        Get in Touch
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright &#8471; TheITstudio, All rights reserved by Redpositive Service OPC Pvt.Ltd
            </div>
        </div>
    )
}

export default Footer
