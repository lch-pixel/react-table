import React from 'react';
import Table from './Table';
import {getUser, getUserTitle} from '../apis/getUser';

function Dashboard() {
    return (
         <Table titles={getUserTitle()} contents={getUser()} />
      )
}

export default Dashboard;