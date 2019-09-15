import React, { useState } from 'react'

interface Iprops {
  addItem: (title: string) => void,
  editItem: (title: string) => void,
  editTitle: string
}

const Add = ({ addItem, editItem, editTitle }: Iprops) => {

  const [data, setData] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (data.trim()) {
      editTitle ? editItem(data) : addItem(data)
      setData('')
    }
  }

  return (
    <form className="form">
      <input type="text" className="textfield" value={data} onChange={handleInput} />
      <button onClick={handleSubmit}>{editTitle ? 'Edit' : 'Add'} item</button>
    </form>
  )
}

export default Add
