import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper'
import logo from "../../logo.svg"
import { Button, FormControlLabel, List, ListItem, Switch } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/actions'
import { faBars, faHome, faImages, faNewspaper, faTasks, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal'

const menus = [
    { to: "home", title: "Home", icon: faHome },
    { to: "users", title: "Users", icon: faUsers },
    { to: "todos", title: "Todos", icon: faTasks },
    { to: "albums", title: "Albums", icon: faVideo },
    { to: "photos", title: "Photos", icon: faImages },
    { to: "posts", title: "Posts", icon: faNewspaper },
]

const Dashboard = ({ children }) => {
    const dispatch = useDispatch();
    const { menu } = useParams();

    const show = useSelector(state => state.isSidebarShow);

    return (
        <DashboardWrapper>
            <div className={`sidebar ${show && "show" || "hide"}`}>
                <h1 className="side-title">Sidebar</h1>
                <hr className="bg-white" />
                <List component="nav">
                    {menus.map((v, i) => <li>
                        <Slide delay={i * 100}>
                            <Link key={v.to} to={`/dashboard/${v.to}`}
                                className={`${menu === v.to ? "active" : ""}`}>
                                <ListItem button >
                                    <FontAwesomeIcon icon={v.icon} className="me-2 icon" />
                                    <span className="dash-title">{v.title}</span>
                                </ListItem>
                            </Link>
                        </Slide>
                    </li>)}
                </List>
            </div>
            <div className="rightside">
                <header className="shadow">

                    <FormControlLabel
                        control={
                            <Switch
                                checked={!show}
                                onChange={() => toggleMenu(dispatch)}
                                color="primary"
                            />
                        }
                        label="Collapsed"
                    />

                    <img src={logo} className="logo" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper >
    )
}

export default Dashboard