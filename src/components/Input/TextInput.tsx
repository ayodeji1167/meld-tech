import { Box, BoxProps, Input, InputProps, Text } from '@chakra-ui/react';
//   import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
//   import { CgAsterisk } from 'react-icons/cg';

type TextInputProps = {
  onBlur?: any;
  label: string;
  type?: string;
  placeHolder?: string;
  onChange?: InputProps['onChange'];
  onClick?: InputProps['onClick'];
  name: string;
  isInvalid?: boolean;
  value?: string;
  errorMessage?: string;
  touched?: any;
  error?: any;
  readOnly?: boolean;
  boxProps?: BoxProps;
  extraInputProps?: InputProps;
  defaultValue?: string | number;
};
export function TextInput(props: TextInputProps) {
  return (
    <Box {...(props.boxProps || {})}>
      <Text mb={'2'} textStyle={'p-regular'}>
        {props.label}
      </Text>

      <Input
        bg={'rgba(246, 248, 251, 1)'}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        name={props.name}
        id={props.name}
        isInvalid={Boolean(props.error && props.touched)}
        value={props.value}
        onBlur={props.onBlur}
        border={'none'}
        outline={'none'}
        focusBorderColor="transparent" // Set the focus border color to transparent
        onClick={props.onClick}
        borderRadius={'5px'}
        readOnly={props.readOnly}
        defaultValue={props?.defaultValue}
        {...(props.extraInputProps || {})}
        _placeholder={{ color: 'rgba(87, 87, 87, 1)', fontSize: '14px' }} // Style the placeholder
      />
      {props.errorMessage && props.touched && (
        <Text fontSize={'12px'} color={'red'}>
          {props.errorMessage}
        </Text>
      )}
    </Box>
  );
}

//   export function PasswordInput(props: TextInputProps) {
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//       setShowPassword(!showPassword);
//     };

//     return (
//       <Box>
//         <FormLabel
//           display={'flex'}
//           fontWeight="700"
//           fontSize={{ base: '14px', md: '16px' }}
//         >
//           <Text>{props.label}</Text>
//           <CgAsterisk color="#E50917" />
//         </FormLabel>
//         <InputGroup>
//           <InputRightElement
//             onClick={togglePasswordVisibility}
//             cursor={'pointer'}
//             children={
//               showPassword ? (
//                 <AiOutlineEyeInvisible color="gray.300" />
//               ) : (
//                 <AiOutlineEye color="gray.300" />
//               )
//             }
//           />
//           <Input
//             type={showPassword ? 'text' : 'password'}
//             onChange={props.onChange}
//             placeholder={props.placeHolder}
//             name={props.name}
//             border="1px solid rgba(29, 29, 29, 0.5);"
//             isInvalid={Boolean(props.error && props.touched)}
//             value={props.value}
//             id={props.name}
//           />
//         </InputGroup>
//         {props.errorMessage && props.touched && (
//           <Text fontSize={'12px'} color={'red'}>
//             {props.errorMessage}
//           </Text>
//         )}
//       </Box>
//     );
//   }
