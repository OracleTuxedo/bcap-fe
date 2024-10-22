import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';

type DataTableColumns<Entry> = {
  title: string;
  field: keyof Entry;
  render?: ({ entry }: { entry: Entry }) => JSX.Element;
  className?: string;
};

export type DataTableProps<Entry, T = void> = {
  data: Entry[];
  columns: DataTableColumns<Entry>[];
  Enum?: T;
};

export const DataTable = <Entry, T extends object | string | number>({
  data,
  columns,
}: // Enum
DataTableProps<Entry, T>) => {
  if (!data && !columns) return '';

  return (
    <Box
      sx={{
        paddingTop: '20px',
        display: 'flex',
        width: '100vw',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100vw',
          overflow: 'auto',
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: 'secondary.main',
                }}
              >
                {columns.map((column, index) => (
                  <TableCell
                    key={column.title + index}
                    className={column.className}
                    width={'128px'}
                    sx={{
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '16px',
                      fontColor: '#000000',
                      color: '#1D192B',
                    }}
                  >
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((entry, entryIndex) => {
                console.log(entry);
                return (
                  <>
                    <TableRow
                      key={entryIndex}
                      sx={{
                        '&:nth-of-type(even)': {
                          backgroundColor: 'rgba(226, 227, 221, 40%)',
                        },
                      }}
                    >
                      {columns.map(({ field, render }, columnIndex) => {
                        console.log(field);
                        return (
                          <TableCell key={columnIndex}>
                            {render ? (
                              render({ entry })
                            ) : (
                              <OverflowTip text={`${entry[field] ?? ''}`} />
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

type OverflowTipProps = {
  text: string;
};

const OverflowTip = ({ text }: OverflowTipProps) => {
  const [isOverflowed, setIsOverflow] = React.useState<boolean | undefined>(
    false,
  );
  const textElementRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (
      textElementRef.current?.scrollWidth &&
      textElementRef.current?.clientWidth
    )
      setIsOverflow(
        textElementRef.current.scrollWidth > textElementRef.current.clientWidth,
      );
  }, []);

  return (
    <Tooltip title={text} disableHoverListener={!isOverflowed}>
      <Box
        ref={textElementRef}
        sx={{
          fontWeight: 400,
          borderBottomColor: 'rgba(226, 227, 221, 1)',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {text}
      </Box>
    </Tooltip>
  );
};
