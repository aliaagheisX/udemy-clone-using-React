import React from 'react'
import Button from './utils/Button'
import { HoverCard } from './utils/Card'
import './styles/Navbar.css'


export default function Navbar() {
    return (
        <nav className="main-nav shadow">
            {/* <!-- logo --> */}
            <a href="/">
                <img alt="udemy-logo" src="./logo.svg" className="logo" width="100px" />
            </a>


            <Humberger />

            {/* <!-- navbar --> */}
            <div className="menu-content">
                <CategoriesNavBar />

                <SearchBar />

                <LinksList />

                <ButtonsList />
            </div>
        </nav>
    )


}

function Humberger() {
    return (
        <>
            <input type="checkbox" id="checkbox_toggle" className="hamburger-checkbox" />
            <label htmlFor="checkbox_toggle" className="material-symbols-outlined hamburger">menu</label>
        </>
    )
}

function SearchBar() {
    return (
        <form id="search">
            <div className="search-bar">

                <button type="submit">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
                <input id="search-bar" type="search" name="search" placeholder="Search for anything" />
            </div>
        </form>
    )
}


function ButtonsList() {
    return <ul className="btn-lists">
        <li>
            <Button href="/">
                Log in
            </Button>
        </li>
        <li>
            <Button color="black" href="/">
                Sign up
            </Button>
        </li>
        <li>
            <Button size="sm" href="/">
                <span className='material-symbols-outlined'>language</span>
            </Button>
        </li>
    </ul>
}

function LinksList() {
    return <ul className="link-lists">
        <HoverCard
            title={<a href="/">Udemy Business</a>}>
            <p>
                Get your team access to over 16,000 top Udemy courses, anytime, anywhere.
            </p>
            <Button href='/' color="black">Try Udemy Business</Button>
        </HoverCard>

        <HoverCard
            title={<a href="/">Teach on Udemy</a>}>
            <p>
                Turn what you know into an opportunity and reach millions around the world.
            </p>
            <Button href='/' color="black">Learn more</Button>
        </HoverCard>

        <HoverCard
            title={<a href="/" className="material-symbols-outlined">shopping_cart</a>}>
            <p>Your cart is empty.</p>
            <a href="/">Keep shopping</a>
        </HoverCard>

    </ul>
}

function CategoriesNavBar() {
    return (
        <HoverCard type='hoverNav' title={<a href="/">Categories</a>}>
            <ul>
                <li><a href="/">Development</a></li>
                <li><a href="/">Business</a></li>
                <li><a href="/">Finance & Accounting</a></li>
                <li><a href="/">IT & Software</a></li>
                <li><a href="/">Office Productivity</a></li>
                <li><a href="/">Personal Development</a></li>
                <li><a href="/">Desgin</a></li>
                <li><a href="/">Marketing</a></li>
                <li><a href="/">Lifestyle</a></li>
                <li><a href="/">Photography & Video</a></li>
                <li><a href="/">Health & Fitness</a></li>
                <li><a href="/">Music</a></li>
                <li><a href="/">Teaching & Academics</a></li>
            </ul>
        </HoverCard>


    )
}




