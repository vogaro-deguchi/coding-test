import { Flex,Center,Image,Box,Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { transform } from 'typescript'

interface propsType {
    image:string
    width:any
    height:any
    companyName:string,
    projectName:string,
    date:number,
    category:string,
}

const project = (props:propsType) => {
    return (
        <Link href={"#"} passHref >
            <Flex padding={"32px"} position={"relative"} flexFlow={"column"} justifyContent={"space-between"} color={"#fff"} w={props.width} zIndex={"0"} h={props.height} bgImg={`url(${props.image})`} backgroundPosition={"center"} backgroundSize={"cover"}
                _before={{content:'""', position:"absolute", display:"block", top:0,left:0 , width:"100%", height:"100%", bgImage:"url(images/projectsShadow.png)", backgroundRepeat:"repeat-X"}}
                _after={{content:'""', position:"absolute", display:"block", top:0,left:0 , width:"100%", height:"100%", bgImage:"url(images/projectsShadow.png)", backgroundRepeat:"repeat-X", transform:"rotateX(180deg)"}}
                >
                <Flex flexFlow={"column"} gap={"8px"} zIndex={"1"}>
                    <Text as={"p"}>{props.companyName}</Text>
                    <Text as={"p"}>{props.projectName}</Text>
                </Flex>
                <Flex flexFlow={"column"} gap={"4px"} zIndex={"1"}>
                    <Text as={"p"} fontSize={"12px"}>DATE:{props.date}</Text>
                    <Text as={"p"} fontSize={"12px"}>CATEGORY:{props.category}</Text>
                </Flex>
            </Flex>
        </Link>
    )
}

export default project