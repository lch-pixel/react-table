import React, {useState, useEffect} from 'react';
import Table from './Table';
import {getUser, getUserTitle} from '../apis/getUser';
import {getPost, getPostTitle} from '../apis/getPost';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUser().then((res) => setUsers(res));
        getPost().then((res) => setPosts(res));
      }, []);

    return (
        <>
            <Table titles={getUserTitle()}  contents={users} />
            <Table titles={getPostTitle()}  contents={posts} />
        </>
    )
}

export default Dashboard;