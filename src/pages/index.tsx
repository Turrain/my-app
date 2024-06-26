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
    width: '14px',
    height: '14px',
    backgroundColor: color,
    borderRadius: '50%',
    position: 'absolute',
  }

  return (
    <Sheet
      variant={variant}
      sx={{
        border: `2px dashed ${color}`,

        p: 3,
        position: 'relative',
        opacity: '100%',
        borderRadius: '10px',
        ...props.sx,
      }}
      {...props}
    >
      <Box sx={{ ...circleStyle, top: '-7px', left: '-7px' }} />
      <Box sx={{ ...circleStyle, top: '-7px', right: '-7px' }} />
      <Box sx={{ ...circleStyle, bottom: '-7px', left: '-7px' }} />
      <Box sx={{ ...circleStyle, bottom: '-7px', right: '-7px' }} />
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
      <LandingBlock containerSize='xl'>
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
      </LandingBlock>

      <LandingBlock containerSize='xl' header='HELLO' subHeader='AEEEEEE'>
        <TwoSideComponent>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography
              level='h2'
              color='primary'
              marginBottom='4'
              maxWidth={400}
              textAlign='right'
              alignSelf='self-end'
            >
              Space solutions
            </Typography>
            <Typography
              level='h2'
              fontSize='md'
              textAlign='right'
              alignSelf='self-end'
              maxWidth={500}
            >
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
            <img src='map.jpg' width='100%' />
          </Box>
        </TwoSideComponent>
        <TwoSideComponent>
          <Box borderRadius='45px' overflow='hidden'>
            <img src='map.jpg' width='100%' />
          </Box>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <DottedList>
              <Typography level='h2' fontSize='md' maxWidth={500}>
                EOS Data Analytics is one of the leading global geospatial
                analytics providers on the market, partnering with governmental,
                commercial, and scientific organizations. EOSDA creates
                satellite-driven solutions for agriculture, forestry, and
                mining, while also actively exploring 22 more industries. The
                Company sees its mission as helping businesses around the world
                become more sustainable via innovative precision observation and
                data analytics tools.
              </Typography>
              <Typography level='h2' fontSize='md' maxWidth={500}>
                EOS Data Analytics is one of the leading global geospatial
                analytics providers on the market, partnering with governmental,
                commercial, and scientific organizations. EOSDA creates
                satellite-driven solutions for agriculture, forestry, and
                mining, while also actively exploring 22 more industries. The
                Company sees its mission as helping businesses around the world
                become more sustainable via innovative precision observation and
                data analytics tools.
              </Typography>
            </DottedList>
          </Box>
        </TwoSideComponent>
      </LandingBlock>

      {/* <LandingBlock containerSize='xl' header='HELLO' subHeader='AEEEEEE'>
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Stack
            direction='row'
            width='100%'
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            {[1, 2, 3].map((index) => (
              <Card size='lg' sx={{ width: '450px' }}>
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
          </Stack>
        </Box>
      </LandingBlock> */}

      <LandingBlock containerSize='xl' header='HELLO' subHeader='AEEEEEE'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            margin: 'auto',
            width: '100%',

            flexWrap: 'wrap',

            gap: 4,
            mt: '10rem',
          }}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <BorderWithCornerCircles key={index}>
              <Card
                variant='plain'
              
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
            </BorderWithCornerCircles>
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

interface DottedListProps {
  children: React.ReactNode[]
}
const DottedList: React.FC<DottedListProps> = ({ children }) => {
  return (
    <Stack gap={2}>
      {children.map((e, index) => (
        <Box key={index}
          sx={{
            position: 'relative',
            paddingLeft: '2rem',
            '& :before': {
              top: '24px',
              left: '4px',
              content: '""',
              position: 'absolute',
              transform: 'none',
              height: '80%',
              width: '2px',
              backgroundImage:
                'linear-gradient(180deg,#4ADE80 60%,transparent 0),linear-gradient(180deg,#4ADE80 60%,transparent 0)',
              backgroundPosition: '0',
              backgroundRepeat: 'repeat-y,repeat-y',
              backgroundSize: '2px 8px,2px 8px',
            },
          }}
        >
          {e}
          <Box
            sx={{
              position: 'absolute',
              content: '""',
              width: '10px',
              height: '10px',
              left: '0',
              top: '0',
              transform: 'translateY(.4em)',
              borderRadius: '16px',
              backgroundColor: '#4ADE80',
            }}
          />
        </Box>
      ))}
    </Stack>
  )
}

interface TwoSideComponentProps {
  children: React.ReactNode[]
}
const TwoSideComponent: React.FC<TwoSideComponentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Box sx={{ flex: 1 }}> {children[0]}</Box>
      <Box sx={{ flex: 1 }}> {children[1]}</Box>
    </Box>
  )
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
