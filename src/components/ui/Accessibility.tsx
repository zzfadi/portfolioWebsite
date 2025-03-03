"use client";

import React, { useRef, useEffect } from 'react';

interface SkipToContentProps {
  contentId: string;
  className?: string;
}

export const SkipToContent: React.FC<SkipToContentProps> = ({
  contentId,
  className = '',
}) => {
  return (
    <a
      href={`#${contentId}`}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    >
      Skip to main content
    </a>
  );
};

interface FocusTrapProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({
  children,
  isActive,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startSentinelRef = useRef<HTMLDivElement>(null);
  const endSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleStartSentinelFocus = () => {
      lastElement?.focus();
    };

    const handleEndSentinelFocus = () => {
      firstElement?.focus();
    };

    startSentinelRef.current?.addEventListener('focus', handleStartSentinelFocus);
    endSentinelRef.current?.addEventListener('focus', handleEndSentinelFocus);

    return () => {
      startSentinelRef.current?.removeEventListener('focus', handleStartSentinelFocus);
      endSentinelRef.current?.removeEventListener('focus', handleEndSentinelFocus);
    };
  }, [isActive]);

  return (
    <div ref={containerRef} className={className}>
      {isActive && <div tabIndex={0} ref={startSentinelRef} aria-hidden="true" />}
      {children}
      {isActive && <div tabIndex={0} ref={endSentinelRef} aria-hidden="true" />}
    </div>
  );
};

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return <span className="sr-only">{children}</span>;
};

export const LiveRegion: React.FC<{
  children: React.ReactNode;
  'aria-live'?: 'polite' | 'assertive';
  role?: string;
  className?: string;
}> = ({ children, 'aria-live': ariaLive = 'polite', role = 'status', className = '' }) => {
  return (
    <div
      aria-live={ariaLive}
      role={role}
      className={`sr-only ${className}`}
    >
      {children}
    </div>
  );
}; 