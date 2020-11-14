import * as React from 'react';
import * as S from './Icon.styles';

export type IconProps = {
    size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Icon:React.FC<IconProps> = ({size,...rest}) => {
    return (
        <S.Icon size={size} {...rest}/>
    );
};

export default Icon;