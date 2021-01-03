import React, {Component} from 'react'
import {Input, Menu} from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, setQuery,searchQuery}) => {
    let handleItemClick = (e, {name}) => {
        setFilter(name)
    }
    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={filterBy === 'all'}
                onClick={handleItemClick}
            >Все</Menu.Item>

            <Menu.Item
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={handleItemClick}
            >Сначала дорогие</Menu.Item>

            <Menu.Item
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={handleItemClick}
            >Сначала дешёвые</Menu.Item>

            <Menu.Item
                name='author'
                active={filterBy === 'author'}
                onClick={handleItemClick}
            >Автор</Menu.Item>

            <Input value={searchQuery} onChange={(e)=>{setQuery(e.target.value)}} icon={'search'} placeholder={'Введите название'}></Input>

        </Menu>
    )
}

export default Filter;