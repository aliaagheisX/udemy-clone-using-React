import React from 'react'
import styles from './styles/SearchBar.module.css'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const goHome = (value) => {
        navigate(`/?filter=${value}`);
    };

    return (
        <form id="search" className={styles.searchForm}>
            <div className={styles.searchBar}>

                <button type="submit">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>

                <input
                    type="search"
                    name="search"
                    placeholder="Search for anything"
                    value={searchParams.get("filter") || ""}
                    onChange={(e) => {
                        let filter = e.target.value;
                        if (location.pathname === '/') {
                            if (filter) setSearchParams({ filter });
                            else setSearchParams({})
                        } else {
                            goHome(filter);
                        }
                    }}
                />
            </div>
        </form>
    )
}
