import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function PaymentLoading() {
    const navigate = useNavigate();
    const location = useLocation();
    const matId = location.state?.matId;

    useEffect(() => {
        const initiatePayment = async () => {
            try {
                const accessToken = sessionStorage.getItem('token'); // Make sure 'accessToken' is the correct key where the token is stored
                if (!accessToken) {
                    throw new Error("No access token available.");
                }
                console.log(accessToken);
                const response = await axios.post(`${process.env.REACT_APP_BACK_API}/api/v1/payment/ready`, {
                    "matId": matId,
                    "totalAmount": 7000
                },{
                    headers:{
                        Authorization: `${accessToken}`
                    }
                }).then(response => {
                    const next_redirect_pc_url = response.data.next_redirect_pc_url;
                    if (next_redirect_pc_url) {
                        console.log("next_redirect_pc_url : " + next_redirect_pc_url);
                        window.location.href = next_redirect_pc_url;
                    } else {
                        throw new Error('No redirect URL provided');
                    }
                })
                .catch(error => {
                    console.error('Payment initiation failed:', error);
                    navigate('/error'); 
                });
                console.log("Response Data:", response.data);//****
                console.log("Response Headers:", response.headers);

                console.log(response.data);
                const next_redirect_pc_url = response.data.next_redirect_pc_url;
                if (next_redirect_pc_url) {
                    console.log("next_redirect_pc_url : " + next_redirect_pc_url);
                    window.location.href = next_redirect_pc_url;
                } else {
                    throw new Error('No redirect URL provided');
                }
            } catch (error) {
                console.error('Payment initiation failed:', error);
                navigate('/error'); 
            }
        };

        const handlePaymentSuccess = () => {
            console.log("handlePaymentSuccess 핸들러에 들어옴!");
            const urlParams = new URLSearchParams(window.location.search);
            const pgToken = urlParams.get('pg_token');
            if (pgToken) {
                console.log("Payment success with pg_token:", pgToken);
                navigate('/lental/3', { state: { pgToken: pgToken } });
            } else {
                initiatePayment();
            }
        };

        handlePaymentSuccess();
    }, [navigate, matId]);

    return (
        <div>결제 로딩 페이지 입니다</div>
    );
}


export default PaymentLoading;
