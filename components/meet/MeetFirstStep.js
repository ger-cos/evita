import { TextField, MenuItem, InputAdornment, Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {useState} from 'react'
export default function MeetFirstStep({
    handleNext, 
    handleChange, 
    values:{motivo, profesional},
    filedError,
    isError}){

    const [disabled, setDisable] = useState(true)
    const [prof, setProf] = useState('')
    const tipoConsultas=[
        "Vacuna",
        "Control",
        "Pelea con otra rata",
        "Depresion",
        "Celos"
    ]

    const changeConsulta = (event) =>{
        const consulta = event.target.value
        setDisable(false)

        if(consulta === "Vacuna"){
            setProf(["Ivana"])
        }
        else{
            setProf(["German", "Esi"])
        }
    }

    const isEmpty = false
    return(
        <>
            <Grid container spacing={2} noValidate>
                <Grid item xs={12} sm={6}>
                    <TextField
                    name="consulta"

                    fullWidth
                    id="tipo"
                    select
                    label="Consulta"
                    helperText="Motivo de la consulta"
                    defaultValue={motivo}
                    onChange={changeConsulta}
                    required
                    >
                    {tipoConsultas.map((tipo) => (
                        <MenuItem key={tipo} value={tipo}>
                            {tipo}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                    name="profesional"
                    fullWidth
                    id="profesional"
                    select
                    label="Profesional"
                    helperText="Por favor selecciona el profesional"
                    disabled={disabled}
                    >
                    
                    {prof!='' && prof.map((tipo) => (
                        <MenuItem key={tipo} value={tipo}>
                            {tipo}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
            </Grid>
            <div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }}>
				<Button variant="contained" disabled={isEmpty || isError} color="primary" onClick={handleNext}>
					Next
				</Button>
			</div>
        </>
    )
}

