import React, { useEffect } from 'react'
import "./Login.css"
import Slider from './Slider';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
const Login = () => {
    useEffect(() => {
        document.body.classList.add('login-page');
    }, []);

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,

    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div class="page-wrapper login-page-wrap">
            <div class="login-section">
                <div class="container">
                    <div class="login-wrapper">
                        <div class="login-leftblk">
                            <div class="login-slider">
                                <Slider />
                            </div>
                        </div>
                        <div class="login-rightblk">
                            <div class="login-blk">
                                <div class="logo">
                                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" class="img-fluid" />
                                </div>
                                <h2 class="heading1 text-uppercase">Log in</h2>
                                <div class="login-form">
                                    <form>
                                        <div class="form-group">
                                            <label for="emailid">Email Id <span class="mandatory">*</span></label>
                                            <TextField className='input-field' id="outlined-basic" placeholder='Enter email id' variant="outlined" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password <span class="mandatory">*</span></label>
                                            <div className='password-field'>
                                                <OutlinedInput
                                                    fullWidth
                                                    id="outlined-adornment-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={handleChange('password')}
                                                    placeholder='Enter password'
                                                    className='input-field'
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                                className='eye-btn'
                                                            >
                                                                {values.showPassword ? <img src={process.env.PUBLIC_URL + '/images/non-visibleicon.png'} alt="" class="img-fluid" /> : <img src={process.env.PUBLIC_URL + '/images/visibleicon.png'} alt="" class="img-fluid" />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div class="form-btn flex-between">
                                            <button type="submit" class="primary-button">Log In</button>
                                            <div class="tertiary-btn-blk mr-10">Forgot Password?</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login