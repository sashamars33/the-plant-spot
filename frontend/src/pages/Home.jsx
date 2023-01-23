import {Link} from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Home = () => {
  return (
    <Paper sx={{bgcolor: 'background.default'}} style={{padding: '2%', height: '100vh'}} elevation={0} square>
      <Card sx={{bgcolor: 'background.paper'}}>
        <CardContent>
        <Card sx={{bgcolor: 'primary.light'}}>
            <CardContent>
            <h1 style={{textTransform: 'uppercase', padding: '0 0 2% 0'}}>Welcome to The Plant Spot!</h1>
            <p>A hub for all things botanical. From bryophytes to angiosperms and house plants to bonsai, find advice inspiration for any plant related interest.</p>
            <p>Share you plants and personal advice and create your own plant parent community!</p>
            </CardContent>
        </Card>

        <Button variant='contained' sx={{my: 2}}><Link to='/about' style={{color: '#f5f5f5', textDecoration: 'none'}}>What is The Plant Spot?</Link></Button>
        </CardContent>
      </Card>
        <Box className="">
            <h2>Popular Posts</h2>
        </Box>

    </Paper>
  )
}

export default Home