import React, { useState } from 'react'
import { useEffect } from 'react';
import Navbar from '../Home/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getconfig } from '../../ReduxToolkit/Slice/configration/Configration';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


function Configration() {
  const dispatch = useDispatch();
  const { configs, status, error } = useSelector((state) => state.config);
  //  add
  const [addconfig, setconfig] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(getconfig({ addconfig }));;
  };

  return (
    <div className="col-xl-10 bg vh-100" style={{ overflow: "auto" }}>
      <div className="row justify-content-center">
        <Navbar heading="Configration" />
        <div
          className="col-lg-11 shadow-sm rounded bg-white"
          style={{ overflow: "auto" }}
        >
          <div className="row">
            <div className="col-lg-12 my-3">
              <TextField id="outlined-basic"
                onChange={(e) => setconfig(e.target.value)}
                required value={addconfig}
                label="Config Name" fullWidth size="small" variant="outlined" />
            </div>
            <div className="col-lg-6 my-3" >
              <Button
                component="label"
                role={"img"}
                type="submit"
                variant="contained"
                tabIndex={-1}
                color='secondary'
                onClick={handleClick}
              >
                Find config
              </Button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead className='table-secondary'>
                <tr>
                  <th scope="col-table">data</th>
                </tr>
              </thead>
              {status === 'loading' && (
                <tbody>
                  <tr className='text-center'>
                    <td colSpan="9">
                      {[...Array(5)].map((_, index) => (
                        <div className='my-2'>
                          <Skeleton variant="rounded" key={index} animation="wave" fullwidth height={50} />
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              )}
              {status === undefined && (
                <tbody>
                  <tr className='text-center'>
                    <td colSpan="8">
                      null
                    </td>
                  </tr>
                </tbody>
              )}
              {status === 'failed' && (
                <tbody>
                  <tr className='text-center'>
                    <td colSpan="8" className='text-danger'>{error}</td>
                  </tr>
                </tbody>
              )}
              <tbody>
                {status === 'succeeded' && (
                  configs.map((row, rowIndex) => (
                    <div key={rowIndex} className='py-3'>
                      {row.map((symbol, columnIndex) => (
                        <span key={columnIndex}>{symbol} </span>
                      ))}
                    </div>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configration