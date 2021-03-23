import React from 'react'
import "./Card.scss"
import { Card, Icon, Image } from 'semantic-ui-react';
const items = [
  {
    header: 'Project Name',
    image: 'https://i.ibb.co/JQdNDhd/download-1.jpg',
    class: 'card',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    extra: (
      <a>
        <Icon name='arrow right' />
      </a>
    )
  },
  {
    header: 'Project Name',
    image: 'https://i.ibb.co/6BgRwfx/images.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    extra: (
      <a>
        <Icon name='arrow right' />
      </a>
    )
  },
  {
    header: 'Project Name',
    image: 'https://i.ibb.co/6JBX9Wx/download.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    extra: (
      <a>
        <Icon name='arrow right'/>
      </a>
    )
  },
  {
    header: 'Service Name',
    className: 'card-group-2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    extra: (
      <a>
        <Icon name='arrow right' />
      </a>
    )
  },
  {
    header: 'Service Name',
    className: 'card-group-2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    extra: (
      <a>
        <Icon name='arrow right' />
      </a>
    )
  },
  {
    header: 'Service Name',
    className: 'card-group-2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    extra: (
      <a>
        <Icon name='arrow right'/>
      </a>
    )
  },
]

const CardMain = () => <Card.Group centered items={items} doubling={true} itemsPerRow={3}/>

export default CardMain;
