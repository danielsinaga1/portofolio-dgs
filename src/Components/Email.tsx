import React, { useCallback } from 'react';

interface EmailProps {
  mailto: string;
  label?: string;
  subject?: string;
  body?: string;
  className?: string;
  children?: React.ReactNode;
}

const Email: React.FC<EmailProps> = ({ 
  mailto, 
  label, 
  subject, 
  body, 
  className = '',
  children 
}) => {
  // Construct the mailto URL with optional parameters
  const constructMailtoUrl = useCallback(() => {
    const params = new URLSearchParams();
    
    if (subject) params.append('subject', subject);
    if (body) params.append('body', body);
    
    const queryString = params.toString();
    return `mailto:${mailto}${queryString ? `?${queryString}` : ''}`;
  }, [mailto, subject, body]);

  const handleEmailClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = constructMailtoUrl();
  }, [constructMailtoUrl]);

  return (
    <a
      href={constructMailtoUrl()}
      onClick={handleEmailClick}
      className={className}
      title={`Send email to ${mailto}`}
      aria-label={`Send email to ${mailto}`}
    >
      {children || label || mailto}
    </a>
  );
};

export default React.memo(Email);
