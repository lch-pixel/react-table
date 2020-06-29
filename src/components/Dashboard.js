import React, {useState, useEffect} from 'react';
import Table from './Table';
import {getUser, getUserTitle} from '../apis/getUser';
import {getPost, getPostTitle} from '../apis/getPost';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const userTitles = getUserTitle();
    const userPosts = getPostTitle();

    useEffect(() => {
        getUser().then((res) => setUsers(res));
        getPost().then((res) => setPosts(res));
      }, []);

    return (
        <>
            <Table titles={userTitles}  contents={users} />
            <Table titles={userPosts}  contents={posts} />
        </>
    )
}

export default Dashboard;