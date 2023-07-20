import { Flex, Center, Box, Image, Text } from "@chakra-ui/react";
import Header from "./components/header";
import NextBtn from "./components/nextBtn";
import Service from "./components/service";
import Project from "./components/project";
import projects from "@/libs/projects";
import Link from "next/link";
import ViewMore from "./components/ViewMore";
import { useEffect, useState } from "react";

export default function Home() {

  const [news,setNews] = useState([])

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const responce = await fetch(`./../news.json`)
  //     const data = await responce.json()
  //     setNews(data)
  //   }
  //   fetchNews()
  // },[])

  console.log(news);
  

  return (
    <>
      <Flex flexFlow={"column"} overflow={"hidden"}>

        <Center w={'100vw'} h={'100vh'} bgImage={'images/fv_img.jpeg'} bgPosition={'center'} bgSize={'cover'}>
          <Header />
          <Image src={'images/logo.png'} alt='vogaroロゴ' />
          <NextBtn text={"Prev"} left={"40px"} right={""} rotate={""} imgleft={""} imgright={"87.5%"} />
          <NextBtn text={"Next"} left={""} right={"40px"} rotate={"rotateY(180deg)"} imgleft={"87.5%"} imgright={""} />
        </Center>

        <Center w={"100vw"} h={"1051.3px"}  position="relative">
          <Flex width={"60%"} alignItems={"center"}>
            <Flex color={"white"} flexFlow={"column"} position={"absolute"} zIndex={"1"} left="50%">
              <Text as={"p"} fontSize={"14px"} color={"#8c9396"} _before={{position:"absolute", top:"10px",content:'""', left:"-155px",width:"140px",height:"1px",background:"#8c9396"}}>Who We Are</Text>
              <Text as={"h2"} fontSize="26px" marginTop={"75px"}>クライアントの真の課題解決を支援する<br />マーケティング/クリエイティブエージェンシー</Text>
              <Text as={"p"} marginTop="38px" marginBottom={ "55px"} fontSize={"16px"}>Vogaroは“ビジネス課題を解決する”ことをミッションとして、<br />マーケティングとクリエイティブの両軸において、<br />戦略立案から施策実行までを一気通貫で支援する会社です。</Text>
              <Link href={"#"} passHref >
                <Center as={"button"} justifyContent={"space-evenly"} w="272px" h="67px" bgColor={"white"} color={"black"} fontSize="14px">
                  <Text>ViewMore</Text>
                  <Image src={"images/nextArrowB.svg"} transform={"rotateY(180deg)"} w={""} alt="矢印の画像" />
                </Center>
              </Link>
            </Flex>
            <Image src={"images/WhoImg.png"} zIndex={"0"} top={"253px"} w={"510px"} h={"612px"} alt={""} />
          </Flex>
          <Image src={"images/WhoWeare.png"} alt={""} zIndex={"-1"} width={"auto"} position={"absolute"} top={"100px"} left={"500px"}/>
          <Box w={{ base:'100vw', md:'calc( 100vw - 153px )'}} zIndex={"-2"} h={"100%"} position={'absolute'} right="0px" bgColor={"#19282d"}></Box>
        </Center>

        <Center h={"1247px"} flexFlow={"column"} gap={"99px"} position={"relative"} paddingTop={"140px"}>
          <Flex flexFlow={"column"} gap={"32px"} width={"1160px"}>
            <Text as={"p"} fontSize={"14px"} color={"#8c9396"} w={"69px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"Services"', left:"84px",width:"69px",height:"1px"}}></Text>
            <Text fontSize={"26px"}>解決課題や目指すゴールに合わせたベストチームでプロジェクトを推進</Text>
          </Flex>
          <Flex alignItems={{base:"",md:"center"}} justifyContent={{base:"",md:"center"}} gap={"10px"} overflowX={"scroll"} w={"100vw"}>
            <Service btnType="border" image={"images/service1.jpg"} />
            <Service btnType="border" image={"images/service2.jpg"} />
            <Service btnType="border" image={"images/service3.jpg"} />
          </Flex>
          <Text as={"h3"} fontSize={"300px"} position={"absolute"} zIndex={"-1"} top={"0"} left={"40px"} color={"#f1f5f5"}>Services</Text>
          <Box w={"100vw"} height={"640px"} position={"absolute"} zIndex={"-1"} bottom={"0"} bgColor={"#f1f5f5"} />
        </Center>

        <Center w={"100vw"} h={{base:"",md:"1712px"}} position={"relative"} bgColor={"#19282d"} flexFlow={"column"}>
          <Flex flexFlow={"column"} gap={"32px"} width={{base:"",md:"1160px"}} margin={{base:"220px 0 56px",md:""}} zIndex={"2"}>
            <Text as={"p"} fontSize={"14px"} color={"#8c9396"} w={"69px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"Projects"', left:"84px",width:"69px",height:"1px"}}></Text>
            <Text fontSize={"26px"} color={"#fff"}>プロジェクト紹介</Text>
          </Flex>
          <Text as={"h3"} fontSize={{base:"200px",md:"300px"}} position={"absolute"} top={"0"} left={"40px"} color={"#27373d"}>Projects</Text>
          <Flex w={"100vw"} h={{base:"3886px",md:'calc( 100vw / 2 )'}} margin={"100px 0 80px"} flexWrap={"wrap"}>
            {projects.Arrays.map((e,i) => {
              if (i == 0) {
                return(
                  <Project key={i} image={e.image} width={{base:"100vw",md:"calc(100vw / 2)"}} height={{base:"100vw",md:"100%"}} companyName={e.companyName} projectName={e.projectName} date={e.date} category={e.category} />
                )
              }
            })}
            <Flex w={"50%"} h={"100%"} flexFlow={"column"} flexWrap={"wrap"}>
              <Flex w={"100%"} h={{base:"",md:"50%"}}flexWrap={"wrap"}>
                {projects.Arrays.map((e,i) => {
                  if (i >= 1 && i <= 2 ) {
                    return(
                      <Project key={i} image={e.image} width={{base:"100vw",md:"calc(100vw / 4)"}} height={{base:"100vw",md:"100%"}} companyName={e.companyName} projectName={e.projectName} date={e.date} category={e.category} />
                    )
                  }
                })}
                {/* <Project image="images/fv_img.jpeg" width="calc(100vw / 4)" height={"100%"} />
                <Project image="images/fv_img.jpeg" width="calc(100vw / 4)" height={"100%"} /> */}
              </Flex>
              <Flex w={"100%"} h={{base:"",md:"50%"}}flexWrap={"wrap"}>
              {projects.Arrays.map((e,i) => {
                  if ( i >= 3 && i <= 4) {
                    return(
                      <Project key={i} image={e.image} width={{base:"100vw",md:"calc(100vw / 4)"}} height={{base:"100vw",md:"100%"}} companyName={e.companyName} projectName={e.projectName} date={e.date} category={e.category} />
                    )
                  }
                })}
                {/* <Project image="images/fv_img.jpeg" width="calc(100vw / 4)" height={"100%"} />
                <Project image="images/fv_img.jpeg" width="calc(100vw / 4)" height={"100%"} /> */}
              </Flex>
            </Flex>
          </Flex>
          <ViewMore text="View All" width='272px' type="bgc" />
        </Center>

        <Center w={"100vw"} h={""} position={"relative"} padding={"180px 0"}>
          <Flex alignItems={{base:"center",md:"start"}} justifyContent={{base:"center",md:"center"}} flexFlow={{base:"column",md:"row"}} width={{base:"100vw",md:"1160px"}} gap={"95px"} zIndex={"2"}>
            <Flex flexFlow={"column"} gap="99px">
              <Flex flexFlow={"column"} gap={"32px"}>
                <Text as={"p"} fontSize={"14px"} color={"#8c9396"} w={"69px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"News"', left:"84px",width:"69px",height:"1px"}}></Text>
                <Text fontSize={"26px"}>お知らせ</Text>
              </Flex>
              <ViewMore text="View All" width='272px' type="bgcr" />
            </Flex>

            <Flex flexFlow={"column"} >
              <Center w={{base:"80vw",md:"800px"}} h={"142px"} borderTop={"1px solid #dddddd"} gap={"58px"} borderBottom={"1px solid #dddddd"}>
                <Center flexFlow={"column"} gap={"12px"} lineHeight={"24px"} w={"61px"}>
                  <Text as={"p"} fontSize={"12px"}>February</Text>
                  <Text as={"p"} fontSize={"50px"} marginBottom={"5px"}>22</Text>
                  <Text as={"p"} fontSize={"18px"}>2021</Text>
                </Center>
                <Image src={"./images/newsTest.jpg"} alt={""} />
                <Text as={"p"} fontSize={"16px"}>毎日放送（MBS）グループとの戦略的資本提携を締結、次世代ビジネス/ブランド創出に向けた推進を加速</Text>
              </Center>
              <Center w={{base:"80vw",md:"800px"}} h={"142px"} borderTop={"1px solid #dddddd"} gap={"58px"} borderBottom={"1px solid #dddddd"}>
                <Center flexFlow={"column"} gap={"12px"} lineHeight={"24px"}w={"61px"}>
                  <Text as={"p"} fontSize={"12px"}>May</Text>
                  <Text as={"p"} fontSize={"50px"} marginBottom={"5px"}>01</Text>
                  <Text as={"p"} fontSize={"18px"}>2020</Text>
                </Center>
                <Image src={"./images/newsTest.jpg"} alt={""} />
                <Text as={"p"} fontSize={"16px"} w={"528px"}>在宅勤務（フルリモートワーク）の実施延長のお知らせ</Text>
              </Center>
              <Center w={{base:"80vw",md:"800px"}} h={"142px"} borderTop={"1px solid #dddddd"} gap={"58px"} borderBottom={"1px solid #dddddd"}>
                <Center flexFlow={"column"} gap={"12px"} lineHeight={"24px"} w={"61px"}>
                  <Text as={"p"} fontSize={"12px"}>April</Text>
                  <Text as={"p"} fontSize={"50px"} marginBottom={"5px"}>09</Text>
                  <Text as={"p"} fontSize={"18px"}>2020</Text>
                </Center>
                <Image src={"./images/newsTest.jpg"} alt={""} />
                <Text as={"p"} fontSize={"16px"} w={"528px"}>緊急事態宣言発令に伴う在宅勤務実施に関するお知らせ</Text>
              </Center>
            </Flex>
          </Flex>
        </Center>

        <Flex justifyContent={"center"} w={"100vw"} h={{base:"", md:"1068px"}} bgImage={{base:"url(images/company.jpg)",md:""}} padding={{base:"240px 0", md:"0"}} bgSize={"cover"} bgPosition={"center"}>
          <Flex justifyContent={"center"} position={"absolute"}left={0} w={{base:"100vw",md:"1770px"}} h={{base:"", md:"808px"}} bgImage={"url(images/company.jpg)"}></Flex>
          <Flex justifyContent={{base:"", md:"space-between"}} flexFlow={{base:"column",md:"row"}} paddingTop={{base:"0px",md:"180px"}} alignItems={{base:"center", md:"start"}} width={"1160px"} zIndex={"2"}>
            <Flex flexFlow={"column"} gap="99px">
              <Flex flexFlow={"column"} gap={"32px"}>
                <Text as={"p"} fontSize={"14px"} color={"#8c9396"} w={"69px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"Company"', left:"84px",width:"69px",height:"1px"}}></Text>
                <Text fontSize={"26px"} color={"#fff"}>Vogaroについて</Text>
              </Flex>
              <ViewMore text="View All" width='272px' type="bgc" />
            </Flex>
            <Flex flexFlow={"column"}>
              <Flex justifyContent={"space-between"} alignItems={"center"} w={"580px"} borderTop={"1px solid #dddddd"} borderBottom={"1px solid #dddddd"} padding={"30px"} color={"#fff"}>
                <Flex flexFlow={"column"} gap={"20px"}>
                  <Text as={"p"} fontSize={"13px"} color={"#8c9396"} w={"8px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"01"', left:"13px",width:"69px",height:"1px"}}></Text>
                  <Text as={"p"} fontSize={"18px"}>会社概要</Text>
                </Flex>
                <Image src="images/viewmoreArrow.svg" alt="" />
              </Flex>
              <Flex justifyContent={"space-between"} alignItems={"center"} w={"580px"} borderTop={"1px solid #dddddd"} borderBottom={"1px solid #dddddd"} padding={"30px"} color={"#fff"}>
                <Flex flexFlow={"column"} gap={"20px"}>
                  <Text as={"p"} fontSize={"13px"} color={"#8c9396"} w={"8px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"02"', left:"13px",width:"69px",height:"1px"}}></Text>
                  <Text as={"p"} fontSize={"18px"}>沿革</Text>
                </Flex>
                <Image src="images/viewmoreArrow.svg" alt="" />
              </Flex>
              <Flex justifyContent={"space-between"} alignItems={"center"} w={"580px"} borderTop={"1px solid #dddddd"} borderBottom={"1px solid #dddddd"} padding={"30px"} color={"#fff"}>
                <Flex flexFlow={"column"} gap={"20px"}>
                  <Text as={"p"} fontSize={"13px"} color={"#8c9396"} w={"8px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"03"', left:"13px",width:"69px",height:"1px"}}></Text>
                  <Text as={"p"} fontSize={"18px"}>オフィス</Text>
                </Flex>
                <Image src="images/viewmoreArrow.svg" alt="" />
              </Flex>
              <Flex justifyContent={"space-between"} alignItems={"center"} w={"580px"} borderTop={"1px solid #dddddd"} borderBottom={"1px solid #dddddd"} padding={"30px"} color={"#fff"}>
                <Flex flexFlow={"column"} gap={"20px"}>
                  <Text as={"p"} fontSize={"13px"} color={"#8c9396"} w={"8px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"04"', left:"13px",width:"69px",height:"1px"}}></Text>
                  <Text as={"p"} fontSize={"18px"}>アクセス</Text>
                </Flex>
                <Image src="images/viewmoreArrow.svg" alt="" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"center"} w={"100vw"} h={"808px"} marginBottom={"200px"}>
          <Flex justifyContent={"center"} position={"absolute"} right={0} w={"1770px"} h={"808px"} bgColor={"#f1f5f5"}></Flex>
          <Flex justifyContent={"space-between"}  alignItems={"start"} width={"1160px"} zIndex={"2"}gap={"60px"}>
            <Flex flexFlow={"column"} gap="99px">
              <Flex flexFlow={"column"} gap={"32px"}>
                <Text as={"p"} fontSize={"14px"} color={"#8c9396"} w={"69px"} height={"1px"} bgColor={"#8c9396"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:"-10px",content:'"Reruit"', left:"84px",width:"69px",height:"1px"}}></Text>
                <Text fontSize={"26px"}>採用情報</Text>
              </Flex>
              <Image src={"./images/recruitImg.png"} alt={""}></Image>
              <Text as={"p"} fontSize={"26px"}>この文章はダミーテキストです。<br />リード文が入ります</Text>
              <ViewMore text="View All" width='272px' type="bgcr" />
            </Flex>

            <Flex position={"relative"} height={"503px"}>
              <Flex flexFlow={"column"} transform={"translateY(-160px)"} alignItems={"end"} gap={"30px"}>
                <Flex alignItems={"flex-end"} gap={"30px"}>
                  <Image src={"./images/reqruitImg1.jpg"} alt={""}  />
                  <Image src={"./images/reqruitImg2.jpg"} alt={""}  />
                </Flex>
                <Image src={"./images/reqruitImg3.jpg"} alt={""}  />
              </Flex>
            </Flex>
          </Flex>
        </Flex>  

        <Flex alignItems={"center"} justifyContent={"center"} w={"100vw"} h={"640px"} bgImage={"url(./images/contactImg.jpg)"}>
          <Flex justifyContent={{base:"center",md:"space-between"}} alignItems={{base:"center",md:"start"}} flexFlow={{base:"column", md:"row"}} width={"1160px"} flexWrap={"wrap"} zIndex={"2"} gap={"60px"}>
            <Flex flexFlow={"column"} gap={"32px"}>
              <Text as={"p"} fontSize={{base:"32px",md:"14px"}} color={"#b0c2e3"} w={"69px"} height={"1px"} bgColor={"#b0c2e3"} transform={"translateY(10px)"} position={"relative"}  _before={{position:"absolute", top:{base:"-24px",md:"-10px"},content:'"Reqruit"', left:"84px",width:{base:"100px",md:"69px"},height:"1px"}}></Text>
              <Text fontSize={{base:"36px",md:"26px"}} color={"#fff"}>実績に関するお問い合わせ、<br />案件のご依頼やご相談はこちら</Text>
            </Flex>
            <Box w={"120px"} h={"120px"} position={"relative"} border={"1px solid #8c9396"} borderRadius={"999px"}>
              <Image src={"./images/arrow.svg"} alt={""} position={"absolute"} left={"50%"} top={"45%"}/>
            </Box>
          </Flex>
        </Flex>

        <Flex w={"100vw"} h={"340px"} alignItems={"center"} justifyContent={"space-between"} bgColor={"#19282d"} color={"#7d8588"} padding={"0px 60px"}>
          <Center gap={"40px"}>
            <Image src={"./images/logo.png"} w={"100px"} h={"129px"} alt={""} />
            <Flex flexFlow={"column"} gap={"32px"}>
              <Text as={"p"} fontSize={"13px"}>Vogaro株式会社（ヴォガロ株式会社）</Text>
              <Text as={"p"} fontSize={"12px"}>〒553-0003<br/>大阪府大阪市福島区福島1-1-12 堂島リバーフォーラム3F<br/>TEL： 06-6136-4035 / FA</Text>
            </Flex>
          </Center>
          <Flex flexFlow={"column"} alignItems={"flex-end"} gap={"56px"}>
            <Center gap={"32px"}>
              <Text>プライバシーポリシー</Text>
              <Text>アクセス</Text>
              <Image src={"./images/fb_icon.png"} alt={""} w={"32px"} h={"32px"} />
            </Center>
            <Text as={"p"}>© Vogaro inc. All Rights Reserved.</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
