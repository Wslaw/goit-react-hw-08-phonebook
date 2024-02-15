import { useState, useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";


import styles from './sign-up-form.module.css';


const SignUpForm = () => {
    
    return (
        <>
            <form>
                <div className={styles.block}>
                    <label>
                        Name:
                    </label>
                    <input name="name" required/>
                </div>
                <div className={styles.block}>
                    <label>
                        Email:
                    </label>
                    <input type="email" name="email" required/>
                </div>
                <div className={styles.block}>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" required/>
                </div>
                <button className={styles.btn} type="submit">
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default SignUpForm;
