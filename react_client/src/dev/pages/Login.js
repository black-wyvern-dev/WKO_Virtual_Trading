import { Component } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { connect, Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from 'src/actions/authAction';

import store from 'src/store';

class Login extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <>
        <Helmet>
          <title>ログイン</title>
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
                email: Yup.string().email('有効なメールアドレスである必要があります').max(255).required('メールが必要です'),
                password: Yup.string().max(255).required('パスワードが必要です')
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
                      サインイン
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      内部プラットフォームにサインインします
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="電子メールアドレス"
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
                    label="パスワード"
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
                      今すぐサインイン
                    </Button>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    アカウントをお持ちではありませんか？
                    {' '}
                    <Link
                      component={RouterLink}
                      to="/register"
                      variant="h6"
                    >
                      サインアップ
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
