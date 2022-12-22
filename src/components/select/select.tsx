import { Box, FormLabel, Select } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  options: Array<{ value: string; label: string }>;
} & Partial<
  ReturnType<UseFormRegister<Record<string, unknown>>>
>;

export const SelectInput = ({
  options,
  ...rest
}: Props) => {
  return (
    <Box>
      <FormLabel>Status</FormLabel>
      <Select {...rest} name="status">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};
