import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../components/AkremComponents/Inputs'
import { Registration } from '../redux/actions/authActions'
import { Row, Col, CardTitle, CardText, Label, Button, Form, Input, FormFeedback } from 'reactstrap'
import illustrationsLight from '../assets/register-v2.svg'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import { Select } from '@material-ui/core'

function Register() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const errors = useSelector(state=>state.errors)
  const navigate = useNavigate()
  const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e)=>{
  e.preventDefault();
  dispatch(Registration(form, navigate))
  }
  
  return (
    
      




    <div className='auth-wrapper auth-cover registerBody'>
    <Row className='auth-inner m-0'>
     
      <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
        <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
          <img className='img-fluid' src={illustrationsLight} alt='Login Cover' />
        </div>
      </Col>
      <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
        <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
          <CardTitle tag='h2' className='fw-bold mb-1'>
            Adventure starts here 🚀
          </CardTitle>
          <CardText className='mb-2'>Make your app management easy and fun!</CardText>

          <Form action='/' className='auth-register-form mt-2'  onSubmit={onSubmit}>
         
                        <Inputs name="name" label="Name" type="text" icon="fa-solid fa-user" onChangeHandler={onChangeHandler} errors={errors.name}/>
                        <Inputs name="email" label="Email" type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} errors={errors.email}/>
                        <Inputs name="password" label="Password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler} errors={errors.password}/>
                        <Inputs name="confirm" label="Confirm password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler} errors={errors.confirm}/>
                        {/* <Inputs name="role" label="role" type="text" icon="fa-solid fa-restroom"  onChangeHandler={onChangeHandler} errors={errors.role}/> */}
                        <fieldset className="form-group">
  <div className="form-check">
    <input className="form-check-input" type="radio" name="role" id="role1" value="ARTIST" onChange={onChangeHandler} />
    <label className="form-check-label" htmlFor="role1">
      ARTIST
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="role" id="role2" value="USER" onChange={onChangeHandler} />
    <label className="form-check-label" htmlFor="role2">
      User
    </label>
  </div>
  {errors.role && <div className="invalid-feedback">{errors.role}</div>}
</fieldset>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                            <Link to="/login">I have account</Link>
                        </div>
                     
          </Form>
          <p className='text-center mt-2'>
            <span className='me-25'>Already have an account?</span>
            <Link to='/login'>
              <span>Sign in instead</span>
            </Link>
          </p>
          <div className='divider my-2'>
            <div className='divider-text'>or</div>
          </div>
          <div className='auth-footer-btn d-flex justify-content-center'>
            <Button color='facebook'>
              <Facebook size={14} />
            </Button>
            <Button color='twitter'>
              <Twitter size={14} />
            </Button>
            <Button color='google'>
              <Mail size={14} />
            </Button>
            <Button className='me-0' color='github'>
              <GitHub size={14} />
            </Button>
          </div>
        </Col>
      </Col>
    </Row>
  </div>

   
  )
}

export default Register