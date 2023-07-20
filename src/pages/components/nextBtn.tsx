import { Flex, Center, Text, Image } from '@chakra-ui/react'
import React from 'react'

interface propsType {
    text : string
    left : any
    right : any
    rotate : string
    imgleft : string
    imgright : string
}

const nextBtn = (props : propsType) => {
    return (
        <Center w={"125px"} height={"125px"} transform={"translate"} position={"absolute"} left={props.left} right={props.right} color={"white"}>
            <Center as={"button"} zIndex={"1"} transition={"0.25s"} w={"120px"} h={"120px"} border={"1px solid rgba(255, 255, 255, 0.5)"} borderRadius={"100px"}
                _hover={{border :"1px solid #fff", transform : "scale(1.05)"}}
                >
            </Center>
            <Text fontSize={"14px"} position={"absolute"} >{props.text}</Text>
            <Image src={"images/nextArrow.svg"} transform={props.rotate} alt={"やじるし"} position={"absolute"} left={props.imgleft} right={props.imgright} />
        </Center>
    )
}

export default nextBtn