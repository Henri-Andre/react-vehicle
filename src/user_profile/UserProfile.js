import React, { useEffect, useState } from 'react';
import Header from '../composants/admin/Header';
import Footer from '../composants/footer/Footer';
import { getRequest } from '../api/api';

const UserProfile = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const url = '/readById/:id ';
        const response = await getRequest(url);
        setData(response.json);
        } catch (error) {
        console.error(error);
        }
    };

    fetchData();
    }, []);

console.log(data);




    return (
        <div>
            <Header/>



            <Footer/>
            
        </div>
    );
};

export default UserProfile;