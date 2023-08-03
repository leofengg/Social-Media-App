import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function MenuBar() {
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (

        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={handleItemClick}
          />
        </Menu>
    )
  }

export default MenuBar;