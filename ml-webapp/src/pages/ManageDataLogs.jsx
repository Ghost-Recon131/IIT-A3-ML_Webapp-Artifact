import React, { useEffect, useState } from 'react';
import result from '../img/result.png';
import sty from './manageDataLogs.module.css';

export default function ManageDataLogs() {


    return (
        <div className={sty.box}>
            <div className={sty.left}>
                <div className={sty.leftItem}>
                    <div>ID:1</div>
                    <div>
                        Intrusion
                    </div>
                    <div>
                        Detection
                    </div>
                    <div>
                        Model
                    </div>
                </div>
                <div className={sty.leftItem}>
                    <div>ID:2</div>
                    <div>
                        Malware
                    </div>
                    <div>
                        Detection
                    </div>
                    <div>
                        Model
                    </div>
                </div>
                <div className={sty.leftItem}>
                    <div>ID:3</div>
                    <div>
                        Spam
                    </div>
                    <div>
                        Detection
                    </div>
                    <div>
                        Model
                    </div>
                </div>
                <div className={sty.leftItem}>
                    <div>ID:4</div>
                    <div>
                        Intrusion
                    </div>
                    <div>
                        Detection
                    </div>
                    <div>
                        Model
                    </div>
                </div>
            </div>

            <div className={sty.right}>
                <h1>Model Details</h1>
                <div className={sty.rightBottom}>
                    <div style={{
                        paddingBottom: '5px'
                    }}>Number of Logs used:200/220</div>
                    <div style={{
                        paddingBottom: '5px'
                    }}>Cross Validation Result: </div>
                    <div style={{
                        textAlign: 'center',
                        paddingBottom: '5px'
                    }}>
                        <img src={result} alt="" srcset="" />
                    </div>
                    <div style={{
                        paddingBottom: '5px',
                        paddingTop: '5px'
                    }}>
                        Estimated Accuracy:98.3%
                    </div>
                    <div style={{
                        paddingBottom: '5px'
                    }}>
                        Learning Technique(s) used: SVM + DT
                    </div>

                </div>
                <div className={sty.btnBox}>
                    <div style={{
                        marginRight: 30
                    }} className={sty.btn}>
                        Deploy Model
                    </div>
                    <div className={sty.btn}>
                        Delete Model
                    </div>
                </div>
            </div>

        </div>
    );
}