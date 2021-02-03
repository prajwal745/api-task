import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Loader from '../loaders/spinner';
import service from '../services/common.service';
function DashboardPage() {
      const [showLoader, setshowLoader] = useState(true);
      const [tableList, setTableList] = useState([]);
      useEffect(() => {
            service.getData()
            .then((res)=>{
                  setTableList(res.data);
                  setshowLoader(false);
            })
      });
      return(
            <div className='conatiner-fluid'>
                  {
                        showLoader ? 
                              <Loader/> :   
                   <Table striped bordered hover responsive >
                        <thead>
                              <tr>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">BODY</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                 tableList.map((user) => (
                                    <tr>
                                          <td>{user.title}</td>
                                          <td>{user.body}</td>
                                    </tr>
                                  ))
                             }
                        </tbody>
                        
                   </Table> 
                  
                  }
  
            </div>
      )
}

export default DashboardPage;