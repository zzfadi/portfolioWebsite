"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
  wrapperClassName?: string;
  animate?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  wrapperClassName = '',
  animate = true,
  priority = false,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add ARIA attributes for accessibility
  const imgAttributes = {
    'aria-hidden': alt === '' ? true : undefined,
    'role': alt === '' ? 'presentation' : undefined,
  };

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {animate ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover ${className}`}
            onLoadingComplete={() => setIsLoaded(true)}
            loading={priority ? 'eager' : 'lazy'}
            placeholder={priority ? undefined : 'blur'}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="
            {...imgAttributes}
            {...rest}
          />
        </motion.div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${className}`}
          onLoadingComplete={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          placeholder={priority ? undefined : 'blur'}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="
          {...imgAttributes}
          {...rest}
        />
      )}
    </div>
  );
};

interface ResponsiveImageProps extends OptimizedImageProps {
  breakpoints?: {
    sm?: { width: number; height: number };
    md?: { width: number; height: number };
    lg?: { width: number; height: number };
    xl?: { width: number; height: number };
  };
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  breakpoints,
  ...props
}) => {
  // Default sizes if not provided
  const defaultSizes = '(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <OptimizedImage
      {...props}
      sizes={props.sizes || defaultSizes}
    />
  );
}; 