import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actionAddItem, actionEditItem, actionToggleEditItem } from '../../store/actions/listActions'

import { Iitem, Iroot } from '../../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  editedItem: state.listReducer.editedItem
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const Add = ({ editedItem, dispatch }: Props) => {
  const [title, setTitle] = useState('')
  const [edit, setEdit] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (title.trim()) {
      if (edit) {
        dispatch(actionEditItem({ id: editedItem.id, title }))
        dispatch(actionToggleEditItem({ id: null, title: '' }))
        setEdit(false)
      } else {
        const item: Iitem = {
          id: Date.now(),
          title,
          completed: false
        }
        dispatch(actionAddItem(item))
      }
    }
    setTitle('')
  }

  useEffect(() => {
    if (editedItem.id && editedItem.title.trim()) {
      setEdit(true)
      setTitle(editedItem.title)
    }
  }, [editedItem])

  return (
    <form className="form">
      <input type="text" className="textfield" value={title} onChange={handleInput} />
      <button onClick={handleSubmit}>{edit ? 'Edit' : 'Add'} item</button>
    </form>
  )
}

export default connect(mapStateToProps)(Add)
