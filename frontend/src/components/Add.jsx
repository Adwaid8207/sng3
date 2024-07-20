import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = (props) => {
    var [data,setData] = useState({
        s_name:"",
        s_age:"",
        s_rollno:"",
        s_place:"",
        s_dept:"",
    });
    var navigate = useNavigate();
    var location = useLocation();
    console.log("location",location.state)
    useEffect(()=>{
      if(location.state!=null){
        setData({ ...data,
          s_name:location.state.val.s_name,
           s_age:location.state.val.s_age,
          s_rollno:location.state.val.s_rollno,
        s_place:location.state.val.s_place,
      s_dept:location.state.val.s_dept})
      }
    },[])

    const inputHandler=(e)=>{
        // console.log(e.target);
        setData({...data,[e.target.name]:e.target.value});
        console.log(data)
    };

    const submitHandler =()=>{
     console.log("btn clicked");
     if(location.state!=null){
      axios.put("http://localhost:3007/edit/"+ location.state.val._id, data)
      .then((res)=>{
        console.log(res);
        alert(res.data.message)
        navigate('/view')

      })
      .catch((err)=>{
        console.log(err);
      });
     }else{
      console.log(data);
      axios.post("http://localhost:3007/add",data)
      .then((res)=>{
        console.log(res);
        alert(res.data.message)
        navigate('/view')
      }).catch((err)=>{
        console.log(err)
      })
     }
    }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}>
            <TextField variant='outlined' fullWidth label='Name' onChange={inputHandler}
            name="s_name" value={data.s_name}/>
            <br /><br />
            <TextField variant='outlined' fullWidth label='Age' onChange={inputHandler}
            name="s_age" value={data.s_age}/>
            <br /><br />
            <TextField variant='outlined' fullWidth label='Roll No' onChange={inputHandler}
            name="s_rollno" value={data.s_rollno}/>
            <br /><br />
            <TextField variant='outlined' fullWidth label='Place' onChange={inputHandler}
            name="s_place" value={data.s_place}/>
            <br /><br />
            <TextField variant='outlined' fullWidth label='Department' onChange={inputHandler}
            name="s_dept" value={data.s_dept}/>
            <br /><br />

            <Button color="success"fullWidth variant="contained" onClick={submitHandler}>Submit</Button>
      </Grid>
      </Grid>
    </div>
  )
}

export default Add
