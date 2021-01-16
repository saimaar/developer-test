import React from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem, emptyList} from './redux/actions';
import {useState, useEffect } from 'react'
import { Form, Input, TextArea, Button} from 'semantic-ui-react';


function App (props){

  let [wish, setWish] = useState("")

  let handleChange=(evt)=>{
    setWish(evt.target.value)
  }

  let addItemsToList=()=>{
    setWish("")
    return !props.wishList.includes(wish) && wish !== "" ?
      props.addItem(wish) : null
  }

  let handleSubmit=()=>{
    if (props.wishList.length > 0){
     alert("Your wishlist has been submitted")
     props.emptyList([])
   }
  }

  let pTagWish = props.wishList.map(wish =>
     <p onClick={()=>{props.deleteItem(wish)}}>{wish}</p>
   )
   
  return(
    <div className="main-div">
      <Form className="form">
        <Form.Group className="form-field" widths='equal'>
          <h3>MY WISHLIST</h3>
          <div className="wish-div">
            {pTagWish}
          </div>
          <Form.Field >
            <input
              placeholder='Add to your wishlist'
              value={wish}
              onChange={handleChange}/>
          </Form.Field>
          <Button.Group vertical className="button-group">
            <Button className="button"
              color="green"
              onClick={addItemsToList}>
              Add
            </Button>
            <Button className="button"
              color="green"
              onClick={handleSubmit}>
              Submit
            </Button>
          </Button.Group>
       </Form.Group>
      </Form>
    </div>
  )
}


const mapDispatchToprops = {addItem, deleteItem, emptyList}

const mapStateToProps=(state)=>{
  return{
    wishList: state.wishList
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(App);

//With hooks, we could have used useDisptach and useSelector instead of connect
