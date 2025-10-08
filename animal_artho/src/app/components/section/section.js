import React from 'react';

const Section = ({ children, className }) => {
    return (
        <div className={`pt-16 min-h-screen px-4 ${className || ''}`}>
            {children}
        </div>
    );
};

export default Section;