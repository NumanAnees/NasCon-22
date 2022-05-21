import React, { useState, useRef, useContext } from 'react'
import SideBox from '../Generic/SideBox'
import InputField from '../Generic/InputField';
import './../Generic/credForm.css';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { VariantType, useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import AppContext from '../../context/appState/AppContext';
import { useSignupMutation } from '../../services/nodeAPI';
import { useNavigate } from 'react-router-dom';


const SignUpForm=() => {

  const head="Introducing smart ways to connect Professionals";
  const subHead="VeteranMeet provide smarter way of connecting with professionals, in few easy steps you can find prefessionals with same interest";

  const [ signup ]=useSignupMutation();

  const navigate=useNavigate();

  const { enqueueSnackbar }=useSnackbar();

  const [ creds, setCreds ]=useState( { firstName: "", lastName: "", username: "", email: "", password: "", passwordConfirm: "" } );
  const [ loading, setLoading ]=useState( false );

  const formRef=useRef( null )
  const confirmPass=useRef( null )

  const { onChangeGeneric }=useContext( AppContext );

  const onChange=onChangeGeneric( creds, setCreds );

  //******** SUBMIT Signup FORM 
  const handleSubmit=async ( e ) => {

    setLoading( true );

    // CHECKING PASSWORDS are same
    if ( creds.password!==creds.passwordConfirm ) {
      setLoading( false );
      enqueueSnackbar( "Password and Confirm Password are not same", { variant: 'error' } );

    }

    // Submitting form
    else {

      const res=await signup( creds )

      console.log( res );

      if ( res.data.status==="success" ) {
        setLoading( false );
        formRef.current.resetFields();
        setCreds( { firstName: "", lastName: "", username: "", email: "", password: "", passwordConfirm: "" } );
        enqueueSnackbar( "Account has been created successfully!", { variant: 'success' } );


        setTimeout( () => { navigate( '/login' ) }, 2000 );


      }
      else {
        setLoading( false );
        // enqueueSnackbar( res.data.message, { variant: 'error' } );
        enqueueSnackbar( "something went wrong!", { variant: 'error' } );

      }


    }






  }



  return (
    <div className="row">


      <div className="col-lg-6">

        <SideBox image="illustrations2.png" width="320px" heading={head} subHeading={subHead} />

      </div>

      <div className="col-lg-6">

        <div className="container form">

          <div className="form_top_content">

            <h1 className="text-center">Create Account</h1>
            <p className="text-center">Please provide all the required information</p>


            <Form className='row g-2 mt-3' ref={formRef} onFinish={handleSubmit}>

              <div className="col-md-6">

                <InputField name="firstName" label="First Name" type="text" margin="ms-auto" placeholder="Enter first name" rules={[ { required: true, message: 'Please enter firstname!' } ]} onChange={onChange} />


              </div>

              <div className="col-md-6">

                <InputField name="lastName" label="Last Name" type="text" margin="me-auto" placeholder="Enter last name" rules={[ { required: true, message: 'Please enter second name!' } ]} onChange={onChange} />

              </div>
              <div className="col-md-6">

                <InputField name="email" label="Email Address" type="email" margin="ms-auto" placeholder="Enter email address" rules={[ { required: true, message: 'Please enter valid email!', type: 'email' } ]} onChange={onChange} />

              </div>
              <div className="col-md-6">

                <InputField name="username" label="Username" type="text" margin="me-auto" placeholder="Enter username"
                  rules={[ { required: true, message: 'Please enter username!' } ]} onChange={onChange} />

              </div>


              <div className="col-md-12">
                <InputField name="password" label="Password" type="password" margin="mx-auto" placeholder="Enter password" rules={[ { required: true, message: 'Please enter password!' } ]} onChange={onChange} />
              </div>

              <div className="col-md-12" >
                <InputField name="passwordConfirm" label="Confirm Password" type="password" margin="mx-auto" onChange={onChange} placeholder="Confirm your password" rules={[ { required: true, message: 'Confirm your password!' }, ( { getFieldValue } ) => ( {
                  validator( _, value ) {
                    if ( !value||getFieldValue( 'password' )===value ) {
                      return Promise.resolve();
                    }

                    return Promise.reject( new Error( 'The two passwords that you entered do not match!' ) );
                  },
                } ), ]} />


              </div>



              <div className="col-12 text-center">
                {/* <button className="btn create_account_btn" style={{ width: "70%" }} type="submit">Create Account</button> */}

                <LoadingButton
                  size="small"
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  className="btn create_account_btn"
                  style={{ width: "70%" }} type="submit"
                >
                  Create Account
                </LoadingButton>

              </div>

              <div className=" mx-auto mt-4" style={{ width: "74%" }}>
                <p className="Pricay_msg text-muted">
                  By clicking create account, you aggreed to <a href="/" className='Links'> Terms of Services</a> and acknowledge you
                  have read the <a href="/" className='Links'>Privacy Policy.</a>
                </p>
              </div>




            </Form>

          </div>


        </div>


        <div className="move_login text-center">
          <p>
            Already have an account?
            <Link to="/login" className="ms-2 inline_link">Login</Link>
          </p>
        </div>


      </div>


    </div>
  )
}

export default SignUpForm