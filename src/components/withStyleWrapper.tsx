import React from 'react';

interface WithStyleWrapperProps {
  className?: string;
}

function withStyleWrapper<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithStyleWrapperProps> {
  return function WithStyleWrapper({ className, ...props }: WithStyleWrapperProps & P) {
    return (
      <div className={className}>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };
}

export default withStyleWrapper;