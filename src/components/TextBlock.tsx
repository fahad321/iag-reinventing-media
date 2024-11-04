import React from 'react';

interface TextBlockProps {
  title?: string;
  content: string;
  titleSize?: string; // Tailwind text size for title, e.g. "text-3xl"
  contentSize?: string; // Tailwind text size for content, e.g. "text-base"
  titleColor?: string; // Tailwind text color for title
  contentColor?: string; // Tailwind text color for content
}

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  content,
  titleSize = 'text-2xl',
  contentSize = 'text-base',
  titleColor = 'text-purple-400',
  contentColor = 'text-white'
}) => {
  return (
    <div className="p-4">
      {title && <h2 className={`${titleSize} font-bold ${titleColor} mb-2`}>{title}</h2>}
      <p className={`${contentSize} ${contentColor}`}>
        {content}
      </p>
    </div>
  );
};

export default TextBlock;
