import { DomainHashmap } from "@/config/menu";
import { NavbarItem } from "../molecules";
import { Box } from "@mui/material";
import Image from "next/image";

interface NavbarProps {
    data : DomainHashmap;
    page : string;
}

const Navbar = ({data, page} : NavbarProps) => {
    const domainName : string[] = Object.keys(data);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flex: 1,
                flexFlow: 'row',
                width: '100vw',
                height : '4em',
                borderBottom : 5,
                bgcolor : 'primary.main',
                borderColor : 'tertiary.main',
            }}
            key={'navbar-list'}
        >
            <Box
                sx={{
                    mx : '1em',
                    mt : '1em',
                    alignSelf : 'center'
                }}
            >
                <Image
                    src={'/assets/MAAS_logo.svg'}
                    alt="MAAS logo"
                    width={172}
                    height={23}
                />
            </Box>
            <Box sx={{
                position : 'relative',
                alignContent : 'end'
            }}>
                {
                    domainName.map((item, index) => (
                        <NavbarItem key={index} domainName={data[item].default} navbarActive={item == page ? true : false} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Navbar;