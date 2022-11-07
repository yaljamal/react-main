import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../components';

interface DashboradLayoutProps {
    children: ReactNode;
}

const Main = styled.main`
    @import '/theme/breakpoints.scss';
    @import '/theme/palette.scss';

    display: flex;
    flex-direction: column;

    min-height: 100vh;
    min-width: 360px;
`;

const Content = styled('div')`
    z-index: 1;
    width: 100%;
    flex-grow: 1;
    max-width: 1280px;
    margin: 0 auto;
`;

export const DashboardLayout = memo(({ children }: DashboradLayoutProps) => {
    return (
        <Main>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Main>
    );
});
