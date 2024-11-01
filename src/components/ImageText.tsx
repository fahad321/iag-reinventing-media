import React from 'react';

interface ImageTextProps {
  imageUrl: string;
  altText: string;
  text: string;
  layout: 'left' | 'right' | 'top' | 'bottom';
}

const ImageText: React.FC<ImageTextProps> = ({ imageUrl, altText, text, layout }) => {
  const containerClasses = {
    left: 'flex flex-row',
    right: 'flex flex-row-reverse',
    top: 'flex flex-col',
    bottom: 'flex flex-col-reverse',
  };

  const imageClasses = 'w-1/2 object-cover';
  const textClasses = 'w-1/2 p-6 flex items-center';

  return (
    <div className={`${containerClasses[layout]} bg-gray-100 rounded-lg overflow-hidden shadow-lg`}>
      <img src={imageUrl} alt={altText} className={imageClasses} />
      <div className={textClasses}>
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default ImageText;