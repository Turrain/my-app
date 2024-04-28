import * as React from 'react'
import Stack from '@mui/joy/Stack'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Input,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  tabClasses,
} from '@mui/joy'
import List from '@mui/joy/List'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ChatListItem from './ChatListItem'
import { ChatProps } from './types'
import { toggleMessagesPane } from './utils'
import ListDivider from '@mui/joy/ListDivider';
type ChatsPaneProps = {
  chats: ChatProps[]
  setSelectedChat: (chat: ChatProps) => void
  selectedChatId: string
}

export default function ChatsPane(props: ChatsPaneProps) {
  const [fetchedData, setFetchedData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/geojsons')
        const data = await response.json()
        setFetchedData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const { chats, setSelectedChat, selectedChatId } = props
  return (
    <Sheet
      sx={{
        borderRight: '1px solid',
        borderColor: 'divider',
        height: 'calc(100dvh - var(--Header-height))',
        overflowY: 'auto',
      }}
    >
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent='space-between'
        p={2}
        pb={1.5}
      >
        <Typography
          fontSize={{ xs: 'md', md: 'lg' }}
          component='h1'
          fontWeight='lg'
          endDecorator={
            <Chip
              variant='soft'
              color='primary'
              size='md'
              slotProps={{ root: { component: 'span' } }}
            >
              4
            </Chip>
          }
          sx={{ mr: 'auto' }}
        >
          Messages
        </Typography>
        <IconButton
          variant='plain'
          aria-label='edit'
          color='neutral'
          size='sm'
          sx={{ display: { xs: 'none', sm: 'unset' } }}
        >
          <EditNoteRoundedIcon />
        </IconButton>
        <IconButton
          variant='plain'
          aria-label='edit'
          color='neutral'
          size='sm'
          onClick={() => {
            toggleMessagesPane()
          }}
          sx={{ display: { sm: 'none' } }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      <Tabs aria-label='tabs' defaultValue={0} sx={{ bgcolor: 'transparent' }}>
        <TabList
          disableUnderline
          sx={{
            p: 1,
            gap: 0.5,

            bgcolor: 'background.level1',
          }}
        >
          <Tab disableIndicator>Map</Tab>
          <Tab disableIndicator>Review</Tab>
        </TabList>
      </Tabs>

      <Tabs aria-label='tabs' defaultValue={0} sx={{ bgcolor: 'transparent' }}>
        <TabList
          disableUnderline
          sx={{
            p: 1,
            gap: 0.5,
            bgcolor: 'background.level1',
          }}
        >
          <Tab disableIndicator>Overview</Tab>
          <Tab disableIndicator>Posts</Tab>
        </TabList>
        <TabPanel value={0}>
          <List
            sx={{
              py: 0,
              '--ListItem-paddingY': '0.75rem',
              '--ListItem-paddingX': '1rem',
            }}
          >
            {fetchedData.map((shape, index) => (
              <>
              <ListItem key={shape.shapeID}>
                <ListItemButton>
                <ListItemContent>
                  <Typography level='title-sm'>{shape.shapeName}</Typography>

                  <Stack direction='row' justifyContent='space-between'>
                    <Typography level='body-sm' noWrap>
                      {shape.shapeGroup}
                    </Typography>
                    <Typography level='body-xs'>{shape.shapeID}</Typography>
                  </Stack>
                </ListItemContent>
                </ListItemButton>
              </ListItem>
              <ListDivider inset="gutter" />
              </>
            ))}
            {/* {chats.map((chat) => (
              <ChatListItem
                key={chat.id}
                {...chat}
                setSelectedChat={setSelectedChat}
                selectedChatId={selectedChatId}
              />
            ))} */}
          </List>
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
      </Tabs>
    </Sheet>
  )
}
