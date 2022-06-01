import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sty from './login.module.css';

export default function Login() {
    let navigate = useNavigate();

    return (
        <div className={sty.box}>

            <div className={sty.centerBox}>
                <h1>ML Web Management</h1>

                <div className={sty.inputBox}>
                    <input type="text" placeholder='Username' />
                </div>

                <div className={sty.inputBox}>
                    <input type="text" placeholder='Password' />
                </div>

                <div className={sty.btnBox}>
                    <div onClick={() => {
                        navigate('/')
                    }} className={sty.btn}>
                        Login
                    </div>
                    <div onClick={() => {
                        navigate('/forgotPassword')
                    }} className={sty.btn}>
                        Forgot Password
                    </div>
                </div>


            </div>




        </div>
    );
}