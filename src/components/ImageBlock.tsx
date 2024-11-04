import React from 'react';

interface ImageBlockProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt = 'image', className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
};

export default ImageBlock;
