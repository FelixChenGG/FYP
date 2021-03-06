import React,{Component,useState} from 'react'
import { Card, Form} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Store } from 'react-notifications-component';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs() {

  const [open, setOpen] = React.useState(true);

  
  const handleClose = () => {
    setOpen(false);
  };

     return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Notification
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Please put your NFC card on sensor.
          </Typography>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
  


 
}



function Register() {
        const [name, setName] = useState("hi")
        const handleSubmit =async(event)=> {
          console.log(name);
          await axios.get('http://localhost:5000/user/register/'+name)
            .then(function (response)
            {
              if(response.statusText ==="OK"){
                Store.addNotification({
                title: "Congratulation",
                message: "Create Successful  !!!",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
                })
              }else{
                Store.addNotification({
                  title: "Worning",
                  message: "Create Fail !!!",
                  type: "danger",
                  insert: "top",
                  container: "top-right",
                  animationIn: ["animate__animated", "animate__fadeIn"],
                  animationOut: ["animate__animated", "animate__fadeOut"],
                  dismiss: {
                      duration: 5000,
                      onScreen: true
                  }
                  })
              }
              
              // handle success
            })
        }
        
        
   
        return (
        <>  
        <div>

            <CustomizedDialogs/>
            <Card style={{ width: '100%' }}>
                <Card.Header>
                <h3 className="card-title">Card Register</h3>
                </Card.Header>
              
              <Form id="quickForm" onSubmit = {handleSubmit}>
                <Card.Body>
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Card Name</h4></Form.Label>
                  <Form.Control type="text" placeholder="Enter NFC Name"  
                  onChange={(e) => setName(e.target.value) }/>
                  {name===""?<Form.Text className="text-warning"><h6>Missing Value, Please enter !</h6>
    </Form.Text> : <p1> </p1>}
                  
                  </Form.Group>
                  
                </Card.Body>
                
                <Card.Footer>
                    <Button  className="bg-primary"variant="primary" type="submit">
                            Submit
                    </Button>
                </Card.Footer>
              </Form>
            </Card>
            

        </div>
        
      </>
    )

}


export default class NFCreg extends Component {

    render() {
        
        return (
            <>
                <div>
                  
                  <Register/>
                </div>
                </>
            )
    }
    
}