import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './index.css';

const UpdateProfileComp = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [OldPassword, setOldPassword] = useState('');

    const [selectedTitle, setSelectedTitle] = useState('');

    const handleClickShowOldPassword = () => {
        setShowOldPassword(!showOldPassword);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleTitleChange = (event) => {
        setSelectedTitle(event.target.value);
    };

    return (
        <div>
            <div className='update-profile-card'>
                <div className='profile-fields'>
                    <h4 style={{ paddingBottom: "10px", fontWeight: "bold" }} >Edit Your Details</h4>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <FormControl className='update-profile-inputs' variant="outlined" fullWidth>
                                <Select
                                    labelId="outlined-age-native-simple-placeholder"
                                    value={selectedTitle}
                                    onChange={handleTitleChange}
                                    inputProps={{
                                        name: 'title',
                                        id: 'outlined-age-native-simple',
                                    }}
                                    style={{ height: '43px', color: 'white' }}
                                    displayEmpty
                                    className="custom-icon-select"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                backgroundColor: '#3d4b5c', // Change to your desired background color
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value="">Select a Title</MenuItem>
                                    <MenuItem value="Mr">Mr</MenuItem>
                                    <MenuItem value="Mrs">Mrs</MenuItem>
                                    <MenuItem value="Miss">Miss</MenuItem>
                                    <MenuItem value="Ms">Ms</MenuItem>
                                    <MenuItem value="Mx">Mx</MenuItem>
                                    <MenuItem value="Sir">Sir</MenuItem>
                                    <MenuItem value="Dr">Dr</MenuItem>
                                    <MenuItem value="Prof">Prof</MenuItem>
                                    {/* Add more options as needed */}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <TextField id="outlined-basic" className='update-profile-inputs' fullWidth placeholder="Last Name" variant="outlined" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon className='input-icons' /> {/* Replace with your desired icon */}
                                    </InputAdornment>
                                ),
                            }} /> <br /><br />
                            <TextField id="outlined-basic" className='update-profile-inputs' fullWidth placeholder="Phone Number" variant="outlined" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon className='input-icons' /> {/* Replace with your desired icon */}
                                    </InputAdornment>
                                ),
                            }} /> <br /><br />
                            <TextField id="outlined-basic" className='update-profile-inputs' fullWidth placeholder="Country" variant="outlined" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon className='input-icons' /> {/* Replace with your desired icon */}
                                    </InputAdornment>
                                ),
                            }} /> <br /><br />
                        </div>
                        <div className='col-lg-6'>
                            <TextField
                                id="outlined-basic"
                                className='update-profile-inputs'
                                fullWidth
                                // label="First Name"
                                placeholder='First Name'
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon className='input-icons' /> {/* Replace with your desired icon */}
                                        </InputAdornment>
                                    ),
                                }}
                            /> <br /><br />
                            <TextField id="outlined-basic" className='update-profile-inputs' fullWidth placeholder="Company" variant="outlined" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationCityIcon className='input-icons' /> {/* Replace with your desired icon */}
                                    </InputAdornment>
                                ),
                            }} /> <br /><br />
                            <TextField id="outlined-basic" className='update-profile-inputs' fullWidth placeholder="Email" variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailIcon className='input-icons' /> {/* Replace with your desired icon */}
                                        </InputAdornment>
                                    ),
                                }} /> <br /><br />
                        </div>

                    </div>
                    <button className='update-btn'>Update Profile</button>
                    <hr />
                    <h4 style={{ paddingBottom: "10px", fontWeight: "600" }} >Change Password</h4>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <FormControl className='update-profile-inputs update-profile-inputs-mb' sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
                                <OutlinedInput
                                    sx={{ color: "white" }}
                                    id="outlined-adornment-password"
                                    type={showOldPassword ? 'text' : 'password'}
                                    value={OldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowOldPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showOldPassword ? <Visibility className='eye-icon' /> : <VisibilityOff className='eye-icon' />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        <div className='col-lg-4'>
                            <FormControl className='update-profile-inputs update-profile-inputs-mb' sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                <OutlinedInput
                                    sx={{ color: "white" }}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility className='eye-icon' /> : <VisibilityOff className='eye-icon' />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>

                        <div className='col-lg-4'>
                            <FormControl className='update-profile-inputs update-profile-inputs-mb' sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    sx={{ color: "white" }}
                                    id="outlined-adornment-confirm-password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? <Visibility className='eye-icon' /> : <VisibilityOff className='eye-icon' />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
                                />
                            </FormControl>
                        </div>
                    </div>
                    <button className='change-pass-btn'>Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfileComp


