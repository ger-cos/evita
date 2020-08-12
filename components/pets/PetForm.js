import PetAvatar from './AvatarPreview.js'
import {useForm} from 'react-hook-form'
import {savePet} from '../../services/Database'
import {db} from '../../services/firebase'
export default function PetForm({onAddPet}){
    const {register, handleSubmit} = useForm()

    const onSubmit = (values) =>{
        console.log("El form")
        onAddPet(values)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input
                    ref={register} 
                    name="nombre"
                    type="text" 
                    className="form-control" 
                    id="inputNombre" 
                    placeholder="Evite"></input>
                </div>
                
                
                <div>
                    <label>Edad</label>
                    <input 
                    ref={register}
                    name="edad" 
                    type="number" 
                    className="form-control" 
                    id="inputEdad" 
                    placeholder="4"></input>
                </div>
                
                <div>
                    <PetAvatar
                    label={"avatar"}
                    register={register}> 
                    </PetAvatar>
                </div>
                
                <div >
                    <button 
                    type="submit" 
                    className="btn btn-primary" 
                    >Submit</button>
                </div>
            </form>
    )
}
/*
class PetForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            edad: '',
            peso: 0,
            propietario: '',
            alojamiento: '',
            avatar: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddAvatar = this.handleAddAvatar.bind(this) 
    }

    handleChange(event){
        const value = event.target.value
        const name = event.target.name
 
        this.setState({
            [name]: value
        })
    }

    handleAddAvatar(avatar){
        this.setState({
           avatar: avatar
       }) 
    }

    handleSubmit(event){
        event.preventDefault()
        alert("Estas por registrar a esta nueva rata de campo")
        console.log(this.state)
        this.props.onAddPet(this.state)
        this.setState({
            nombre: '',
            edad: '',
            peso: 0,
            propietario: '',
            alojamiento: '',
        })
        
    }

    render(){
        return(
            
        )
    }
}

export default PetForm

*/