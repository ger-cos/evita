import {useState, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PetAvatar from './PetAvatar';


export default function AvatarPreview({label, register}){

    const [file, setFile] = useState('')
    const [imagePreviewUrl, setImagePreviewUrl] = useState('')

    const handleImageChange = (e) =>{
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];
      
      reader.onloadend = () => {
        setFile(file)
        setImagePreviewUrl(reader.result)
        //props.onAddAvatar(reader.result)
      }
      reader.readAsDataURL(file)
    }

    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<PetAvatar src={imagePreviewUrl} />);
    }
    else{
        imagePreview=(<div >Please selcet an Rata de campo Image</div>)
    }
    return (
      <>
        <div>
            {imagePreview}
        </div>
        <input
            name={label}
            ref={register} 
            accept="image/*" 
            id="icon-button-file" 
            type="file"
            onChange={handleImageChange}
            style={{display: 'none', align: 'center'}}
            
        />
        <label 
            htmlFor="icon-button-file" style={{align: 'center'}}>
            <IconButton 
                color="primary" 
                aria-label="upload picture" 
                component="span">
                    <PhotoCamera />
            </IconButton>
        </label>

      </>
    )
}
