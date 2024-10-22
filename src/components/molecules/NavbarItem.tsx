import { DomainHashmap } from '@/config/menu';
import { Box } from '@mui/material';
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
  return (
    <Box>
        <Box sx={{
          bgcolor : navbarActive ? 'tertiary.main' : '',
          borderTopLeftRadius : 8,
          borderTopRightRadius : 8,
          height : '3em',
          padding : '1em',
          mt : '1em',
        }}>
          <Label color={navbarActive ? '' : 'white'} size={18} variant={navbarActive ? LabelVariantEnum.H4 : LabelVariantEnum.H6} weight={FontWeightEnum.BOLD}>{domainName}</Label>
        </Box>
      </Box>
  );
};

export default NavbarItem;