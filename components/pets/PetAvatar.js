import { useEffect, useState } from 'react'

export default function PetAvatar({src, flag}){

    const [img, setImg] = useState('')
    
    useEffect(() => {
        console.log(flag)
        if(flag){
            var reader  = new FileReader();
            var file = src[0]

            console.log("Afuera")
            console.log(file)

            reader.onloadend = function () {
                setImg(reader.result)
            }
            
            if (file) {
                reader.readAsDataURL(file);
            } 
            /*
            else {
                preview.src = "";
            }
            */
        }
        else{
            console.log("Adentro")
            console.log(src)
            setImg(src)
        }
    }, [])


    return(
        <img id='pet' src={img}/>
    )
}