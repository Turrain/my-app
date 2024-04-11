/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import * as React from 'react'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import { useSession, getSession } from 'next-auth/react'
import Link from '@mui/joy/Link'
import './index.css'
import {
  BookmarkAddOutlined,
  Check,
  DarkMode,
  Face,
  FavoriteBorder,
  GitHub,
  Google,
  Key,
  KeyOutlined,
  LightMode,
  Lock,
  LockOutlined,
  Mail,
  ModeCommentOutlined,
  MoreHoriz,
  SendOutlined,
  SignpostOutlined,
} from '@mui/icons-material'
import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  CardContent,
  CardCover,
  CardOverflow,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemDecorator,
  Snackbar,
  Stack,
  useColorScheme,
} from '@mui/joy'

import Particles, { initParticlesEngine } from '@tsparticles/react'

import styles from '../styles/Home.module.css'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { loadLinksPreset } from '@tsparticles/preset-links'
import { ReactTyped } from 'react-typed'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import NextJsImage from '@/components/NextJsImage'
import { getServerSession } from 'next-auth'
import { SxProps } from '@mui/joy/styles/types'
import Image from 'next/image'

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

const BorderWithCornerCircles = ({
  color = '#4ADE80',
  children,
  variant = 'soft',
  ...props
}) => {
  const circleStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: color,
    borderRadius: '50%',
    position: 'absolute',
  }

  return (
    <Sheet
      variant={variant}
      sx={{
        border: `2px solid ${color}`,
        width: '100%',
        height: '100%',
        p: 3,
        position: 'relative',
        opacity: '100%',
        borderRadius: '10px',
        ...props.sx,
      }}
      {...props}
    >
      <Box sx={{ ...circleStyle, top: '-4px', left: '-4px' }} />
      <Box sx={{ ...circleStyle, top: '-4px', right: '-4px' }} />
      <Box sx={{ ...circleStyle, bottom: '-4px', left: '-4px' }} />
      <Box sx={{ ...circleStyle, bottom: '-4px', right: '-4px' }} />
      {children}
    </Sheet>
  )
}

function LicenseCard() {
  return (
    <Card
      variant='solid'
      color='primary'
      invertedColors
      sx={{
        boxShadow: 'lg',
        width: 400,
        maxWidth: '100%',
        // to make the demo resizeable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Chip size='sm' variant='soft'>
          Sketch 55+
        </Chip>
        <Chip size='sm' variant='soft'>
          Figma
        </Chip>
      </Box>
      <div>
        <Typography level='h2'>
          $58{' '}
          <Typography fontSize='sm' textColor='text.tertiary'>
            /month
          </Typography>
        </Typography>
      </div>
      <CardContent>
        <Typography level='title-lg'>Individual License</Typography>
        <Typography level='body-md'>
          This license allows you to use the Symbol System Design with unlimited
          amount of personal and commercial projects.
        </Typography>
      </CardContent>
    </Card>
  )
}

function CardLayers3d() {
  return (
    <Box
      sx={{
        height: 800,
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)  translate3d(-40px, -30px, 20px)',

            '& > div:nth-child(1)': {
              transform: 'scaleY(1) translate3d(150px, 80px, 20px)',
            },
          },
        },
      }}
    >
      <Typography
        level='h2'
        fontSize='lg'
        m={2}
        maxWidth={400}
        sx={{
          zIndex: 4,
          borderBottom: '2px solid #4ADE80',
          borderRight: '2px solid #4ADE80',
        }}
      >
        The normalized difference vegetation index (NDVI) is a widely-used
        metric for quantifying the health and density of vegetation using sensor
        data. It is calculated from
      </Typography>
      <Typography
        sx={{
          zIndex: 4,
        }}
        level='h2'
        fontSize='lg'
        m={2}
        maxWidth={400}
      >
        Original
      </Typography>

      <Card
        variant='outlined'
        sx={{
          zIndex: -1,
          minHeight: '280px',
          width: 380,
          height: 400,
          backgroundImage: "url('orig.png')",
        }}
      >
        <CardContent>
          <BorderWithCornerCircles
            variant='plain'
            sx={{ opacity: '75%', zIndex: -1 }}
          >
            <img src='ndvi.png' width='100%' />
          </BorderWithCornerCircles>
        </CardContent>
      </Card>
      <Typography
        sx={{
          zIndex: 4,
          borderBottom: '2px solid #4ADE80',
          borderRight: '2px solid #4ADE80',
        }}
        level='h2'
        fontSize='lg'
        m={2}
        maxWidth={400}
      >
        NDVI
      </Typography>
      <Typography sx={{}} m={2} maxWidth={400} level='h4' fontSize='md'>
        The normalized difference vegetation index (NDVI) is a widely-used
        metric for quantifying the health and density of vegetation using sensor
        data. It is calculated from spectrometric data at two specific bands:
        red and near-infrared. The spectrometric data is usually sourced from
        remote sensors, such as satellites.
      </Typography>
    </Box>
  )
}
export default function Home() {
  const { mode } = useColorScheme()
  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384]
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  const [openLb, setOpenLb] = React.useState(true)

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
          value: '#4ADE80',
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        links: {
          color: {
            value: '#4ADE80',
          },
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
      },
      fullScreen: false,
    }),
    [],
  )
  const session = useSession()

  console.log(session)
  if (!session.status) {
    return <p>Access Denied</p>
  }
  console.log(session)
  return (
    <Box
      display='flex'
      flexDirection='column'
      gap='2rem'
      width='100%'
      sx={{ my: '4rem' }}
    >
      <div>{session.data?.user?.email}</div>
      <ModeToggle />
      <Sheet
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',

          position: 'relative,',
        }}
      >
        {/* <Box
          sx={{
            position: 'absolute',
            left: '70%',
            top: '8%',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <BorderWithCornerCircles variant='plain' color='#0B6BCB'>
            <Typography level='h2'>Login</Typography>
            <Typography level='h4'>For using our services</Typography>
          </BorderWithCornerCircles>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '55%',
            top: '1%',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <BorderWithCornerCircles color='#0B6BCB'>
            <Typography level='h2'>Resource Management</Typography>
            <Typography level='h4'>Manage your farm, data and agro.</Typography>
          </BorderWithCornerCircles>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '39%',
            top: '6%',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <BorderWithCornerCircles color='#0B6BCB'>
            <Typography level='h2'>Data Management</Typography>
            <Typography level='h4'>Load or Import your own data</Typography>
          </BorderWithCornerCircles>
        </Box> */}
        {init && <Particles id='tsparticles' options={options} />}

        <Box
          display='flex'
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
          width='100%'
          alignItems='center'
          justifyContent='space-evenly'
        >
          <Box display='flex' flexDirection='column' gap='2rem'>
            <BorderWithCornerCircles
              color='#4ADE80'
              sx={{ p: 10, border: `2px solid #4ADE80` }}
              variant='plain'
            >
              <Typography level='h1' maxWidth={400}>
                EOS Data Analytics:
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'end',
                  justifyItems: 'end',
                }}
              >
                <Typography
                  level='h2'
                  sx={{ color: '#4ADE80', textAlign: 'end' }}
                  maxWidth={400}
                >
                  Space solutions for Earth problems
                </Typography>
              </Box>
              <Typography
                level='h2'
                fontSize='md'
                p={2}
                maxWidth={480}
                sx={{
                  zIndex: 4,
                  borderBottom: '2px solid #4ADE80',
                  borderRight: '2px solid #4ADE80',
                }}
              >
                The normalized difference vegetation index (NDVI) is a
                widely-used metric for quantifying the health and density of
                vegetation using sensor data. It is calculated from
              </Typography>
            </BorderWithCornerCircles>
            <BorderWithCornerCircles color='#4ADE80' variant='plain'>
              <Typography level='h2' fontSize='md' maxWidth={480}>
                The normalized difference vegetation index (NDVI) is a
                widely-used metric for quantifying the health and density of
                vegetation using sensor data. It is calculated from
              </Typography>
            </BorderWithCornerCircles>
            <BorderWithCornerCircles color='#4ADE80' variant='plain'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography level='h3' textAlign='left'>
                  Login &nbsp;
                  <ReactTyped
                    strings={[
                      'to access data',
                      'to access maps',
                      'to help you',
                    ]}
                    typeSpeed={100}
                    loop
                  />
                  <br />
                  <Typography level='h4' fontSize='lg'>
                    Just one click
                  </Typography>
                </Typography>
                <Button variant='plain'>
                  <Typography
                    sx={{ color: '#4ADE80' }}
                    level='h4'
                    fontSize='lg'
                  >
                    Next &gt;
                  </Typography>
                </Button>
              </Box>
            </BorderWithCornerCircles>
          </Box>

          <CardLayers3d />
        </Box>
      </Sheet>

      <Box
        sx={{
          width: '95%',
          margin: 'auto',
        }}
      >
        <Box
          display='flex'
          sx={{
            p: 2,
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box p={2}>
            <Typography
              level='h2'
              color='primary'
              marginBottom={4}
              maxWidth={400}
            >
              Space solutions for Earth problems
            </Typography>
            <Typography level='h4' fontSize='md' maxWidth={500}>
              EOS Data Analytics is one of the leading global geospatial
              analytics providers on the market, partnering with governmental,
              commercial, and scientific organizations. EOSDA creates
              satellite-driven solutions for agriculture, forestry, and mining,
              while also actively exploring 22 more industries. The Company sees
              its mission as helping businesses around the world become more
              sustainable via innovative precision observation and data
              analytics tools.
            </Typography>
          </Box>
          <Box borderRadius='45px' overflow='hidden'>
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src='map.jpg' width='100%' />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',

          height: '100vh',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',

            justifyContent: 'center',
            my: '2rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              level='h4'
              color='success'
              maxWidth={400}
              textAlign='center'
            >
              OUR PRODUCTS
            </Typography>
            <Typography
              level='h2'
              color='primary'
              maxWidth={400}
              textAlign='center'
            >
              Explore the geospatial solutions for your business
            </Typography>
            <Box
              marginTop={26}
              display='flex'
              justifyContent='center'
              width='100%'
              gap={8}
            >
              {[1, 2, 3].map((index) => (
                <Card size='lg' sx={{ width: '20%' }}>
                  <CardOverflow>
                    <AspectRatio ratio='2'>
                      <img
                        src='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318'
                        srcSet='https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x'
                        loading='lazy'
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Chip size='sm' variant='outlined' color='neutral'>
                    BASIC
                  </Chip>

                  <Divider inset='none' />
                  <Typography level='h3' textAlign='center'>
                    Virtual Credit Cards {index}
                  </Typography>
                  <List
                    size='sm'
                    sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                      <ListItem key={index}>
                        <ListItemDecorator>
                          <Check color='success' />
                        </ListItemDecorator>

                        <Typography level='h4' fontSize='lg'>
                          Virtual Credit Cards {index}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

    
      <LandingBlock
        containerSize='xl'
        header='HELLO'
        subHeader='AEEEEEE'
        imageUrl='planet-earth-background.jpg'
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            margin: 'auto',
            width: '70%',

            flexWrap: 'wrap',

            gap: 4,
            mt: '16rem',
          }}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <Card
              variant='plain'
              key={index}
              sx={{
                width: 320,
                maxWidth: '100%',
                backgroundColor: 'rgba(0,0,0,0.45)',
              }}
            >
              <CardContent sx={{ alignItems: 'left', textAlign: 'left' }}>
                <Typography level='title-lg'>USER BASE</Typography>
                <Typography level='h1'>100$+</Typography>
                <Typography level='title-lg'>USERS</Typography>

                <Typography level='title-md' sx={{ maxWidth: '24ch' }}>
                  1М+ end users are acting on our insights
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </LandingBlock>
      <LandingBlock containerSize='xl' header='HELLO' subHeader='AEEEEEE'>
        <Stack gap='2rem'>
          <ImageWithContent
            imageAlt=''
            imageSource='map.jpg'
            contentPosition={{ bottom: 0, right: 0 }}
          >
            <WideCard />
          </ImageWithContent>
          <ImageWithContent
            imageAlt=''
            imageSource='map.jpg'
            contentPosition={{ top: 0, left: 0 }}
          >
            <WideCard />
          </ImageWithContent>
        </Stack>
      </LandingBlock>
    </Box>
  )
}

interface LandingBlockProps {
  containerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  subHeader?: string
  header?: string
  imageUrl?: string
  blockSx?: SxProps
  children?: React.ReactNode
}
const LandingBlock: React.FC<LandingBlockProps> = ({
  children,
  blockSx,
  containerSize = 'xl',
  header,
  subHeader,
  imageUrl,
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...blockSx,
      }}
    >
      <Container maxWidth={containerSize}>
        <Typography
          level='h4'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {subHeader}
        </Typography>
        <Typography
          level='h1'
          sx={{
            textAlign: 'center',

            marginBottom: '32px',
          }}
        >
          {header}
        </Typography>

        {children}
      </Container>
    </Box>
  )
}
interface ImageWithContentProps {
  children?: React.ReactNode
  imageSource: string
  imageAlt: string
  contentPosition?: {
    top?: number | string
    left?: number | string
    bottom?: number | string
    right?: number | string
  }
}

const ImageWithContent: React.FC<ImageWithContentProps> = ({
  children,
  imageSource,
  imageAlt,
  contentPosition,
  ...boxProps
}) => {
  return (
    <Box
      sx={{
        position: {
          xs: 'unset',
          md: 'relative',
        },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: {
          xs: 'auto',
          md: '100%',
        },
        '& img': {
          width: '100%',
          height: {
            xs: 'auto',
            md: '100%',
          },
          objectFit: 'cover',
        },
      }}
      {...boxProps}
    >
      <img src={imageSource} alt={imageAlt} />
      <Box
        sx={{
          position: {
            xs: 'unset',
            md: 'absolute',
          },
          top: contentPosition?.top,
          left: contentPosition?.left,
          bottom: contentPosition?.bottom,
          right: contentPosition?.right,
          padding: {
            xs: '16px',
            md: '32px',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

interface WideCardProps {
  children?: React.ReactNode
}

const WideCard: React.FC<WideCardProps> = ({ children }) => {
  return (
    <Card
      size='lg'
      variant='plain'
      orientation='horizontal'
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: 500,
        // to make the demo resizable
        resize: 'horizontal',
        overflow: 'auto',
      }}
    >
      <CardOverflow
        variant='solid'
        color='success'
        sx={{
          flex: '0 0 200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
        }}
      >
        <Typography fontSize='xl4' fontWeight='xl' textColor='#fff'>
          89
        </Typography>
        <Typography textColor='primary.200'>
          FAQs answered, see if yours is one of them.
        </Typography>
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <AspectRatio ratio='19/8' objectFit='contain' variant='plain'>
          <img
            alt=''
            src='https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg'
          />
        </AspectRatio>
        <CardContent>
          <Typography level='title-lg'>Need Some Help?</Typography>
          <Typography fontSize='sm' sx={{ mt: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Typography>
        </CardContent>
        <Button
          variant='outlined'
          color='primary'
          sx={{
            '--variant-borderWidth': '2px',
            borderRadius: 40,
            borderColor: 'primary.500',
            mx: 'auto',
          }}
        >
          See FAQ
        </Button>
      </CardContent>
    </Card>
  )
}
