import React, { useEffect, useState } from 'react';
import i from '../img/i.png';
import sty from './home.module.css';

export default function Home() {


    return (
        <div className={sty.box}>
            <h1>Overview</h1>
            <h1>ML Model Training Status</h1>

            <div className={sty.progressItem}>
                <div className={sty.progressLabel}>
                    Intrusion Detection Model
                </div>
                <div className={sty.progressBox}>
                    <div className={sty.progressBlock}>
                        <div className={sty.progressTxt}>
                            50%
                        </div>
                    </div>
                </div>
            </div>
            <div className={sty.progressItem}>
                <div className={sty.progressLabel}>
                    Malware Detection Medel
                </div>
                <div className={sty.progressBox}>
                    <div style={{
                        width: '75%'
                    }} className={sty.progressBlock}>
                        <div className={sty.progressTxt}>
                            75%
                        </div>
                    </div>
                </div>
            </div>

            <div className={sty.progressItem}>
                <div className={sty.progressLabel}>
                    Spam Detection Model
                </div>
                <div className={sty.progressBox}>
                    <div style={{
                        width: '100%'
                    }} className={sty.progressBlock}>
                        <div className={sty.progressTxt}>
                            100%
                        </div>
                    </div>
                </div>
            </div>

            <div className={sty.bottomBox}>
                <div className={sty.bottomItem}>
                    <h3>Data Logs</h3>
                    <div className={sty.bottomItemBottom}>
                        <img src={i} alt="" srcset="" />
                        <div>
                            <div>200 Logs</div>
                            <div>200MB Total</div>
                        </div>
                    </div>
                </div>

                <div style={{
                    margin: '0 40px'
                }} className={sty.bottomItem}>
                    <h3>Completed Predictions</h3>
                    <div className={sty.bottomItemBottom}>
                        <img src={i} alt="" srcset="" />
                        <div>
                            <div>4 Ready for Review</div>
                        </div>
                    </div>
                </div>


                <div className={sty.bottomItem}>
                    <h3>Last synced to Local Server</h3>
                    <div className={sty.bottomItemBottom}>
                        <img style={{
                            opacity: 0
                        }} src={i} alt="" srcset="" />
                        <div>
                            <div>15:30 15/05/2022</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}