import * as React from 'react'
import Sheet from '@mui/joy/Sheet'

import MessagesPane from './MessagesPane'
import ChatsPane from './ChatsPane'
import { ChatProps } from './types'
import { chats } from './data'
import dynamic from 'next/dynamic'
import { Box, Tabs, TabList, tabClasses, Tab } from '@mui/joy'
import MessagesPaneHeader from './MessagesPaneHeader'

export default function MyProfile() {
  const [selectedChat, setSelectedChat] = React.useState<ChatProps>(chats[0])
  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false,
  })
  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(30%, 400px)) 1fr',
        },
      }}
    >
      <Sheet
        sx={{
          position: { xs: 'fixed', sm: 'sticky' },
          transform: {
            xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
            sm: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 100,
          width: '100%',
          top: 52,
        }}
      >
        <ChatsPane
          chats={chats}
          selectedChatId={selectedChat.id}
          setSelectedChat={setSelectedChat}
        />
      </Sheet>
      <Sheet
        sx={{
          height: { xs: 'calc(100dvh - var(--Header-height))', lg: '100dvh' },
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.level1',
        }}
      >
        {/* <MessagesPane chat={selectedChat} key={0}/> */}
     
          <MapWithNoSSR />
        
      </Sheet>
    </Sheet>
  )
}
