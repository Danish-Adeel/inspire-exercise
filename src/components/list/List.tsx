import { Stack } from '@chakra-ui/react';
import React from 'react'
import ListItemView from "../listitem/ListItemView";

const List = (props: any) => {
    const { repos } = props;

    if (!repos || repos.length === 0) return <p>No items Sorry</p>

    return (
        <Stack spacing='5'>
            {repos.map((repo: any) => <ListItemView key={repo.id} repo={repo} />)}
        </Stack>
    )
}

export default List;