import React from 'react';
import ReactDOM from 'react-dom';
import './styles/PetAvatar.css'

class PetAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      this.props.onAddAvatar(reader.result)
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }
    else{
        $imagePreview=(<div className="previewText">Please selct an Rata de campo Image</div>)
    }

    return (
      <div
        className="previewComponent">
        <form onSubmit={this.handleSubmit}>
          <input className="btn btn-outline-dak" type="file" onChange={this.handleImageChange} />
        {/*<button className="submitButton" type="submit" onClick={this.handleSubmit}>Enviar</button> */}
        </form>
        <div className="imgPreview">
            {$imagePreview}
        </div>
      </div>
    )
  }

}

export default PetAvatar