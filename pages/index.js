import {Text, Box} from "@chakra-ui/react";
import Links from "../components/links";
import IndexStyle from "./index.module.sass"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <Box textAlign={'center'} p={20}>
                <Text fontSize={25}>Welcome to mysite!</Text>
                <Box p={20} className={IndexStyle.Main}>
                    <Text fontSize={30}>My links</Text>
                    <ul>
                        <li>
                            <Text className={IndexStyle.Text}>SNS</Text>
                            <ul>
                                <Links link={"https://twitter.com/ama_dev_1"}>
                                    twitter
                                </Links>
                            </ul>
                            <ul>
                                <Links link={"https://www.instagram.com/ama_p0627/"}>
                                    Instagram
                                </Links>
                            </ul>
                            <ul>
                                <Links link={"https://www.youtube.com/channel/UCpOb_WdV1ArLHp01KukQBQw"}>
                                    Youtube
                                </Links>
                            </ul>
                        </li>
                        <li>
                            <Text className={IndexStyle.Text}>Dev sites</Text>
                            <ul>
                                <Links link={"https://osdn.net/users/nknight/"}>
                                    OSDN
                                </Links>
                            </ul>
                            <ul>
                                <Links link={"https://github.com/NknightA/"}>
                                    GitHUb
                                </Links>
                            </ul>
                            <ul>
                                <Links link={"https://github.com/NknightA/"}>
                                    projectV - github
                                </Links>
                            </ul>
                            <ul>
                                <Links link={"https://osdn.net/projects/projectv"}>
                                    projectV - osdn
                                </Links>
                            </ul>
                        </li>
                    </ul>
                </Box>
            </Box>
        </>
    )
}
