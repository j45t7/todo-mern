import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import IconButton from '@mui/material/IconButton'

const Todo = () => {
  return (
    <>
      <ListItem>
        <ListItemText primary='Todo' />
        <IconButton>
          <CreateOutlinedIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  )
}

export default Todo
