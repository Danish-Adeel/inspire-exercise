
import { Container, Heading } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react';
import List from '../components/list/List'



const Home = () => {
    const [appState, setAppState] = useState<{ repos: any[] | null }>({ repos: null })

    useEffect(() => {
        const apiURL = 'https://inspirehep.net/api/literature'
        fetch(apiURL)
            .then((res) => res.json())
            .then((repos) => { setAppState({ repos: repos.hits.hits }) })
    }, [setAppState])
    console.log(appState)

    return (

        <Container py='10' maxWidth='3xl'>
            <Heading as="h2" size="3xl" textAlign='center' mb='8' >
                Total Items: {appState.repos?.length}
            </Heading>

            <List repos={appState.repos} />


        </Container>
    )
}

export default Home
