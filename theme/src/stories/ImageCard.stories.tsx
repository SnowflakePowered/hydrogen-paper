import React from 'react';
import ImageCard from 'components/ImageCard/ImageCard';

export default {
    title: 'ImageCard',
    component: ImageCard,
};

export const WithoutImage = () => <ImageCard height={50} />;

export const WithImage =
    () => <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ImageCard height={200}
            elevation={1}
            image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443" />
        <ImageCard height={200}
            elevation={2}
            image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443" />
        <ImageCard height={200}
            elevation={3}
            image="http://vignette2.wikia.nocookie.net/mario/images/6/60/SMBBoxart.png/revision/latest?cb=20120609143443" />
    </div>;
