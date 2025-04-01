import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'
const Layout = () => {

  return (
    <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout