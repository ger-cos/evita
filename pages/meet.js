import Container from '../components/layaouts/Container'
import MeetForm from '../components/meet/MeetForm'

import {useEffect} from 'react'
import { useForm, FormProvider} from 'react-hook-form'

export default function Meets(){
    
    const methods = useForm({mode: "onBlur"});
    const {watch, errors} = methods;

    useEffect(() => {
        console.log("FORM CONTEXT", watch(), errors);
    }, [watch, errors]);

    

    return(
        <Container>
            <h1>Meet</h1>
            <FormProvider {...methods}>
                <MeetForm />
            </FormProvider>
        </Container>
    )
}