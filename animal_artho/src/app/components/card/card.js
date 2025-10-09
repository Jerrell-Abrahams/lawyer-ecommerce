import React from 'react';

const Card = ({ title, description, image, children, className }) => (
    <div className={` bg-white rounded-lg shadow-md p-6 flex flex-col items-center  ${className || ''}`}>
        {image && (
            <img
                src={image}
                alt={title}
            />
        )}
        <h3 className="card-title text-xl font-semibold mb-2">{title}</h3>
        <p className="card-description text-gray-600 mb-4">{description}</p>
        {children}
    </div>
);

export default Card;