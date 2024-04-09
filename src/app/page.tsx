'use client'
import * as React from 'react'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import Link from '@mui/joy/Link'
import {
  DarkMode,
  Google,
  Key,
  KeyOutlined,
  LightMode,
  Lock,
  LockOutlined,
  SignpostOutlined,
} from '@mui/icons-material'
import { Box, Divider, IconButton, LinearProgress, Stack, useColorScheme } from '@mui/joy'

import Particles, { initParticlesEngine } from '@tsparticles/react'

import styles from '../styles/Home.module.css'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { loadLinksPreset } from '@tsparticles/preset-links'

 function PasswordMeterInput() {
  const [value, setValue] = React.useState('');
  const minLength = 12;
  return (
    <Stack
    
      sx={{
        '--hue': Math.min(value.length * 10, 120),
      }}
    >
      <FormLabel>
              {' '}
              <Typography fontSize='xs' sx={{ alignSelf: 'center', mr: 1 }}>
                Email
              </Typography>
            </FormLabel>
      <Input
        type="password"
       
        startDecorator={<Key />}
        size='sm'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <LinearProgress
        determinate
        size="sm"
        value={Math.min((value.length * 100) / minLength, 100)}
        sx={{
          bgcolor: 'background.level3',
          color: 'hsl(var(--hue) 80% 40%)',
        }}
      />
      <Typography
        level="body-xs"
        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
      >
        {value.length < 3 && 'Very weak'}
        {value.length >= 3 && value.length < 6 && 'Weak'}
        {value.length >= 6 && value.length < 10 && 'Strong'}
        {value.length >= 10 && 'Very strong'}
      </Typography>
    </Stack>
  );
}

function ModeToggle(props: any) {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <IconButton
      variant='plain'
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
      {...props}
    >
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}

export default function Home() {
  const [open, setOpen] = useState(false)

  const particlesInitCb = useCallback(async (engine: any) => {
    console.log('callback')

    await loadLinksPreset(engine)
  }, [])

  const particlesLoaded = useCallback((container: any) => {
    console.log('loaded', container)
  }, [])

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(particlesInitCb).then(() => {
      setInit(true)
    })
  }, [])

  const options = useMemo(
    () => ({
      preset: 'links',
      background: {
        color: {
          value: 'var(--joy-palette-background-surface)',
        },
      },
      particles: {
        color: {
          value: '#0B6BCB',
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        links: {
          color: {
            value: '#0B6BCB',
          },
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
      },
      fullScreen: {
        zIndex: -1,
      },
    }),
    [],
  )
  return (
    <Sheet
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {init && <Particles id='tsparticles' options={options} />}
      <Box display='flex'>
        {/* <!---------------------------- */}
        <Sheet
          sx={{
            position: 'relative',
            opacity: '90%',
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            zIndex: 1,

            transition: 'transform 0.9s ease-out, opacity 0.5s ease-out',
            transform: open ? 'translateX(50%)' : 'translateX(0)',
          }}
          variant='soft'
        >
         
          {open? <ModeToggle
            sx={{ width: 8, height: 8, right: 8, top: 8, position: 'absolute' }}
          />: <></>}
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            justifyItems='center'
            width='100%'
          >
            <LockOutlined
              sx={{
                width: '36px',
                height: '36px',
                alignSelf: 'center',
              }}
            />

            <Typography level='h2' textAlign='center'>
              <strong>Welcome back</strong>
            </Typography>
            <Typography
              endDecorator={ <Button size='sm' onClick={() => setOpen(false)} variant='plain' color='primary' sx={{padding:0}}>Sign up</Button>}
              fontSize='sm'
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Box>
          <FormControl id='email'>
            <FormLabel>
              {' '}
              <Typography fontSize='xs' sx={{ alignSelf: 'center', mr: 1 }}>
                Email
              </Typography>
            </FormLabel>
            <Input size='sm' name='email' type='email' />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>
              <Box display='flex' justifyItems='space-between' width='100%'>
                <Typography fontSize='xs' sx={{ alignSelf: 'center', mr: 1 }}>
                  Password
                </Typography>
                <Link
                  level='body-xs'
                  sx={{ whiteSpace: 'nowrap' }}
                  href='/sign-up'
                >
                  Forget password?
                </Link>
              </Box>
            </FormLabel>
            <Input size='sm' name='password' type='password' />
          </FormControl>
          <Button sx={{ mt: 1 }}>Log in</Button>
          <Divider sx={{
            
          }}>or</Divider>
          <Button variant='outlined' sx={{
          
          }}>
            <Google sx={{ mr: 1 }} /> Continue with Google
          </Button>
          <Typography fontSize='xs' textAlign='center' sx={{
          
          }}>
            By signing in, you accept our{' '}
            <Link href='/sign-up' fontWeight='bold'>
              terms of service
            </Link>
          </Typography>
        </Sheet>
        {/* <!---------------------------- */}
        <Divider orientation="vertical" />
           {/* <Divider sx={{transform: 'rotate(90deg)'}}>---------------------------------------------------------------------</Divider>  */}
        <Sheet
          sx={{
            position: 'relative',
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 4,
            flexDirection: 'column',
            gap: 2,
            transition: 'transform 0.9s ease-out, opacity 1.1s ease-out',
            opacity: open ? '0%' : '90%',
            display: 'flex',
            zIndex: 0,
            transform: open ? 'translateX(-50%)' : 'translateX(0)',
          }}
          variant='soft'
        >
          <ModeToggle
            sx={{ width: 8, height: 8, right: 8, top: 8, position: 'absolute' }}
          />
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            justifyItems='center'
            width='100%'
          >
            <KeyOutlined
              sx={{
                width: '36px',
                height: '36px',
                alignSelf: 'center',
              }}
            />

            <Typography level='h2' textAlign='center'>
              <strong>Registration</strong>
            </Typography>
            <Typography
              endDecorator={<Button size='sm' onClick={() => setOpen(true)} variant='plain' color='primary' sx={{padding:0}}>Log in</Button>}
              fontSize='sm'
              sx={{ alignSelf: 'center' }}
            >
              You have account?
            </Typography>
          </Box>
          <FormControl id='email'>
            <FormLabel>
              {' '}
              <Typography fontSize='xs' sx={{ alignSelf: 'center', mr: 1 }}>
                Name
              </Typography>
            </FormLabel>
            <Input size='sm' name='email' type='email' />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>
              {' '}
              <Typography fontSize='xs' sx={{ alignSelf: 'center', mr: 1 }}>
                Email
              </Typography>
            </FormLabel>
            <Input size='sm' name='email' type='email' />
          </FormControl>
          <FormControl id='email'>
            
           <PasswordMeterInput/>
          </FormControl>
          <FormControl id='password'>
            <FormLabel>
              <Box display='flex' justifyItems='space-between' width='100%'>
                <Typography fontSize='xs' sx={{ alignSelf: 'center', mr: 1 }}>
                  Retry password
                </Typography>
              
              </Box>
            </FormLabel>
            <Input size='sm' name='password' type='password' />
          </FormControl>
          
          <Button sx={{ mt: 1 }}>Register</Button>
         
        </Sheet>
      </Box>
    </Sheet>
  )
}
