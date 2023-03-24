import clsx from 'clsx';
import * as React from 'react';

const colors = {
  lightBg: 'bg-[#005BBE00]',
  hoverLightBg: 'hover:bg-[#005BBE0A]',
  focusLightBg: 'focus:bg-[#005BBE1F]',
  pressedLightBg: 'active:bg-[#005BBE3D]',
  outlinedBorder: 'border border-solid border-[#1B1B1F1F]',
  disabledText: 'disabled:text-[#1B1B1F61]',
};

const variants = {
  text: clsx(
    colors['lightBg'],
    'text-primary-50-main',
    colors['hoverLightBg'],
    colors['focusLightBg'],
    colors['pressedLightBg'],
    colors['disabledText']
  ),
  outlined: clsx(
    colors['lightBg'],
    'text-primary-50-main',
    colors['hoverLightBg'],
    colors['focusLightBg'],
    colors['pressedLightBg'],
    colors['disabledText'],
    colors['outlinedBorder']
  ),
  contained:
    'bg-primary-50-main text-neutral-100 hover:bg-primary-40 focus:bg-primary-30 active:bg-primary-30 disabled:bg-neutral-95',
  elements: 'bg-red-600 text-white',
  icon: 'bg-transparent px-0 py-0 hover:fill-primary-30 focus:fill-primary-40 active:fill-primary-30',
  link: 'bg-red-600 text-white',
  box: 'bg-red-600 text-white',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', variant = 'text', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'opacity-100 rounded-[6px] font-bold text-[14px] leading-[19px] tracking-normal text-left bg-origin-padding bg-clip-padding bg-no-repeat',
          variant === 'icon' ? 'px-0 py-0' : 'px-6 py-3',
          variants[variant],
          className
        )}
        {...props}
      >
        <span>{props.children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
