import React from 'react'
import Header from './Container/Header'
import Table from './Container/Table'
import Filter from './Container/Filter'
import Card from './Container/Card'
import { Link } from 'react-router-dom'



const Home = ({count}) => {
    return (
        <div style={{}}>
            {/* <Header /> */}
            <nav style={{backgroundColor:"#4d004d"}} className='navbar navbar-light bg-violet' >
            <img src='logo.png' height='50px' width='100px'></img>
            <h4 className='navbar-brand'style={{color:'white', alignContent:'left'}}><i>MS</i>  Restaurant</h4>
            <button className='btn btn-primary'>
                <Link to='/orders' style={{color:'white',textDecoration:'none'}}>Orders</Link> <span className='badge bg-secondary'>{count}</span>
            </button>
        </nav>
            <Table />
            <Filter />
            <Card />
            
        </div>
    )
}
const mapStateToProps = state =>({
    count : state.orderreducer.length
  })
export default Home