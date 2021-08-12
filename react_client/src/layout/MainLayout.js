import { Outlet, useLocation } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import store from 'src/store';
import { width } from '@material-ui/system';

const MainLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    background: 'rgb(32,32,32)',
    height: '100%',
    overflow: 'auto',
    width: '100%',
    margin: 'auto',
  })
);

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  marginTop: '300px',
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',  
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const MainLayout = ({is_busy}) => {
    if (is_busy == true) {
        return ("Loading")
    } else {
        return (
        <MainLayoutRoot>            
          <Header />
          <Navbar />
          <MainLayoutWrapper>
            <MainLayoutContainer>
                <MainLayoutContent>
                  <Outlet />
                </MainLayoutContent>
            </MainLayoutContainer>
          </MainLayoutWrapper>
          <Footer />
        </MainLayoutRoot>
        );
    }
}

const mapStateToProps = (state) => ({
  is_busy: state.auth.is_busy
})

export default MainLayout;
