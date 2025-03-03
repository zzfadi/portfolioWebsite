import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Container from './Container';

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'light' | 'dark' | 'gradient' | 'none';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  background = 'none',
  spacing = 'md',
  className,
  containerSize = 'lg',
}: SectionProps) => {
  const backgroundStyles = {
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-800 dark:bg-gray-950 text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800',
    none: '',
  };
  
  const spacingStyles = {
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };
  
  const sectionClasses = twMerge(
    clsx(
      backgroundStyles[background],
      spacingStyles[spacing],
      className
    )
  );
  
  return (
    <section id={id} className={sectionClasses}>
      <Container size={containerSize}>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section; 