import { React, useState } from "react";
import Navbar from "../Home/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { createconfig } from '../../ReduxToolkit/Slice/configration/Configration'

function AddConfigration() {
    const history = useNavigate()
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.config);

    const [addconfig, setconfig] = useState('');
    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            "configId": addconfig
        }
        dispatch(createconfig(data));
        if (status === "succeeded") {
            setconfig("")
            history("/Configration")
        }
    };
    return (
        <div className="col-xl-10 bg mainContainer">
            <div className="row justify-content-center">
                <Navbar heading="Add Config" />
                <div className="col-lg-6 my-3">
                    <h6 className="yellow">Add Details</h6>
                    <div className="rounded-2 shadow p-3 bg-white">
                        <form action="">
                            <div className="row">
                                <div className="col-lg-12 my-3">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => setconfig(e.target.value)}
                                        required value={addconfig}
                                        label="Config Name" fullWidth size="small" variant="outlined" />
                                </div>
                                <div className="col-lg-6 my-3 text-center" >
                                    <Button
                                        component="label"
                                        role={"img"}
                                        type="submit"
                                        variant="contained"
                                        tabIndex={-1}
                                        color="secondary"
                                        onClick={handleClick}
                                    >
                                        Add config
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddConfigration;
