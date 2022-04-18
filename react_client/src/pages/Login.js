import { Component } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from 'src/actions/authAction';

import store from 'src/store';

class Login extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <>
        <Helmet>
          <title>LOG IN</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}
        >
          <Container maxWidth="sm">
            <Formik
              initialValues={{
                email: store.getState().auth.user.email,
                password: store.getState().auth.user.password,
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email address').max(255).required('requires an email'),
                password: Yup.string().max(255).required('Password required')
              })}
              onSubmit={(data) => {
                doLogin(store.dispatch, navigate, data);
                return true;
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                    >
                      Sign in
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Sign in to the internal platform
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="e-mail address"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign in now
                    </Button>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Do you have an account?
                    {' '}
                    <Link
                      component={RouterLink}
                      to="/register"
                      variant="h6"
                    >
                      sign up
                    </Link>
                  </Typography>
                </form>
              )}
            </Formik>
          </Container>
        </Box>
      </>
    );
  }
};

// const mapStateToProps = state => ({
//   user: state.auth.user,
//   errors: state.auth.errors,
//   loading: state.auth.loading,
// })

// const mapDispatchToProps = (dispatch) => ({
//     doLogin: bindActionCreators(doLogin, dispatch)
// })

export default function(props) {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}
