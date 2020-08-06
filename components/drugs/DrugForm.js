import { TextField, MenuItem, InputAdornment, Button} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import styles from './styles'
import { useForm} from 'react-hook-form'
import {db}  from '../../services/firebase'

export default function DrugForm(){

    const tiposMedicamento = ['Gato chiquito', 'Rata grande', 'Perros tontos']
    
    const{register, handleSubmit} = useForm()

  

    const onSubmit = (values) =>{
        console.log(values)
        db.collection("gatos").doc().set(values)
    }

    return(
        <>
            <h1>Hola este va a ser el formulario para registrar medicamentos</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField 
                    name="nombre"
                    inputRef={register}
                    fullWidth 
                    id="nombre" 
                    label="Nombre del medicamento" 
                    />
                </div>
                <div>
                    <TextField 
                    name="descripcion"
                    inputRef={register}
                    fullWidth 
                    id="descripcion" label="Descripcion" />
                </div>
                <div>
                    <TextField
                    name="tipo"
                    inputRef={(ref)=>{
                        if(!ref) return;
                        register({name:"tipo", value: ref.value})
                    }}
                    fullWidth
                    id="tipo"
                    select
                    label="Tipo de medicamento.."
                    helperText="Por favor selecciona el tipo de medicamento"
                    >
                    {tiposMedicamento.map((tipo) => (
                        <MenuItem key={tipo} value={tipo}>
                            {tipo}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                    name="precio"
                    inputRef={register}
                    fullWidth
                    id="precio"
                    label="Precio"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    />
                </div>
                <div>
                    <TextField fullWidth
                    name="stock"
                    inputRef={register}
                    id="stock"
                    label="Stock"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                </div>
                <div>
                    <Button
                            type="submit"
                            align="center"
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                    >       Guardar
                    </Button>
                </div>
            </form>

                        
            <style jsx>{styles}</style>
        </>
    )
}

/*
methalocalyse
asincronico
funciones de primer orden
map, reduce, filter...
objects
function flecha
*/ 