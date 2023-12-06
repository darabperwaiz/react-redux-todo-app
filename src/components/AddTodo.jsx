import React, { useState } from 'react'
import {addTodo} from '../redux/actions/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import '../assets/css/addTodo.css'

const AddTodo = ({addTodo}) => {
    const [todo, setTodo]  = useState({
        title: '',
        
    })
    function handleSubmit (event) {
        event.preventDefault()
        if(todo.title == '') {
          return;
        }
        // add todo in store
        addTodo({...todo, id:v4()})
        setTodo({
            title: "",
        })
    }
  return (
    <div className='todos-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add your new todo here' value={todo.title} onChange={(e)=> setTodo({...todo,title:e.target.value})}/>
        <button type='submit'><i className="fa-solid fa-plus"></i></button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) =>({
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
