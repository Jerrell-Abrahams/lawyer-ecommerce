import React from 'react';

const Section = ({ children, className }) => {
    return (
        <div className={`pt-16 min-h-screen px-2 ${className || ''} md:px-20`}>
            {children}
        </div>
    );
};

export default Section;