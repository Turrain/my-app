import Header from '@/components/Header'
import MyMessages from '@/components/MyMessages'
import Sidebar from '@/components/Sidebar'

import { Circle } from '@mui/icons-material'
import { Box, ListDivider, ListItem, ListItemButton, Stack, Typography } from '@mui/joy'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import React from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
export default function Dashboard() {
  const session = useSession()

  const position = [51.505, -0.09]
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
    <Sidebar />
    <Header />
    <Box component="main" className="MainContent" sx={{ flex: 1 }}>
      <MyMessages />
    </Box>
  </Box>
  )
}
