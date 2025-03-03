import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

const Container = ({
  children,
  size = 'lg',
  className,
}: ContainerProps) => {
  const baseStyles = 'w-full mx-auto px-4 sm:px-6 lg:px-8';
  
  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: '',
  };
  
  const containerClasses = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      className
    )
  );
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container; 