import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actionAddItem, actionEditItem, actionToggleEditItem, actionDeleteItem } from '../../store/actions/listActions'

import { Iitem, Iroot } from '../../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  editedItem: state.listReducer.editedItem
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const AddForm = ({ editedItem, dispatch }: Props) => {
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (edit) {
      const item = {
        id: editedItem.id,
        title
      }
      if (title.trim()) {
        dispatch(actionEditItem(item))
        dispatch(actionToggleEditItem({ ...item, id: null, title: '' }))
      } else if (!title.trim() && editedItem.id) {
        dispatch(actionDeleteItem({ id: editedItem.id, title, completed: false }))
      }
      setEdit(false)
    } else if (!edit && title.trim()) {
      const item: Iitem = {
        id: Date.now(),
        title,
        completed: false
      }
      dispatch(actionAddItem(item))
    }
    setTitle('')
  }

  useEffect(() => {
    if (editedItem.id && editedItem.title.trim()) {
      setEdit(true)
      setTitle(editedItem.title)
      if (inputRef && inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [editedItem])

  return (
    <form className="form">
      <input type="text" ref={inputRef} className="textfield" value={title} onChange={handleInput} />
      <button onClick={handleSubmit}>{edit ? 'Edit' : 'Add'} item</button>
    </form>
  )
}

export default connect(mapStateToProps)(AddForm)
