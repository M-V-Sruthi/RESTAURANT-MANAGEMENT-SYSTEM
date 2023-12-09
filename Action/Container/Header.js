import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Typography } from '@mui/material'

const Header = () => {
  return (
    <div >
        
        <nav style={{
          background:'linear-gradient(rgba(8,8,8,0.3),rgba(8,8,8,0.3)), url("https://thumbs.dreamstime.com/b/wooden-table-food-top-view-cafe-102532611.jpg")',
          minHeight:'100vh',
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
        }}>
        <p style={{textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontFamily:'Cascadia Code',
        fontSize:'50px',
      position:'absolute',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)'}}>Fresh Flavours,Fresh Begininngs <br/>Join Us</p>
          <Button className="btn btn-primary mt-2 md-2" style={{
            textAlign:'center',
            position:'absolute',
            top:'68%',
            left:'47%',
            width:'10%',
            height:'40px',
            border:'none',

          }}
          color="primary"
          as={Link}
          to='/home'
          size="big" >Search Recipes</Button>
        </nav>
       
    </div>
  )
}

const mapStateToProps = state =>({
  count : state.orderreducer.length
})

export default connect(mapStateToProps)(Header);