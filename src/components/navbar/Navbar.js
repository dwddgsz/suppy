import React from 'react'
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';
import history from '../../history/init';
import firebase from '../../firebase/init'


const NavbarWrapper = styled.div`
background-color:var(--blue);
.navbar {
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:1440px;
    margin:0 auto;
    padding:20px 10px;
    &__title {
        display:flex;
        flex-direction:column;
        align-items:center;
        color: var(--white);
        text-shadow: 1px 1px 2px rgba(0,0,0,.4);
        transition:.3s opacity;
        &:hover,&:focus {
            opacity:.6;
        }
    }
    &__icon {
        font-size:25px;
        @media screen and (min-width:600px) {
            font-size:27px;
        }
    }
    &__title-text {
        font-size:1.6rem;
        letter-spacing:1px;
        font-weight:600;
        @media screen and (min-width:600px) {
            font-size:2rem;
        }
    } 
    &__items {
        display:flex;
        font-size:1.2rem;
        text-transform:capitalize;
        text-shadow: 1px 1px 2px rgba(0,0,0,.4);
        @media screen and (min-width:600px) {
            font-size:1.6rem;
        }
    }
    &__item {
        &:not(:first-child) {
            margin-left:12px;
            @media screen and (min-width:600px) {
            margin-left:20px;
        }
        }
    }
    &__link {
        color: var(--white);
        font-weight:600;
        transition:opacity .3s;
        &:hover,&:focus {
            opacity:.6;
        }
    }
    &__item--sign-out {
            color: var(--white);
            font-weight:600;
            transition:opacity .3s;
            cursor:pointer;
            &:hover,&:focus {
            opacity:.6;
        }
        }
}
`

const Navbar = ({isUserSignedIn}) => {

    const handleSignOut = () => {
        firebase
        .auth()
        .signOut()
        .then(()=>{
            history.push('/sign-in')
        })
    }

    const checkForLinks = () => {
        if (isUserSignedIn) {
            return (
                <>
                <li className="navbar__item"><NavLink  className="navbar__link" to="/">explore</NavLink></li>
                <li className="navbar__item"><NavLink  className="navbar__link" to="/my-list">my list</NavLink></li>
                <li className="navbar__item"><NavLink  className="navbar__link" to="/create">create</NavLink></li>
                <li className="navbar__item navbar__item--sign-out" onClick={handleSignOut}>sign out</li>
                </>
            )
        } else {
            return (
                <>
                <li className="navbar__item"><NavLink className="navbar__link" to="/explore">explore</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to="/sign-in">sign in</NavLink></li>
                </>
            )
        }
    }

    return (
        <NavbarWrapper>
            <nav className="navbar">
            <h1>
                <Link className="navbar__title" to="/">
            <span className="fas fa-hands-helping navbar__icon"></span>
            <span className="navbar__title-text">
                Suppy
            </span>
                </Link>
            </h1>
            <ul className="navbar__items">
                {/* <li className="navbar__item"><NavLink  className="navbar__link" to="/">explore</NavLink></li>
                <li className="navbar__item"><NavLink  className="navbar__link" to="/my-list">my list</NavLink></li>
                <li className="navbar__item"><NavLink  className="navbar__link" to="/create">create</NavLink></li>
                <li className="navbar__item navbar__item--sign-out" onClick={handleSignOut}>sign out</li> */}
                {checkForLinks()}
            </ul>
            {/* <ul className="navbar__items">
                <li className="navbar__item"><NavLink className="navbar__link--active className="navbar__link to="/explore">explore</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link--active className="navbar__link to="/sign-in">sign in</NavLink></li>
            </ul> */}
            </nav>
        </NavbarWrapper>
    )
}

export default Navbar
