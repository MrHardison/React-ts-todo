import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import './addForm.sass'

import { actionAddItem, actionEditItem, actionToggleEditItem, actionDeleteItem } from '../../store/actions/listActions'

import { Iitem, Iroot } from '../../Interface'

interface Iprops {
  dispatch: Dispatch
}

const mapStateToProps = (state: Iroot) => ({
  sortList: state.sortReducer.sortTypes,
  editedItem: state.listReducer.editedItem
})

type Props = Iprops & ReturnType<typeof mapStateToProps>

const AddForm = ({ editedItem, sortList, dispatch }: Props) => {
  const [title, setTitle] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('high')
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedPriority(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (edit) {
      const item = {
        id: editedItem.id,
        title,
        priority: selectedPriority
      }
      if (title.trim()) {
        dispatch(actionEditItem(item))
        dispatch(actionToggleEditItem({ ...item, id: null, title: '', priority: 'high' }))
      } else if (!title.trim() && editedItem.id) {
        dispatch(actionDeleteItem(editedItem.id))
      }
      setEdit(false)
    } else if (!edit && title.trim()) {
      const item: Iitem = {
        id: Date.now(),
        title,
        completed: false,
        priority: selectedPriority
      }
      dispatch(actionAddItem(item))
    }
    setTitle('')
  }

  useEffect(() => {
    if (editedItem.id && editedItem.title.trim()) {
      setEdit(true)
      setTitle(editedItem.title)
      setSelectedPriority(editedItem.priority)
      if (inputRef && inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [editedItem])

  return (
    <form className="form">
      <input type="text" ref={inputRef} className="textfield" value={title} onChange={handleInput} />
      <div className="form-btn-wrapper">
        <select name="priorities" className="select" value={selectedPriority} onChange={handleSelect}>
          {sortList.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>{edit ? 'Edit' : 'Add'} item</button>
      </div>
    </form>
  )
}

export default connect(mapStateToProps)(AddForm)
