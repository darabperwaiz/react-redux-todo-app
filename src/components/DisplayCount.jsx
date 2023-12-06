import React from 'react'
import { connect } from 'react-redux'

const DisplayCount = ({todos}) => {
  return (
    <div>
      Total: {todos.length}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer
  }
}

const mapDispatchToProps = (dispatch) =>({})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayCount)
