import React from 'react';

interface ButtonProps {
    type: 'black-rounded' | 'white-rounded' | 'yellow' | 'border-only';
    onClick: () => void;
    children:React.ReactNode;
    icon?: string;
    isSelected?: boolean;
    selectedIcon?:string;
    selectedTextColor?:string;
    disabled?: boolean;
    customCss?: string
}

const Button = ({ type,children, onClick, icon,selectedIcon,disabled=false , isSelected = false,customCss="" }:ButtonProps) => {
    const baseStyle = 'inline-flex items-center justify-center text-center font-medium focus:outline-none w-fit';
    let buttonStyle = '';

    switch (type) {
        case 'black-rounded':
            buttonStyle = 'bg-black text-white rounded-full px-4 py-3';
            break;
        case 'yellow':
            buttonStyle = 'bg-selected-item text-black px-8 py-4';
            break;
        case 'border-only':
            buttonStyle = 'bg-background text-button-border-only border border-button-border-only px-8 py-4';
            break;
        case 'white-rounded':
            buttonStyle = 'bg-white text-black rounded-full px-4 py-2';
            break;
        default:
            break;
    }

    return (
        <button className={`${baseStyle} ${buttonStyle} ${customCss}`} onClick={onClick} disabled={disabled}>
            { icon && (
                    <img src={isSelected ? selectedIcon:icon} alt={'Icon'} className="w-4 h-4 mr-2" />
            )}
            {children}
        </button>
    );
};

export default Button;
