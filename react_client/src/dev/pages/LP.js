import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Button,
  Avatar,
} from '@material-ui/core';

const LP = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>LP</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.none',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Grid>
            <Grid
              item
              xs={12}
              md={12}
            >
              <Avatar
                src="/static/logo.png"
                sx={{
                  height: "auto",
                  width: "100%"
                }}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              marginTop: "64px"
            }}
            container
          >
            <Grid
              item
              xs={12}
              md={5}
            >
              <Button
                color="primary"
                fullWidth
                onClick={() => {
                  navigate('/login', { replace: false });
                }}
                size="large"
                variant="contained"
              >
                Login
              </Button>
            </Grid>
            <Grid 
              item
              xs={12}
              md={2}
            ></Grid>
            <Grid
              item
              xs={12}
              md={5}
            >
              <Button
                fullWidth
                onClick={() => {
                  navigate('/register', { replace: false });
                }}
                size="large"
                variant="contained"
              >
                SignUp
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LP;
