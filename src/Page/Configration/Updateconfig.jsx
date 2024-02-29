import { React, useState } from "react";
import Navbar from "../Home/Navbar";
import { useDispatch } from "react-redux";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { updateconfig } from '../../ReduxToolkit/Slice/configration/Configration'

function UpdateConfigration() {
    const dispatch = useDispatch();
    const [addconfig, setconfig] = useState('');
    const [remark, setremark] = useState('');
    const handleClick = async (e) => {
        const data = {
            "remark": remark
        }
        e.preventDefault();
        dispatch(updateconfig({ addconfig, data }));
        setconfig("")
        setremark("")
    };
    return (
        <div className="col-xl-10 bg mainContainer">
            <div className="row justify-content-center">
                <Navbar heading="Update Config" />
                <div className="col-lg-6 my-3">
                    <h6 className="yellow">Update Details</h6>
                    <div className="rounded-2 shadow p-3 bg-white">
                        <form action="">
                            <div className="row">
                                <div className="col-lg-12 my-3">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => setconfig(e.target.value)}
                                        required value={addconfig}
                                        label="Config Name" fullWidth size="small"
                                        name="addconfig"
                                        variant="outlined" />
                                </div>
                                <div className="col-lg-12 my-3">
                                    <TextField id="outlined-basic"
                                        onChange={(e) => setremark(e.target.value)}
                                        required value={remark}
                                        label="remark" fullWidth size="small"
                                        name="remark"
                                        naevariant="outlined" />
                                </div>
                                <div className="col-lg-6 my-3 text-center" >
                                    <Button
                                        component="label"
                                        role={"img"}
                                        type="submit"
                                        color="secondary"
                                        variant="contained"
                                        tabIndex={-1}
                                        onClick={handleClick}
                                    >
                                        Update config
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

export default UpdateConfigration;
