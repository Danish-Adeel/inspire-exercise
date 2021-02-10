import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";

type Props = {
    repo: any
    flag?: boolean
}

const ListItemView: React.FC<Props> = ({ repo, flag = true }) => {

    return (
        <Flex padding='5' direction='column' as={Link} to={`/item/${repo.id}`} bg='white'>
            <Heading color='blue.500' as='h4' size='sm' textAlign='center' >
                {repo.metadata.titles[0].title}
            </Heading>
            <Text noOfLines={flag ? 2 : 20}>
                {repo.metadata.abstracts?.[0].value}
            </Text>
        </Flex>
    )
}

export default ListItemView
