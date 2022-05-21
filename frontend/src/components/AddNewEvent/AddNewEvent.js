import React, { useState } from "react";
import { Select, Input, PageHeader } from "antd";
import { Upload, message , DatePicker } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import InputField from "../Generic/InputField";
import { Avatar } from "@mui/material";
import './addnewcandidate.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SimpleModal from '../Modal';
import { useCreateEventMutation } from "../../services/nodeAPI";


export default function AddNewEvent( props ) {
  const { Option, OptGroup } = Select;
  const { TextArea } = Input;
  const [createEvent]=useCreateEventMutation();
  const handleSubmit=async (e)=>{
    e.preventDefault();
   const res = await createEvent(eventData);
   console.log(res);
  }
  
  const handleChangeCity=()=>{return};
  const handleChangeCountry=()=>{return};
  
  const handleChangetype=(e)=>{
    setEventData( { ...eventData, eventType: e } );
  }
  
  const handleChangetime=(e)=>{
    setEventData( { ...eventData, eventTime: e } );
  }
  
  const [ eventData, setEventData ]=useState( {} );
  
  
  const handleOnchange=(event)=>{
    setEventData( { ...eventData, [ event.target.name ]: event.target.value } );
    }  


  return (
    <>
      <div className="px-3">
      <PageHeader subHeading='You can add new Community Service Events.' heading='Created Events' toLink="/dashboard/addnewevent" btnText='+ Add new event' />
        <div className="my-3" style={{ fontSize: "18px", fontWeight: "500" }}>
        Event Details
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                  
                    <InputField name="name" label="Name" placeholder='Name' type="text" width={'100%'}  height='32px' onChange={handleOnchange}/>

                  </div>
                </div>
              </div>
           
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                  
                    <InputField name="eventStars" label="Event Stars" placeholder='Event Stars' type="number" width={'100%'}  height='32px' onChange={handleOnchange}/>

                  </div>
                </div>
              </div>
           
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col-12">
                  <span>Description</span>
                  <TextArea
                    placeholder="Add Description"
                    rows={5}
                    className="my-3"

                    name="description"
                    onChange={handleOnchange}
                  />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-12">
                  <p className="" style={{marginBottom:'0rem'}}>Date and Time</p>
                  <DatePicker 
                    name="eventTime"
                    onChange={handleChangetime} showTime className="my-3" style={{width:'100%' ,  height:'32px'}}/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <span>Event Type</span>
                  <div>
                    <Select
                      className="my-3"
                      defaultValue="Event Type"
                      style={{ width: 305 , height: 31 }}
                      onChange={handleChangetype}
                    >
                      <OptGroup label="Event Type">
                        <Option value="Public Talk">Public Talk</Option>
                        <Option value="Motivational Talks">Motivational Talks</Option>
                        <Option value="Professional Talks">Pofessional Talks</Option>
                      </OptGroup>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12" style={{marginTop:'0.66rem'}}>
                  <span>Country</span>
                  <div>
                  <Select
                      className="my-3"
                      defaultValue="Country"
                      style={{ width: 305 , height: 31 }}
                      onChange={handleChangeCountry}
                    >
                      <OptGroup label="Country">
                        <Option value="lahore">Pakistan</Option>
                        <Option value="karachi">India</Option>
                      </OptGroup>
                    </Select>
                  </div>

                </div>
                <div className="col-12" style={{marginTop:'0.66rem'}}>
                  <span>City</span>
                  <div>
                  <Select
                      className="my-3"
                      defaultValue="City"
                      style={{ width: 305 , height: 31 }}
                      onChange={handleChangeCity}
                    >
                      <OptGroup label="City">
                        <Option value="lahore">Lahore</Option>
                        <Option value="karachi">Karachi</Option>
                      </OptGroup>
                    </Select>
                  </div>

                </div>
              </div>
            </div>
         
          </div>
          <div className="row">
              <div className="col-3 mt-1">
                 <InputField label="Google Meet Link Url" type="text" width={'100%'}  placeholder="Google Meet Link Url"  height='32px' 
                    name="eventLink"
                    onChange={handleOnchange}/>
              </div>
          </div>
          <Button type="submit" className="my-5 px-3" style={{backgroundColor:'#265BC4',color:'white',borderRadius:'4px'}} >
          Save Event Data
          </Button>
        </form>
      </div>
    </>
  );
}
