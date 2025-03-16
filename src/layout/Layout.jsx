
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div className=''>
            <Header />
            <main className='main-content'>
                <div className="container-fluid">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout