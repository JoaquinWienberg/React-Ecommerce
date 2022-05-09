import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React,{ useState, useEffect, useContext } from "react";
import { FormControl } from '@mui/material';
import db from "../Firebase"
import {collection, addDoc } from "firebase/firestore";
import { Box, fontSize } from '@mui/system';
import "./contactUs.css"
import {ThemeProvider } from '@mui/material/styles';
import theme from "../components/MuiStyle/Themes"

export default function ContactUs () {

    const [clientInfo, setClientInfo] = useState ({
        name: "",
        email: "",
        desc: "",
        order:"",
    })
    const [formDone, setFormDone] = useState(true);
    const [closeForm, setCloseForm] = useState(false);

    const handleChange = (e) => {
        const {value, name} = e.target

        setClientInfo ({
            ...clientInfo,
            [name]: value
        })

        if (clientInfo.name.length == 0  || clientInfo.email.length == 0 || clientInfo.desc.length == 0) {
            setFormDone(true)
        } else {
            setFormDone(false)
        }

        
    }

    const createMessage = async(message) => {
        const firebaseOrder = collection(db, "messages")
        const confirmOrder = await addDoc(firebaseOrder, message)
    }  

    const confirmMessage = () => {
        const date = new Date();
        const message = {
            name: clientInfo.name, 
            email: clientInfo.email,
            date: date,
            desc: clientInfo.desc,
        }
        createMessage(message)
        setCloseForm(true)
    }

    if (closeForm) {
        return (
            <Box sx={{m:3 ,fontSize: "20px"}}><h3>Su consulta se ha enviado. Uno de nuestros especialistas se contactará con usted lo antes posible.</h3></Box>
        )
    } else {
        return (
            <div className="formContainer">
                <FormControl>
                    <h2>Contactenos</h2>
                    <p>Si quiere que nos contactemos con usted para brindarle información de un producto, estado de orden u otros, complete los datos a continuación:</p>
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
                        error={clientInfo.desc == ""}
                        margin="dense"
                        name="desc"
                        id="name"
                        label="Describa su consulta aquí."
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={clientInfo.desc}
                        required
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="order"
                        id="name"
                        label="Número de orden (en caso de aplicar)"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={clientInfo.order}
                        />
                    <ThemeProvider theme={theme}>
                        <Button disabled={formDone} type="submit" onClick={confirmMessage} variant="contained" component="span" color="primary">Confirmar</Button>
                    </ThemeProvider>
                </FormControl>
            </div>
        )
    }
}