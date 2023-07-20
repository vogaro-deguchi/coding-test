import React, { useEffect, useState } from 'react'
import { Center, Text, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'

interface propsType {
    width : string
    type : string
    text : string
}

const ViewMore = (props : propsType) => {

    const [btnType,setBtnType] = useState(props.type)
    const [bgc,setBgc] = useState("")
    const [border,setBorder] = useState("")
    const [color,setColor] = useState("")
    const [arrow,setArrow] = useState("")

    useEffect (() => {
        if (btnType == "bgc" ) {
            setBgc("#fff")
            setBorder("")
            setColor("#000")
            setArrow("./images/viewmoreArrowB.svg")
        } else if (btnType == "bgcr" ) {
            setBgc("#000")
            setBorder("")
            setColor("#fff")
            setArrow("./images/viewmoreArrow.svg")
        } else if (btnType == "border" ) {
            setBgc("")
            setBorder("1px solid #fff")
            setColor("#fff")
            setArrow("./images/viewmoreArrow.svg")
        }
    },[btnType])
    

    return (
        <Link href={"#"} passHref >
            <Center as={"button"} transition={"0.3s ease"} justifyContent={"space-evenly"} w={props.width} h="67px" bgColor={bgc} borderBottom={border} color={color} fontSize="14px"
                _hover={{bgColor:"#fff", color:"#000"}}
            >
                <Text>{props.text}</Text>
                <Image src={arrow} alt="矢印の画像" />
            </Center>
        </Link>
    )
}

ViewMore.defaultProps = {
    text : "View More"
}


export default ViewMore