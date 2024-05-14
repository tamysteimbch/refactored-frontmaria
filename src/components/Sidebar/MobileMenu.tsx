'use client';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import FlaviaImg from '@/assets/image.png';
import sideButtons, { Mode } from '@/constants/sidebuttons';

const FlaviaImgUrl = FlaviaImg.src;

interface NavLinkProps {
  children: ReactNode;
  mode: Mode;
  setMode: (value: Mode) => void;
  onClose: () => void;
}

const NavLink = ({ children, mode, setMode, onClose }: NavLinkProps) => (
  <Button
    px={2}
    py={1}
    rounded={'md'}
    background={'transparent'}
    color={useColorModeValue('#FFF', 'gray.200')}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#2D3C7D', 'gray.700'),
    }}
    onClick={() => {
      setMode(mode);
      onClose();
    }}
  >
    {children}
  </Button>
);

interface MobileMenuProps {
  setMode: (value: Mode) => void;
}

export default function MobileMenu({ setMode }: MobileMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="lg:hidden block mb-12 text-white">
      <Box bg={useColorModeValue('#162874', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <p className="text-2xl">MARIA</p>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {sideButtons.map((button) => (
                <NavLink onClose={onClose} key={button.title} mode={button.mode} setMode={setMode}>
                  {button.title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} src={FlaviaImgUrl} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <span className="text-black">Minha conta</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {sideButtons.map((button) => (
                <NavLink onClose={onClose} key={button.title} mode={button.mode} setMode={setMode}>
                  {button.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
