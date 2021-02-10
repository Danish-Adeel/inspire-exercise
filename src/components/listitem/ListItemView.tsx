import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";

type Props = {
    repo: any
}

const ListItemView: React.FC<Props> = ({ repo }) => {

    return (
        <Flex padding='5' >
            <Heading color='blue.500' as='h4' size='sm' textAlign='center' >
                {repo.metadata.titles[0].title}
            </Heading>
            <Text noOfLines={2}>
                {repo.metadata.abstracts?.[0].value}
            </Text>
        </Flex>
    )
}

export default ListItemView
