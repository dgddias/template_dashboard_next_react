import {
    Avatar,
    Box,
    Center,
    Flex,
    HStack,
    Icon,
    IconButton,
    Input,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Text,
    useDisclosure
} from "@chakra-ui/react";

import {HamburgerIcon} from "@chakra-ui/icons";
import {RiAlignRight, RiNotificationLine, RiSearchLine} from "react-icons/ri";
import Sidebar from "../components/Sidebar";

export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex as={'header'} m='0' h='20' px='6' align={"center"} backgroundColor={'gray.800'}>
            <IconButton
                _hover={{filter: 'brightness(0.7)'}}
                _focus={{boxShadow: 'none'}}
                variant='outline'
                aria-label='Open Menu'
                icon={<HamburgerIcon/>}
                onClick={onOpen}
            />
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent backgroundColor={'gray.900'}>
                    <DrawerHeader borderBottomWidth='1px'>
                        <Flex align={'center'}>
                            <Avatar
                                size={'md'}
                                name="Danilo Dias"
                                src=""
                            />
                            <Box ml={'4'}>
                                <Text fontSize={'medium'}>User Name</Text>
                                <Text
                                    color={'gray.300'}
                                    fontSize={'small'}
                                    fontWeight={"normal"}
                                >
                                    useremail@email.com
                                </Text>
                            </Box>
                        </Flex>

                    </DrawerHeader>
                    <DrawerBody>
                       <Sidebar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Text
                fontSize={"3xl"}
                fontWeight={"bold"}
                letterSpacing={"tight"}
                ml={4}
                as='span'>
                CompanyName
            </Text>
            <Center width="100%">
                <Flex
                    as="label"
                    flex="1"
                    py="2"
                    px='8'
                    ml='6'
                    maxWidth={480}
                    alignSelf={'center'}
                    color={'gray.200'}
                    position={'relative'}
                    bg='gray.700'
                    borderRadius={"full"}
                    align={"center"}
                >
                    <Input
                        color={'gray.50'}
                        variant={'unstyled'}
                        px={'4'}
                        mr={'4'}
                        placeholder="Buscar..."
                        _placeholder={{color: 'gray.400'}}
                    />
                    <Icon as={RiSearchLine} fontSize='20'/>
                </Flex>
            </Center>
            <Flex
                alignItems={'center'}
                ml={'auto'}
            >
                <HStack
                    spacing='8'
                    mx={'8'}
                    pr={'8'}
                    py={'1'}
                    borderRightWidth={1}
                    borderColor={'gray.700'}
                >
                    <Icon as={RiNotificationLine} fontSize='20'/>
                    <Icon as={RiAlignRight} fontSize='20'/>
                </HStack>
            </Flex>
        </Flex>
    )
}