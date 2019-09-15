import React, { useState, useEffect } from 'react'
import List from '../components/List/List'
import Add from '../components/Add/Add'
import Filters from '../components/Filters/Filters'

import Iitem from '../Interface/Item'
import Ifilter from '../Interface/Filter'

const App = () => {
  const [list, setList] = useState<Array<Iitem>>([
    {
      id: 1,
      title: 'title1',
      completed: false
    },
    {
      id: 2,
      title: 'title2',
      completed: false
    },
    {
      id: 3,
      title: 'title3',
      completed: false
    }
  ])

  const [filteredList, setFilteredList] = useState<Array<Iitem>>(list)

  const [filters, setFilters] = useState<Array<Ifilter>>([
    { name: 'All', active: true },
    { name: 'Completed', active: false },
    { name: 'Active', active: false }
  ])

  const [editedItem, setEditedItem] = useState<Iitem>({id: 0, title: '', completed: false})

  const addItem = (title: string): void => {
    const item: Iitem = {
      id: Date.now(),
      title,
      completed: false
    }
    setList([...list, item])
  }

  const editItem = (title: string): void => {
    console.log(title)
  }

  const deleteItem = (item: Iitem): void => {
    setList(list.filter(i => i !== item))
  }

  const changeItem = (item: Iitem): void => {
    setList(
      list.map(i => {
        if (i.id === item.id) {
          i.completed = item.completed
        }
        return i
      })
    )
  }

  const changeFilter = (type: string): void => {
    setFilters(
      filters.map(f => {
        if (f.name === type) {
          f.active = true
        } else {
          f.active = false
        }
        return f
      })
    )
  }

  useEffect(() => {
    const activeFilter = filters.find(f => f.active)
    if (activeFilter) {
      const type = activeFilter.name
      setFilteredList(
        list.filter(i => {
          if (type.toLowerCase() === 'all') {
            return i
          } else if (type.toLowerCase() === 'completed') {
            return i.completed
          } else if (type.toLowerCase() === 'active') {
            return !i.completed
          } else {
            return i
          }
        })
      )
    }
  }, [filters, list])

  return (
    <div className="container">
      <Add addItem={addItem} />
      {filteredList.length ? (
        <List list={filteredList} deleteItem={deleteItem} changeItem={changeItem} />
      ) : (
        <div className="empty-list">List is empty</div>
      )}
      <Filters filters={filters} changeFilter={changeFilter} />
    </div>
  )
}

export default App
