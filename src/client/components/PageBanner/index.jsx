import React from 'react';

const PageBanner = ({ banner }) => (
    <div
        className="page-banner position-relative"
        style={{ backgroundImage: `url(${banner.imageSrc})` }}
    >
        <h1 className="page-banner__title position-absolute m-0">{banner.title}</h1>
    </div>
)

export default PageBanner;
