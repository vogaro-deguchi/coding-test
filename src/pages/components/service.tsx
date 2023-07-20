import { Center, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import ViewMore from './ViewMore'

interface propsType {
    btnType:string
    image:string
}

const service = (props:propsType) => {
    return (
        <Flex w={"470px"} h={"639px"} bgImage={`url(${(props.image)})`} alignItems={"center"} justifyContent={"space-between"}  padding={"80px 40px"} flexFlow={"column"} >
            <Center gap={"48px"} flexFlow={"column"} color={"#fff"}>
                <Text as={"h4"} fontSize={"26px"}>Webサイト制作</Text>
                <Text as={"h4"} fontSize={"15px"}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</Text>
            </Center>
            <ViewMore width='272px' type={props.btnType} />
        </Flex>
    )
}

export default service