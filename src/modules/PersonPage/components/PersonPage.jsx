import React from 'react';
import {Button} from "@mui/material";
import {usePerson} from "../store.jsx";

const PersonPage = () => {
    const {loading, error, person} = usePerson(
        (state) => ({
            loading: state.loading,
            error: state.loading,
            person: state.fetchPerson,
        })
    )
    console.log(person)
    return (
        <Button
            isLoading={loading}
            onClick={person}
        >
            {!error ? 'Get person' : {error}}
        </Button>

    );
};

export default PersonPage;
