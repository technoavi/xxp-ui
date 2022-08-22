import React from 'react';
import PropTypes from 'prop-types';
import "./../College.css";




export default class AddAnnouncementModal extends React.Component {
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
      padding: 30,
    };

    return (
     <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
       <div>
         <div>
           <span id="hd-colg-name">Add Post </span>
         
         </div>
         <label id="ins-text">Add Post Title</label>
         <div style={{    borderRadius: '22.5px',width: '95%',
    border: 'solid 1px #cbd4db'}}>
           <input type="text" name='assgn' placeholder='Add title to Assignment' style={{
           marginTop: '6px',
           marginBottom: '6px',
    marginLeft: '12px',
    width: '95%',
    border: 'none', 
    outline: 'none'}}/>
         </div>
         <label id="ins-text">Add Description</label>
         <div style={{ marginTop: "6px" }}>
                  <textarea
                    id="cc-txtarea"
                    type="text"
                    placeholder="Write something about session"
                  />
                  <br /> <br />
                </div>
         <hr/>
         <div className="row">
    <div className="col">
  
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

AddAnnouncementModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
