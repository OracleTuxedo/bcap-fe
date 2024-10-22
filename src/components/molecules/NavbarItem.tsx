import { DomainHashmap } from '@/config/menu';
import { Box, Button } from '@mui/material';
import { Label } from '../atoms';
import { FontWeightEnum, LabelVariantEnum } from '@/enums';

type NavbarMenuProps = {
  domainName: string;
  navbarActive?: boolean;
  extractedInfo?: DomainHashmap;
};

const NavbarItem = ({
  domainName,
  navbarActive = false,
} : NavbarMenuProps) => {
  console.log("domainName", domainName);
  return (
    <Button sx={{
      textTransform : 'none',
      bgcolor : navbarActive ? 'tertiary.main' : '',
      borderTopLeftRadius : 8,
      borderTopRightRadius : 8,
      borderBottomLeftRadius : 0,
      borderBottomRightRadius : 0,
    }}>
      <Box sx={{
        mx : '1em'
      }}>
        <Label
          color={navbarActive ? '' : 'white'}
          size={18}
          variant={LabelVariantEnum.H4}
          weight={navbarActive ? FontWeightEnum.BOLD : FontWeightEnum.NORMAL}
        >{domainName}</Label>
      </Box>
    </Button>
  );
};

export default NavbarItem;