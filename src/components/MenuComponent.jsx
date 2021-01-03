import {Menu, Popup, Button, Image, List} from 'semantic-ui-react'
import React from "react";

const CartComponent=({title,image,id,removeBooks})=>(
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeBooks.bind(this, id)} color={'red'}>Удалить</Button>

            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>

    </List>
);

class MenuComponent extends React.Component {
    render() {
        return <Menu>
            <Menu.Item
                name='browse'
                onClick={this.handleItemClick}
            >
                Магазин книг
            </Menu.Item>


            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    onClick={this.handleItemClick}
                >
                    Итого: &nbsp; <b>{this.props.totalPrice}</b>&nbsp;руб.
                </Menu.Item>

                <Popup
                    trigger={<Menu.Item
                        name='help'
                        onClick={this.handleItemClick}
                    >
                        Корзина (<b>{this.props.count}</b>)
                    </Menu.Item>}
                    content={this.props.items.map(i=><CartComponent removeBooks={this.props.removeBooks} {...i}/>)}
                    on='click'
                    hideOnScroll
                />

            </Menu.Menu>
        </Menu>
    }
}

export default MenuComponent;