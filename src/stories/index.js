import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import SignUp from '../components/SignUp.js'
import LawyerTitle from '../components/LawyerTitle.js'


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role='img' aria-label='so cool'>
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))

storiesOf('SignUp', module).add('Global page', () => <SignUp showApp={linkTo('SignUp')} />)

storiesOf('LawyerTitle', module).add('Title Lawyer', () => <LawyerTitle showApp={linkTo('LawyerTitle')} />)


