import { Flex,Center,Image,Box,Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

interface propsType {
    image:string
}

const project = (props:propsType) => {
    return (
        <Flex  padding={"32px"} bgImg={`url(${props.image})`}>
            
        </Flex>
    )
}

export default project