import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from 'components/Routes';
import { selectIsRefreshing } from 'redux/selectors';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { refreshUser } from 'redux/Auth/auth-operations';
const Home = lazy(() => import('../Pages/Home/Home'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
const LogIn = lazy(() => import('../Pages/LogIn/LogIn'));
const Register = lazy(() => import('../Pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
