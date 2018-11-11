import React from 'react'

const Logo = (props) => {
    return (
        <div className={`logo ${props.className}`}>
            <div className="logo__line-top">Find</div>
            <div className="logo__line-bottom">Work</div>
        </div>
    );
}
export default Logo;