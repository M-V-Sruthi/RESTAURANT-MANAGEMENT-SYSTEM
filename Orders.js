import React from 'react'
import {connect} from 'react-redux'
import Header from './Container/Header'
import { Link } from 'react-router-dom'

const Orders = ({list}) => {
  return (
    <div >
       <nav style={{backgroundColor:"#4d004d"}} className='navbar navbar-light bg-violet' >
            <a className='navbar-brand' style={{color:'white',marginLeft:'650px'}}>YOUR ORDERS</a>
            <button className='btn btn-primary'>
                <Link to='/' style={{color:'white',textDecoration:'none'}}>Home</Link> 
            </button>
        </nav>
      {/* <Header /> */}
        <center>
                {list.length > 0 ?
                <div className='container'>
                    <div className='row'>
                        {list.map((item) => (
                            <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                                <div className='card' style={{width:"18rem",padding:"3px"}}>
                                <img src={item.url} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <div className='card-text'>Billing Amount Rs.{item.prize}</div>
                                    <p>Table Number : {item.table_number}</p>
                                    </div>
                                </div>

                                
                            </div>

                        ))}
                    </div>
                </div>
                :
                <div className='h4'>
                  NO  order placed yet

            </div>
              }
              </center>
    </div>
  )
}

const mapStateToProps = state => ({
       list : state.orderreducer
})

export default connect(mapStateToProps)(Orders)