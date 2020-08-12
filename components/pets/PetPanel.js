
import PetForm from './PetForm.js'
import PetCard from './PetCard.js'
import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
//Gatos..

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function PetPanel(){
    const classes = useStyles();
    const [pets, setPets] = useState([])

    

    useEffect(()=>{
        fetch('http://localhost:3000/api/pets')
        .then((res) => res.json())
        .then(setPets)
    }, [])

    const handleAddPet = (pet)=> {
        
        console.log("La pet")
        console.log(pet)
        setPets([...pets, pet])
        
    }
    /*

    */ 

    const petCards = pets.map((pet, i) =>{
        return(
            <Grid item xs={3}>
                <PetCard 
                    nombre={pet.nombre}
                    edad={pet.edad} 
                    id={i}
                    peso={"6kg"}
                    avatar={pet.avatar}>
                </PetCard>
            </Grid>
        )
    })

    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <PetForm onAddPet={handleAddPet}></PetForm>
                </Grid>
                <Grid item xs={10} container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} >
                    {petCards}
                </Grid>
            </Grid>
        </div>
    )
        
    
}
