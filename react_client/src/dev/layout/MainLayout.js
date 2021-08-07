import { Outlet, useLocation } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import MainNavbar from './MainNavbar';


import store from 'src/store';

const MainLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: window.location.pathname == "/" ? 0 : 64,
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  backgroundImage: 'url(./light-purple-04.jpg)',
  backgroundSize: 'cover',
  overflow: 'auto'
});

const MainLayout = ({is_busy}) => {
    if (is_busy == true) {
        return ("Loading")
    } else {
        return (
        <MainLayoutRoot>
            
          { window.location.pathname == "/" ? "" : <MainNavbar /> }
            <MainLayoutWrapper>
            <MainLayoutContainer>
                <MainLayoutContent>
                <Outlet />
                </MainLayoutContent>
            </MainLayoutContainer>
            </MainLayoutWrapper>
        </MainLayoutRoot>
        );
    }
}

const mapStateToProps = (state) => ({
  is_busy: state.auth.is_busy
})

export default MainLayout;
