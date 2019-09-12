import React, { useState } from 'react'
import Iitem from '../Interface/Item'

interface Iprops {
  addItem: (item: Iitem) => void
}

const Add = ({ addItem }: Iprops) => {
  const initialData: Iitem = {
    id: 0,
    title: '',
    completed: false
  }

  const [data, setData] = useState<Iitem>(initialData)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, title: e.target.value, id: Date.now() })
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (data.title.length) {
      addItem(data)
      setData(initialData)
    }
  }

  return (
    <form className="form">
      <input type="text" className="textfield" value={data.title} onChange={handleInput} />
      <button onClick={handleSubmit}>Add item</button>
    </form>
  )
}

export default Add
