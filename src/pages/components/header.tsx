import { Flex, Text, Box, Center } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const header = () => {
    return (
        <Center w={'100vw'} padding={'60px 0px'} position={'absolute'} top={'0'} color={'white'}>
            <Flex>
                <Flex as={'ul'} listStyleType={'none'} gap={'32px'} fontSize={'16px'}>
                    <Link href={'#'} passHref>
                        <Box as={'li'}>Who We Are</Box>
                    </Link>
                    <Link href={'#'} passHref>
                        <Box as={'li'}>Services</Box>
                    </Link>
                    <Link href={'#'} passHref>
                        <Box as={'li'}>Projects</Box>
                    </Link>
                    <Link href={'#'} passHref>
                        <Box as={'li'}>News</Box>
                    </Link>
                    <Link href={'#'} passHref>
                        <Box as={'li'}>Recruit</Box>
                    </Link>
                    <Link href={'#'} passHref>
                        <Box as={'li'}>Contact</Box>
                    </Link>
                </Flex>
            </Flex>
        </Center>
    )
}

export default header