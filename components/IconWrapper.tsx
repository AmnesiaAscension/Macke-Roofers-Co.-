
import React from 'react';
import * as Icons from 'lucide-react';

interface IconWrapperProps {
  name: string;
  className?: string;
  size?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ name, className, size = 24 }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};

export default IconWrapper;
