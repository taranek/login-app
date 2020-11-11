import React from 'react';
import * as S from './Layout.styles';

const Layout:React.FC = ({children}) => {
    return (
        <S.LayoutContainer>
            <S.LayoutInner>
                {children}
            </S.LayoutInner>
        </S.LayoutContainer>
    );
};

export default Layout;