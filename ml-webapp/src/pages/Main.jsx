import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import ManageDataLogs from './ManageDataLogs';
import ManageMLModel from './ManageMLModel';
import NewMLModel from './NewMLModel';

import sty from './main.module.css';
import Login from "./Login";

export default function Main() {
    let navigate = useNavigate();

    return (
        <div className={sty.box}>
            <div className={sty.headBox}>
                <div onClick={() => {
                    navigate('/')
                }} className={sty.headItem} style={{
                    borderRight: 0
                }}>
                    Home
                </div>
                <div onClick={() => {
                    navigate('/manageDataLogs')
                }} className={sty.headItem} style={{
                    borderRight: 0
                }}>
                    Manage Data Logs
                </div>
                <div onClick={() => {
                    navigate('/manageMLModel')
                }} className={sty.headItem} style={{
                    borderRight: 0
                }}>
                    Manage ML Model
                </div>
                <div onClick={() => {
                    navigate('/newMLModel')
                }} className={sty.headItem}>
                    New ML Model
                </div>
                <div onClick={() => {
                    navigate('/Login')
                }} className={sty.headItem}>
                    Logout
                </div>
            </div>

            <div className={sty.contentBox}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='manageDataLogs' element={<ManageDataLogs />} />
                    <Route path='manageMLModel' element={<ManageMLModel />} />
                    <Route path='newMLModel' element={<NewMLModel />} />
                    <Route path='login' element={<Login />} />
                </Routes>
            </div>

        </div>
    );
}