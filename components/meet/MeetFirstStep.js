import { TextField, MenuItem, InputAdornment, Button} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {useState, useEffect} from 'react'

const profesionales = (motivo) =>{
    if(motivo === 'Vacuna'){
        return ['Ivana','Heiman']
    }
    else if(motivo === 'Celos'){
        return ['Tate']
    }
    else{
        return ['Anita','Marisa']
    }
}

export default function MeetFirstStep({
    handleNext, 
    handleChange, 
    values:{motivo, profesional},
    filedError,
    isError}){

    const tipoConsultas=[
        "Vacuna",
        "Control",
        "Pelea con otra rata",
        "Depresion",
        "Celos"
    ]


    const [prof, setProf] = useState('')
    

    useEffect(()=>{
        const ret = profesionales(motivo)
        setProf(ret)
    }, [motivo])

        
    /*
    const changeConsulta = (event) =>{
        const consulta = event.target.value
        profesionales(consulta)
        handleChange("motivo")(event)
    }
    */
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
                    helperText="Seleccione el motivo de la consulta"
                    defaultValue={motivo}
                    onChange={handleChange('motivo')}
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
                    value={profesional}
                    onChange={handleChange('profesional')}
                    >
                    
                    {(prof!='' && prof.map((tipo) => (
                        <MenuItem key={tipo} value={tipo}>
                            {tipo}
                        </MenuItem>
                    )))}
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

