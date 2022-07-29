import './Login.scss';
import React from 'react';
import ImageComponent from './ImageComponent';

class Login extends React.Component {
    render() {
        return (
            <div className="main-wrapper login-wrapper">
                <div className="logo-section">
                    <ImageComponent url="assets/images/videonetics-logo.png" alt="Provider Logo" />
                    <div className="triangle-bg"></div>
                </div>
                <div className="login-section">
                    <h1 className="form-heading">Videonetics Provider Portal</h1>
                    <form className="login-form" >
                        <label for="emailId" className="input-wrap">
                            <svg className="label-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.66602C9.17591 1.66602 8.37033 1.91039 7.68512 2.36823C6.99992 2.82606 6.46587 3.47681 6.1505 4.23817C5.83514 4.99953 5.75262 5.8373 5.91339 6.64556C6.07417 7.45381 6.471 8.19624 7.05372 8.77896C7.63644 9.36168 8.37887 9.75852 9.18712 9.91929C9.99538 10.0801 10.8332 9.99755 11.5945 9.68218C12.3559 9.36682 13.0066 8.83276 13.4645 8.14756C13.9223 7.46235 14.1667 6.65677 14.1667 5.83268C14.1667 4.72761 13.7277 3.66781 12.9463 2.8864C12.1649 2.105 11.1051 1.66602 10 1.66602V1.66602ZM10 8.33268C9.50555 8.33268 9.0222 8.18606 8.61107 7.91136C8.19995 7.63665 7.87952 7.24621 7.6903 6.78939C7.50108 6.33258 7.45157 5.82991 7.54804 5.34496C7.6445 4.86 7.8826 4.41455 8.23223 4.06492C8.58186 3.71528 9.02732 3.47718 9.51227 3.38072C9.99723 3.28426 10.4999 3.33376 10.9567 3.52298C11.4135 3.7122 11.804 4.03263 12.0787 4.44376C12.3534 4.85488 12.5 5.33823 12.5 5.83268C12.5 6.49572 12.2366 7.13161 11.7678 7.60045C11.2989 8.06929 10.663 8.33268 10 8.33268V8.33268ZM17.5 17.4993V16.666C17.5 15.1189 16.8854 13.6352 15.7915 12.5412C14.6975 11.4473 13.2138 10.8327 11.6667 10.8327H8.33333C6.78624 10.8327 5.30251 11.4473 4.20854 12.5412C3.11458 13.6352 2.5 15.1189 2.5 16.666V17.4993H4.16667V16.666C4.16667 15.5609 4.60565 14.5011 5.38706 13.7197C6.16846 12.9383 7.22826 12.4993 8.33333 12.4993H11.6667C12.7717 12.4993 13.8315 12.9383 14.6129 13.7197C15.3943 14.5011 15.8333 15.5609 15.8333 16.666V17.4993H17.5Z"
                                    fill="rgba(255, 255, 255, 0.6)" />
                            </svg>
                            <input className="inputEle" type="email" placeholder="Email" formControlName="emailId" value="" />
                            <span className="error-container">
                                Invalid Email Id*
                            </span>
                        </label>
                        <label for="password" className="input-wrap">
                            <svg className="label-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83332 14.1673C6.79329 14.166 7.72345 13.8338 8.46698 13.2266C9.21051 12.6194 9.72192 11.7743 9.91499 10.834H11.6667V12.5007H13.3333V10.834H15V13.334H16.6667V10.834H17.5V9.16732H9.91499C9.72192 8.22696 9.21051 7.38194 8.46698 6.77473C7.72345 6.16752 6.79329 5.83527 5.83332 5.83398C3.53582 5.83398 1.66666 7.70315 1.66666 10.0007C1.66666 12.2982 3.53582 14.1673 5.83332 14.1673ZM5.83332 7.50065C7.21166 7.50065 8.33332 8.62232 8.33332 10.0007C8.33332 11.379 7.21166 12.5007 5.83332 12.5007C4.45499 12.5007 3.33332 11.379 3.33332 10.0007C3.33332 8.62232 4.45499 7.50065 5.83332 7.50065Z"
                                    fill="rgba(255, 255, 255, 0.6)" />
                            </svg>
                            <input className="inputEle" id="password" type="password" placeholder="Password" formControlName="password" value="" />
                            <span className="error-container">
                                Password required*
                            </span>
                        </label>
                        <div className="action-container">
                            <button className="btn tertiary-btn" type="reset">Reset password</button>
                            <button className="btn primary-btn txt-m-14" type="submit" routerLink="/otp-verification">
                                Login
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.41083 14.4102L10.5892 15.5885L16.1783 9.99932L10.5892 4.41016L9.41083 5.58849L12.9883 9.16599H5V10.8327H12.9883L9.41083 14.4102Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        );
    };
}

export default Login;