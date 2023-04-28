import React from 'react';
import AdminHeader from '../composants/admin/Header';
import PublicHeader from '../composants/public/Header';
import { accountService } from '../service/account';
import Footer from '../composants/footer/Footer';

const Contact = () => {
    const isLoggedIn = accountService.logged();


    return (
        <div>
            {isLoggedIn ? <AdminHeader/> : <PublicHeader/>}
        
            <Footer/>
        </div>
    );
};

export default Contact;