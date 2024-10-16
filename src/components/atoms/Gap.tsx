import { Box } from "@mui/material";

export interface GapInterface {
    size?: number;
}

const Gap = ({
    size
} : GapInterface) => {
    return (
        <Box sx={{flex : size}} />
    )
}

export default Gap;