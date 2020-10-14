import React,{useState} from 'react'
import { Button, Modal , Form } from 'react-bootstrap'





function AddMovie({setMovies,movies}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title, setTitle] = useState("")
const handleChangeTitle = (e) => {
  setTitle(e.target.value);
};
const [Discription, setDiscription] = useState("")
const handleChangeDiscription = (e) => {
  setDiscription(e.target.value);
}
  const [Actors,setActors]= useState ("")
  const handleChangeActors = (e) => {
    setActors(e.target.value);
  }
   const [Rating,setRating]= useState ("")
  const handleChangeRating = (e) => {
    setRating(e.target.value);
  }
   const [image,setImage]= useState ("")
  const handleChangeImage = (e) => {
    setImage(e.target.value);
  }
    const handleClikAdd = (title , Discription , Actors , Rating , image)=>{
      setMovies ([...movies,{title , Discription , Actors , Rating , image}])
    }
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Add New Movie
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Control size="sm" type="text" placeholder="Movie Title" onChange ={handleChangeTitle} value={title} />
        <Form.Control size="sm" type="text" placeholder="Movie Discription"onChange ={handleChangeDiscription} value={Discription} />
        <Form.Control size="sm" type="text" placeholder="Movie Actors"onChange ={handleChangeActors} value={Actors} />
        <Form.Control size="sm" type="text" placeholder="Movie Rating"onChange ={handleChangeRating} value={Rating} />
        <Form.Control size="sm" type="text" placeholder="Movie IMAGE link "onChange ={handleChangeImage} value={image}/>
        
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" style={{width:'10px'}} onClick={()=>{handleClikAdd(title,Discription,Actors,Rating,image);handleClose()}}>
            Add Movie
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
  }
  export default AddMovie;