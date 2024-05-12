import { Button, ButtonProps } from '@mantine/core';
import "./style.scss";

interface ButtonComponentProps extends ButtonProps {
    color?: string;
    leftSection?: JSX.Element;
    onClickFn: () => void;
    children: JSX.Element | string;
}

export const ButtonComponent = ({color, leftSection, onClickFn, children, ...propsMantine}: ButtonComponentProps) => {

    const handleOnClick = () => {
        onClickFn();
    };

    return (
        <div className='container-button-component'>
            <Button 
                {...propsMantine}
                leftSection={leftSection}
                color={color}
                autoContrast
                onClick={handleOnClick}
            >
                {children}
            </Button>            
        </div>

    );
};
