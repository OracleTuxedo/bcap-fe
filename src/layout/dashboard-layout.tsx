import { Navbar, Sidebar } from "@/components/organism";
import { domainMenu } from "@/config/menu";
import { Box } from "@mui/material"
import React, { ReactNode } from "react";

export interface DashboardLayoutProps {
    page : string;
    children : ReactNode;
}

const DashboardLayout = ({page, children} : DashboardLayoutProps) => {
    return (
        <Box sx={{}}>
            <Navbar data={domainMenu} page={page} />
            <Box sx={{
                display : 'flex',
                flexDirection : 'row',
            }}>
                <Sidebar />
                {children}
            </Box>
        </Box>
    )
}

export default DashboardLayout;