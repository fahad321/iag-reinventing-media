import React from 'react';

interface ImageTextProps {
  imageUrl: string;
  altText: string;
  title?: string;
  text: string[];
  layout: 'left' | 'right' | 'top' | 'bottom';
}

const ImageText: React.FC<ImageTextProps> = ({ imageUrl, altText, title, text, layout }) => {
  const containerClasses = {
    left: 'flex flex-row',
    right: 'flex flex-row-reverse',
    top: 'flex flex-col',
    bottom: 'flex flex-col-reverse',
  };

  const imageClasses = 'w-1/2 object-cover';
  const textClasses = 'w-1/2 p-6 flex flex-col justify-center';

  return (
    <div className={`${containerClasses[layout]} overflow-hidden`}>
      <img src={imageUrl} alt={altText} className={imageClasses} />
      <div className={textClasses}>
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        {text.map((paragraph, index) => (
          <p key={index} className="text-wt mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageText;