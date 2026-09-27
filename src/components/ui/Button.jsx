/**
 * Reusable Button Component adhering to the design system tokens.
 * Renders as either an <a> or <button> depending on href prop.
 */

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline-white'
  size = 'md',        // 'sm' | 'md'
  className = '',
  isExternal = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  ...rest
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'sm' ? 'btn-sm' : '';
  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  const iconElement = Icon ? <Icon size={size === 'sm' ? 16 : 18} aria-hidden="true" /> : null;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {Icon && iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && iconElement}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      disabled={disabled}
      {...rest}
    >
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </button>
  );
}
