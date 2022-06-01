import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sty from './newMLModel.module.css';

export default function NewMLModel() {
    let navigate = useNavigate();

    return (
        <div className={sty.box}>

            <div className={sty.centerBox}>
                <h1>Create New Model</h1>

                <div className={sty.inputBox}>
                    <div>
                        Select Model Type
                    </div>
                    <select name="" id="">
                        <option value="">Intrusion Detection</option>
                        <option value="">Malware Detection</option>
                        <option value="">Spam Detection</option>
                        <option value="">Anomaly Detection</option>
                    </select>
                </div>
                <div className={sty.inputBox}>
                    <div>
                        Select Learning technique(s)
                    </div>
                    <select name="" id="">
                        <option value="">Support Vector Machine (SVM)</option>
                        <option value="">Decision Tree (DT)</option>
                        <option value="">Naïve Bayesis (NB)</option>
                        <option value="">Random Forest (RF)</option>
                        <option value="">Deep Belief Network (DBN)</option>
                    </select>
                </div>
                <div className={sty.inputBox}>
                    <div>
                        Select Data sets
                    </div>
                    <select name="" id="">
                        <option value="">Data sets 1</option>
                        <option value="">Data sets 2</option>
                        <option value="">Data sets 3</option>
                    </select>
                </div>


                <div className={sty.btnBox}>
                    <div className={sty.btn}>
                        Create New Model
                    </div>
                    <div className={sty.btn}>
                        Clear Settings
                    </div>
                </div>


            </div>




        </div>
    );
}