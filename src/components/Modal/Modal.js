import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React,{ useState, useEffect, useContext } from "react";
import { FormControl } from '@mui/material';
import {ThemeProvider } from '@mui/material/styles';
import theme from "../MuiStyle/Themes"

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [clientInfo, setClientInfo] = useState ({
        name: "",
        phone: "",
        email: "",
        location: "",
        zipcode: "",
    })
    const [formDone, setFormDone] = useState(true);

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

        if (clientInfo.name.length == 0 || clientInfo.phone.length == 0 || clientInfo.email.length == 0 || clientInfo.location.length == 0 || clientInfo.zipcode.length == 0) {
            setFormDone(true)
        } else {
            setFormDone(false)
        }

        
    }

    const confirm = (e) => {
        handleClose();
    }

    return (
    <div>
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="secondary" sx={{m:1}} onClick={handleClickOpen}>
            Finalizar compra
            </Button>
        </ThemeProvider>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Finalizar compra</DialogTitle>
        <DialogContent>
            <DialogContentText>
                A continuación ingrese sus datos para completar la compra.
            </DialogContentText>
            <FormControl sx={{ width: "95%"}}>
                <TextField
                autoFocus
                error={clientInfo.name == ""}
                margin="dense"
                name="name"
                id="name"
                label="Nombre completo"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={clientInfo.name}
                required
                />
                <TextField
                autoFocus
                error={clientInfo.email == ""}
                margin="dense"
                name="email"
                id="name"
                label="Dirección de correo"
                type="email"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={clientInfo.email}
                required
                />
                <TextField
                autoFocus
                error={clientInfo.location == ""}
                margin="dense"
                name="location"
                id="name"
                label="Dirección de facturación"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={clientInfo.location}
                required
                />
                <TextField
                autoFocus
                error={clientInfo.zipcode == "" || clientInfo.zipcode.length != 4}
                margin="dense"
                name="zipcode"
                id="name"
                label="Código Postal"
                type="number"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={clientInfo.zipcode}
                required
                helperText="Ingrese el código de 4 digitos"
                />
                <TextField
                autoFocus
                error={clientInfo.phone == "" || clientInfo.phone.length > 13}
                margin="dense"
                name="phone"
                id="name"
                label="Telefono celular"
                type="number"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={clientInfo.phone}
                required
                />
            </FormControl>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button disabled={formDone} type="submit" onClick={() => {confirm(); props.action(clientInfo);}}>Confirmar</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}