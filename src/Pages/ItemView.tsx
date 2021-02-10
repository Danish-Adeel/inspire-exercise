import { Container, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ListItemView from '../components/listitem/ListItemView'

const ItemView = () => {
    const [repo, setRepo] = useState<any>()
    const { repoId } = useParams<{ repoId: string }>()
    useEffect(() => {
        fetch(`https://inspirehep.net/api/literature/${repoId}`)
            .then((res) => res.json())
            .then((repo) => { repo.id && setRepo(repo) })
    }, [setRepo, repoId])

    return (
        <Container py='10'>
            <Button mb='5' colorScheme='blue' as={Link} to={'/'}>
                Go Back
        </Button>
            {repo ? <ListItemView repo={repo} flag={false} /> : <Text>Sorry, Details Not available</Text>}
        </Container>
    )
}

export default ItemView