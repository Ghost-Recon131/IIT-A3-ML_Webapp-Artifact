import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sty from './forgotPassword.module.css';

export default function ForgotPassword() {
    let navigate = useNavigate();

    return (
        <div className={sty.box}>

            <div className={sty.centerBox}>
                <h1>Forgot Password</h1>

                <div className={sty.inputBox}>
                    {/* <input type="text" placeholder='New Password' /> */}
                    <select name="" id="">
                        <option value="">Secret Question</option>
                        <option value="">Question1</option>
                        <option value="">Question2</option>
                    </select>
                </div>

                <div className={sty.inputBox}>
                    <input type="text" placeholder='Answer' />
                </div>

                <div className={sty.inputBox}>
                    <input type="text" placeholder='New Password' />
                </div>

                <div className={sty.inputBox}>
                    <input type="text" placeholder='Confirm New Password' />
                </div>

                <div className={sty.btnBox}>
                    <div onClick={() => {
                        navigate('/login')
                    }} className={sty.btn}>
                        Change Password
                    </div>
                    <div onClick={() => {
                        navigate('/login')
                    }} className={sty.btn}>
                        Back
                    </div>
                </div>


            </div>




        </div>
    );
}