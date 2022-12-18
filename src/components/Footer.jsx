import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children,label, href,}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg="#000000"
      color="#FFFFFF">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
             <Stack align={'flex-start'}>
                
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="logo"  width="130px"/>

                <Text fontSize={{ base: '10px', md: '10px', lg: '12px' }} textAlign="left" pt="30px">At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</Text>
              </Stack>
              
              <Stack align={'flex-start'} fontSize="12px" lineHeight="40px">
                
                <Link href={'#'}>cult.fit for business</Link>
                <Link href={'#'}>cult.fit franchise</Link>
                <Link href={'#'}>corporate partnerships</Link>
                <Link href={'#'}>cult pass network</Link>
                <Link href={'#'}>t&c for business</Link>
              </Stack>

              <Stack align={'flex-start'} fontSize="12px" lineHeight="40px">
                
                <Link href={'#'}>partner.fit</Link>
                <Link href={'#'}>blogs</Link>
                <Link href={'#'}>security </Link>
                <Link href={'#'}>careers</Link>
              </Stack>

              <Stack align={'flex-start'} fontSize="12px" lineHeight="40px">
              
                <Link href={'#'}>contact us</Link>
                <Link href={'#'}>privacy policy</Link>
                <Link href={'#'}>cult bmi calculator </Link>
                <Link href={'#'}>terms & conditions</Link>
              </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png" alt="" width="150px"/>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png" alt="" width="150px"/>

            <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
           
          </Stack>
        </SimpleGrid>
      </Container>

      
    </Box>
  );
}


{/* <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
        
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box> */}