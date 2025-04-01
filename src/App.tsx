import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from "./Layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About";
import Characters, {loader as charactersLoader} from "./pages/Characters";
import CharacterDetails, {loader as characterDetailsLoader} from "./pages/CharacterDetails";
import HousesLayout, {loader as houseLayoutLoader} from "./Layouts/HousesLayout";
import Houses, {loader as housesLoader} from "./pages/Houses";
import HousesHomePage from "./pages/HousesHomePage";
import Login, {action as loginAction} from "./pages/Login";
import Signup, {action as signupAction} from "./pages/Signup";
import ForgetUsername, {action as forgetUsernameAction} from "./pages/ForgetUsername";
import ForgetPassword, {action as forgetPasswordAction} from "./pages/ForgetPassword";
import ResetPassword, {action as resetPasswordAction} from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import ErrorElement from "./components/ErrorElement";
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} path="/" errorElement={<ErrorElement />}>
    <Route element={<Home />} index/>
    <Route element={<About />} path="about"/>
    <Route element={<Characters />} loader={charactersLoader} path="characters"/>
    <Route element={<CharacterDetails />} loader={characterDetailsLoader} path="characters/:id"/>
    <Route element={<HousesLayout />} loader={houseLayoutLoader} path="houses">
      <Route element={<HousesHomePage />} index/>
      <Route element={<Houses />} loader={housesLoader} path=":id"/>
    </Route>
    <Route element={<Login />} action={loginAction} path="login"/>
    <Route element={<Signup />} action={signupAction} path="signup"/>
    <Route element={<ForgetUsername />} action={forgetUsernameAction} path="forget-username"/>
    <Route element={<ForgetPassword />} action={forgetPasswordAction} path="forget-password"/>
    <Route element={<ResetPassword />} action={resetPasswordAction} path="reset-password"/>
    <Route element={<NotFound />} path="*"/>
  </Route>
))

  return (
    <Provider store={store}>
  <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
