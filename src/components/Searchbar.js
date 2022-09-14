import React from 'react'
import { useSearchParams } from 'react-router-dom';

import useNavigateSearch from '../useNavigateSearch'
import PropTypes from 'prop-types'

export default function Searchbar({ path = false, name }) {

    const navigateSearch = useNavigateSearch();
    const [searchParams] = useSearchParams();

    return (
        <input
            type="search"
            placeholder="Search"
            value={searchParams.get(name) || ""}
            onChange={(e) => {
                const value = e.target.value;
                navigateSearch({ path: path, key: name, value: value });
            }}
        />
    )
}

Searchbar.propTypes = {
    path: false || PropTypes.string,
    name: PropTypes.string.isRequired
}
