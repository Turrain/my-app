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
  ArrowForward,
  BookmarkAddOutlined,
  Check,
  ColorLensRounded,
  DarkMode,
  EmailOutlined,
  Face,
  FacebookOutlined,
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
  ListItemButton,
  ListItemDecorator,
  ListSubheader,
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
import { ColorPaletteProp, SxProps } from '@mui/joy/styles/types'
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
        p: 2.5,
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
   
    >
      <Box
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
                AGRO GIS:
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
                  Космические решения для Земных проблем
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
                Используя спутниковые данные и геоинформационные системы, AGRO
                GIS предлагает инновационные решения для сельского хозяйства.
              </Typography>
            </BorderWithCornerCircles>
            <BorderWithCornerCircles color='#4ADE80' variant='plain'>
              <Typography level='h2' fontSize='md' maxWidth={480}>
                Мощные аналитические возможности позволяют визуализировать
                пространственные данные, выявлять проблемные зоны, рассчитывать
                вегетационные индексы и строить прогнозные модели.
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
                  Войдите &nbsp;
                  <ReactTyped
                    strings={[
                      'для доступа к данным',
                      'для доступа к картам',
                      'для анализа',
                    ]}
                    typeSpeed={100}
                    loop
                  />
                  <br />
                  <Typography level='h4' fontSize='lg'>
                    Просто одно нажатие
                  </Typography>
                </Typography>
                <Button variant='plain'>
                  <Typography
                    sx={{ color: '#4ADE80' }}
                    level='h4'
                    fontSize='lg'
                  >
                    Войти &gt;
                  </Typography>
                </Button>
              </Box>
            </BorderWithCornerCircles>
          </Box>

          <CardLayers3d />
        </Box>
      </Box>

      <LandingBlock
        containerSize='xl'
        header='Цифровое управление сельским хозяйством'
        subHeader=''
      >
        <TwoSideComponent>
          <Box
            p={2}
            width='100%'
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              level='h2'
              color='primary'
              marginBottom={4}
              maxWidth={500}
              textAlign='right'
              alignSelf='self-end'
            >
              Эффективное решение для CХ предприятий
            </Typography>
            <Typography
              level='h4'
              fontSize='md'
              textAlign='right'
              alignSelf='self-end'
              maxWidth={500}
            >
              Наша информационная система позволяет осуществлять отслеживание
              производственных процессов, анализ данных и аналитику, оптимизацию
              ресурсов и затрат, а также повышение урожайности и рентабельности.
              Она предоставляет комплексное решение для эффективного управления
              сельскохозяйственными операциями, объединяя передовые технологии и
              инструменты на одной платформе.
            </Typography>
          </Box>
          <Box borderRadius='45px' overflow='hidden'>
            <img src='gis_4.jpg' width='100%' />
          </Box>
        </TwoSideComponent>
        {/* ---------------- */}
        <Divider sx={{ my: 4 }} />
        <TwoSideComponent>
          <Box borderRadius='45px' overflow='hidden'>
            <img src='gis_2.jpg' width='100%' />
          </Box>

          <DottedList>
            <Typography
              level='h2'
              color='primary'
              marginBottom={4}
              maxWidth={500}
            >
              Внедрение инновационных технологий
            </Typography>
            <Typography level='h4' fontSize='md' marginTop={1}>
              Мониторинг полей и состояния посевов: Отслеживание состояния
              почвы, влажности, температуры и других параметров с помощью
              датчиков и спутниковых снимков. Получение актуальных данных для
              принятия своевременных решений по внесению удобрений, защите
              растений и другим агротехническим мероприятиям.
            </Typography>
            <Typography level='h4' fontSize='md' marginTop={1}>
              Планирование и контроль агротехнических мероприятий: Составление
              детальных планов работ с учетом особенностей полей, погодных
              условий и наличия ресурсов. Контроль выполнения запланированных
              операций, таких как вспашка, посев, внесение удобрений,
              опрыскивание и сбор урожая. Отслеживание соблюдения
              технологических карт и нормативов.
            </Typography>
            <Typography level='h4' fontSize='md' marginTop={1}>
              Учёт и управление ресурсами: Ведение учета семян, удобрений,
              средств защиты растений, топлива, техники и другого оборудования.
              Оптимизация использования ресурсов на основе анализа данных,
              предотвращение перерасхода и потерь. Планирование закупок и
              поставок в соответствии с потребностями.
            </Typography>
            <Typography level='h4' fontSize='md' marginTop={1}>
              Интеграция с системами точного земледелия: Синхронизация данных с
              системами параллельного вождения, дифференциального внесения
              удобрений, картирования урожайности и другими технологиями точного
              земледелия. Обеспечение точной дозировки и равномерного
              распределения ресурсов на основе карт полей.
            </Typography>
          </DottedList>
        </TwoSideComponent>
      </LandingBlock>
    
      <LandingBlock containerSize='xl' header='СТАТИСТИКА' subHeader=''>
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
            <BorderWithCornerCircles key={index} variant='plain'>
              <Card
                variant='plain'
                sx={{
                  width: 300,
                  maxWidth: '100%',
                }}
              >
                <CardContent sx={{ alignItems: 'left', textAlign: 'left' }}>
                  <Typography level='title-lg'>USER BASE</Typography>
                  <Typography level='h1' sx={{ color: '#4ADE80' }}>
                    100$+
                  </Typography>
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
      <MarketingBlock containerSize="xl">
        <Typography level='h2'>Начните сейчас</Typography>
        <Typography sx={{ mt: 0.5, mb: 2 }}>
          Получите полный доступ
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
          <Button sx={{ minWidth: 120 }}>Войти</Button>
          <Button
            variant='plain'
            endDecorator={<ArrowForward />}
            sx={{
              '&:hover': { '--Button-gap': '0.625rem' },
              '& span': { transition: '0.15s' },
            }}
          >
            Свяжитесь с нами
          </Button>
        </Box>
      </MarketingBlock>




      <Sheet
      variant="plain"
     
      invertedColors
      sx={{
       
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
       
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookOutlined />
        </IconButton>
        <IconButton variant="plain">
          <EmailOutlined />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendOutlined />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Base UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
    
    </Box>
  )
}

interface MarketingBlockProps {
  children?: React.ReactNode[]
  blockSx?: SxProps
  imageUrl?: string
  containerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
}

const MarketingBlock: React.FC<MarketingBlockProps> = ({
  children,
  blockSx,
  imageUrl,
  containerSize = 'xl',
}) => {
  return (
    <Box
      sx={{
        minHeight: '20vh',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...blockSx,
      }}
    >
      <Container maxWidth={containerSize}>
        <Sheet
          variant='solid'
        
          invertedColors
          sx={{
            flexGrow: 1,
            display: 'flex',
            bgcolor: '#111',
            p: { xs: '36px', md: '70px' },
            pt: { xs: '24px', md: '60px' },
            borderRadius: 'lg',
            overflow: 'hidden',
            '& button': { borderRadius: 'xl' },
            border: "2px solid #4ADE80 "
          }}
        >
          <Box sx={{ zIndex: 1, position: 'relative' }}>{children}</Box>
        
        </Sheet>
      </Container>
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

interface TwoSideComponentProps {
  children: React.ReactNode[]
}

const TwoSideComponent: React.FC<TwoSideComponentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '2rem',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box sx={{ flex: 1 }}>{children[0]}</Box>
      <Box sx={{ flex: 1 }}>{children[1]}</Box>
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

interface DottedListProps {
  children?: React.ReactNode[]
}
const DottedList: React.FC<DottedListProps> = ({ children }) => {
  return (
    <Stack>
      {children?.map((element, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            paddingLeft: '2rem',
            '&:before': {
              content: '""',
              position: 'absolute',
              left: '4px',
              top: '24px',
              transform: 'none',
              width: '5px',
              height: '70%',
              backgroundImage:
                'linear-gradient(180deg,#4ADE80 60%,transparent 0),linear-gradient(180deg,#4ADE80 60%,transparent 0)',
              backgroundRepeat: 'repeat-y,repeat-y',
              backgroundSize: '2px 8px,2px 8px',
            },
          }}
        >
          {element}
          <span
            style={{
              position: 'absolute',
              content: '""',
              width: '10px',
              height: '10px',
              left: '0',
              top: '0',
              transform: 'translateY(.4rem)',
              backgroundColor: '#4ADE80',
              borderRadius: '45px',
            }}
          ></span>
        </Box>
      ))}
    </Stack>
  )
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
