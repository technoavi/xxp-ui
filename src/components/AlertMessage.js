import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
  snackbarStyleViaContentProps: {
    backgroundColor: "green"
  }
};
export default function AlertMassage({ message }) {

  const [open, setOpen] = React.useState(true);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      setOpen(false);
      return;
    }
    setOpen(false);
  }
 
  return (
    <div >
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
          color: "green"
        }}
       
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        variant="success"
        ContentProps={{
          "aria-describedby": "message-id",
          severity:"success"
        }}
        message={message}
        action={[
          <IconButton key="close" onClick={handleClose} >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
