import React from 'react';
import Content from './Content';
import Header from './Header';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Content></Content>
        </div>
    );
};

export default Home;