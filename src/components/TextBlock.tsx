import React from 'react';

interface TextBlockProps {
  title?: string;
  content?: string;
  titleSize?: string;
  titleColor?: string;
  contentColor?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, content, titleSize = 'text-xl', titleColor = 'text-white', contentColor = 'text-white' }) => {
  return (
    <div className="text-left">
      <h3 className={`${titleSize} ${titleColor} font-bold mb-2`}>{title}</h3>
      {content && <p className={`${contentColor}`}>{content}</p>}
    </div>
  );
};

export default TextBlock;