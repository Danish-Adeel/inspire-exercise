
import { Container, Heading } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react';



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
            <Heading as="h2" size="3xl" >
                Total Items: {appState.repos?.length}
            </Heading>



        </Container>
    )
}

export default Home
