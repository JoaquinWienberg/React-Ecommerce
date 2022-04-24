import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React,{ useState, useEffect, useContext } from "react";

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [clientInfo, setClientInfo] = useState ({
        name: "",
        phone: "",
        email: "",
        location: "",
        zipcode: "",
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    const handleChange = (e) => {
        const {value, name} = e.target

        setClientInfo ({
            ...clientInfo,
            [name]: value
        })
    }

    const confirm = (e) => {
        console.log(clientInfo)
        handleClose();
    }

    return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}>
        Finalizar compra
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Finalizar compra</DialogTitle>
        <DialogContent>
            <DialogContentText>
                A continuación ingrese sus datos para completar la compra.
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            name="name"
            id="name"
            label="Nombre completo"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={clientInfo.name}
            />
            <TextField
            autoFocus
            margin="dense"
            name="email"
            id="name"
            label="Dirección de correo"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={clientInfo.email}
            />
            <TextField
            autoFocus
            margin="dense"
            name="location"
            id="name"
            label="Dirección de facturación"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={clientInfo.location}
            />
            <TextField
            autoFocus
            margin="dense"
            name="zipcode"
            id="name"
            label="Código Postal"
            type="number"
            fullWidth
            variant="standard"
            inputProps={{
                maxLength: 4
                }}
            onChange={handleChange}
            value={clientInfo.zipcode}
            />
            <TextField
            autoFocus
            margin="dense"
            name="phone"
            id="name"
            label="Telefono celular"
            type="number"
            fullWidth
            variant="standard"
            inputProps={{
                maxLength: 10
                }}
            onChange={handleChange}
            value={clientInfo.phone}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={() => {confirm(); props.action(clientInfo);}}>Confirmar</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}