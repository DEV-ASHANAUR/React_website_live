import React from 'react';
const date = new Date().getFullYear();
const Footer = () => {
    return (
        <> 
            <footer>
                <div className="w-100 bg-light text-center overflow-hidden">
                    <p>Copyright &copy; {date} MAR. All Rights Reserved | Tarms And Condition </p>
                </div>
            </footer>
        </>
    );
}
export default Footer;