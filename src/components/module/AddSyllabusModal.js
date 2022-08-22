import React from 'react';
import PropTypes from 'prop-types';
import "./../College.css";

import Image from "react-bootstrap/Image";
import add from "../../assets/add.svg";
import Button from 'react-bootstrap/Button'
import DropUploader from './DropUploader'

const componentConfig = {
  iconFiletypes: [ '.pdf','.zip'],
  showFiletypeIcon: true,
  postUrl: 'https://honeysuckle-snowstorm.glitch.me/uploadHandler'
};
export default class AddSyllabusModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      show: true
    };
  }
 
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: 'rgba(3, 21, 66, 0.9)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      width: 744,
      height: 401,
        borderRadius: 20,
  boxShadow: '0 2px 20px 0 rgba(158, 226, 242, 0.24)',
     
      display: 'block',
      margin: '101px auto',
      padding: 30
    };

    return (
     <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
       <div>
         <div>
           <span id="hd-colg-name">Upload Syllabus Doc</span>
         
         </div><br/>
         <label id="ins-text">Add Syllabus Title</label>
         <div style={{    borderRadius: '22.5px',
    border: 'solid 1px #cbd4db'}}>
           <input type="text" name='assgn' placeholder='Add title to Syllabus' style={{
           marginTop: '6px',
    marginLeft: '12px',
    width: '95%',
    border: 'none', 
    outline: 'none'}}/>
         </div>
         <div style={{marginTop:'12px'}}>
         <DropUploader
         config={componentConfig}
         maxSize={500000}
        onUpload={file => console.log(file)}
        onRemove={file => console.log(file)}
      />
         </div>
         <hr/>
         <div className="row">
    <div className="col">
    <Image
                      id="add-icon"
                      roundedCircle
                      src={add}
                      alt="instructors"
                    />{" "}
                    &nbsp;&nbsp;
                    <span id="cc-label">CREATE COURSE</span>
    </div>
    <div className="col" >
    <div style={{textAlign: 'right'}}>
             <button id="pills-btn" onClick={this.props.onClose}  style={{background:'grey',cursor : 'pointer'}}>
               <span id='header-label'>CANCEL</span></button> &nbsp;&nbsp;
             <button id="pills-btn"><span id='header-label' style={{cursor : 'pointer'}}>SUBMIT</span></button> 
              </div>
    </div>
	
</div>
       </div>

         
        </div>
      </div>
    );
  }
}

AddSyllabusModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
