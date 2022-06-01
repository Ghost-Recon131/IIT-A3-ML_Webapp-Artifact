import React, { useEffect, useState } from 'react';
import photo from '../img/img.png';
import s1 from '../img/share.png';
import s2 from '../img/s2.png';
import user from '../img/user.png';
import sty from './manageMLModel.module.css';

export default function ManageMLModel() {


    return (
        <div className={sty.box}>
            <div className={sty.left}>
                {[0, 1, 2, 3, 4, 5].map((v) => {
                    return (
                        <div key={v} className={sty.leftItem}>
                            <div style={{
                                width: 80
                            }}>0-1-10-21</div>
                            <div style={{
                                width: 140
                            }} className={sty.imgBox}>
                                <span>Gerald</span>
                                <img src={user} alt="" srcset="" />
                            </div>
                            <div style={{
                                width: 80
                            }}>
                                256kb
                            </div>
                            <div className={sty.imgBox}>
                                <img style={{
                                    marginRight: 5
                                }} src={s1} alt="" srcset="" />
                                <img src={s2} alt="" srcset="" />
                            </div>
                        </div>
                    );
                })}


            </div>
            <div className={sty.right}>
                <img src={photo} alt="" srcset="" />
                <h4 style={{
                    marginTop: 10
                }}>
                    Selected Log
                </h4>
                <h4 style={{
                    marginBottom: 10
                }}>
                    Properties
                </h4>
                <div className={sty.desc}>
                    we know that you,we know that youwe know that youwe know that youwe know that you
                    we know that youwe know that youwe know that youwe know that youwe know that you
                    we know that youwe know that youwe know that youwe know that youwe know that you
                </div>
            </div>
        </div>
    );
}