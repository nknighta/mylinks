import Link from "next/link";
import { LinkOverlay } from "@chakra-ui/react";

export default function Links ({link , children}) {
    return(
        <>
            <a target={"_blank"}
                href={link}>
                {children}
            </a>
        </>
    )
}