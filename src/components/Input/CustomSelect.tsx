import { Box, FormLabel, Text } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';

const selectStyle = {
  control: (base: any) => ({
    ...base,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: '0.5px solid rgba(29, 29, 29, 0.5)',
    borderRadius: '8px',
    height: '3rem',
    fontSize: '1rem',
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    color: 'red',
  }),
  option: (styles: any) => {
    return {
      ...styles,
      color: 'black',
      textAlign: 'center',
      // backgroundColor: 'white',
      cursor: 'pointer',
      borderBottom: '0.5px solid rgba(29, 29, 29, 0.2)',
    };
  },
};

export type CustomSelectProps = {
  isSearchable: boolean;
  options: Array<{ label: string; value: string }>;
  onChange?: (event) => void;
  onClick?: () => void;
  styles?: any;
  placeholder?: string;
  name?: string;
  label?: string;
  value?: any;
  required?: boolean | true;
};
export default function CustomSelect(props: CustomSelectProps) {
  return (
    <Box>
      <FormLabel display={'flex'} fontWeight="700" fontSize={{ base: '14px', md: '16px' }}>
        <Text>{props.label}</Text>
      </FormLabel>
      <Select
        onChange={props.onChange}
        options={props.options}
        styles={props.styles ? props.styles : selectStyle}
        placeholder={props.placeholder}
        isSearchable={props.isSearchable}
        name={props.name}
        value={props.value}
      />
    </Box>
  );
}
export function CustomSelectWithLabel(props: CustomSelectProps) {
  return (
    <Box>
      <FormLabel display={'flex'} fontWeight="700" fontSize={{ base: '14px', md: '16px' }}>
        <Text>{props.label}</Text>
      </FormLabel>
      <Select
        onChange={(event) => props.onChange?.(event)}
        options={props.options}
        styles={props.styles ? props.styles : selectStyle}
        placeholder={props.placeholder}
        isSearchable={props.isSearchable}
        name={props.name}
      />
    </Box>
  );
}
