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
                        <option value="">Model Type 1</option>
                        <option value="">Model Type 2</option>
                        <option value="">Model Type 3</option>
                    </select>
                </div>
                <div className={sty.inputBox}>
                    <div>
                        Select Learning technique(s)
                    </div>
                    <select name="" id="">
                        <option value="">Learning technique 1</option>
                        <option value="">Learning technique 2</option>
                        <option value="">Learning technique 3</option>
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