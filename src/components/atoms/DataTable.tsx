import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


type DataTableProps<Entry> = {
  title: string;
  field: keyof Entry;
  render?: ({entry}: {entry: Entry}) => JSX.Element;
  className
}


const DataTable = () => {
  return (
    <Box>
      <Typography />
    </Box>
  );
};

export default DataTable;
