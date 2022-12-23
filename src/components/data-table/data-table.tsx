import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Entity } from '@/types';

import { Button } from '../button';
import { Loading } from '../loading';
import { useModal } from '../modal';

type DataTableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  render?: ({
    entry,
  }: {
    entry: Entry;
  }) => JSX.Element | null;
};

export type DataTableProps<Entry> = {
  isLoading: boolean;
  data?: Entry[];
  columns: DataTableColumn<Entry>[];
  deleteButton?: boolean;
  onConfirm: (data: Entry) => void;
  modal?: {
    title: string;
    body: ReactNode;
  };
};

export const DataTable = <Entry extends Entity>({
  data,
  isLoading,
  columns,
  deleteButton,
  onConfirm,
}: DataTableProps<Entry>) => {
  if (isLoading) {
    return <Loading />;
  }

  if (data?.length === 0) {
    return (
      <Center
        h="56"
        p="4"
        bg="gray.100"
        borderRadius="md"
      >
        No Data
      </Center>
    );
  }

  return (
    <Box
      h="full"
      rounded="md"
      borderWidth="1px"
      bg="whiteAlpha.400"
    >
      <Box overflow="auto">
        <Table variant="striped" w="full">
          <Thead>
            <Tr>
              {columns.map((column, index) => (
                <Th key={column.title + index}>
                  {column.title}
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {data?.map((entry, entryIndex) => (
              <TableRow
                key={entry.id + entryIndex}
                entry={entry}
                entryIndex={entryIndex}
                columns={columns}
                deleteButton={deleteButton}
                onConfirm={onConfirm}
              />
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

type TableRowProps<Entry> = {
  entry: Entry;
  entryIndex: number;
  deleteButton?: boolean;
  columns: DataTableColumn<Entry>[];
  onConfirm: (data: Entry) => void;
};
const TableRow = <Entry extends Entity>({
  entry,
  entryIndex,
  columns,
  deleteButton,
  onConfirm,
}: TableRowProps<Entry>) => {
  const { toggle, view } = useModal<Entry>({
    data: entry,
    onConfirm: (data) => {
      onConfirm(data);
    },
    title: 'Are you sure you want to delete this job?',
    body: 'This action cannot be undone.',
  });

  return (
    <Tr
      key={entry.id}
      data-testid={`table-row-${entryIndex}`}
    >
      {columns.map(
        ({ field, title, render }, columnIndex) => (
          <Td key={title + columnIndex}>
            <Text>
              {render
                ? render({ entry })
                : `${entry[field]}`}
            </Text>
          </Td>
        )
      )}
      {deleteButton && (
        <Td>
          <Button
            variant="ghost"
            onClick={toggle}
            icon={<DeleteIcon color={'red'} />}
          />
          {view}
        </Td>
      )}
    </Tr>
  );
};
