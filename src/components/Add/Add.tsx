import React, { useState } from 'react'

interface Iprops {
  addItem: (title: string) => void
}

const Add = ({ addItem }: Iprops) => {

  const [data, setData] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (data.trim()) {
      addItem(data)
      setData('')
    }
  }

  return (
    <form className="form">
      <input type="text" className="textfield" value={data} onChange={handleInput} />
      <button onClick={handleSubmit}>Add item</button>
    </form>
  )
}

export default Add
