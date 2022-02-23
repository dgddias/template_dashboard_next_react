import {Box, Icon, Link, Stack, Text} from "@chakra-ui/react";
import {RiDashboardLine, RiUserSettingsLine} from "react-icons/ri";

export default function Sidebar(){
    return(
        <Box as='aside' w='64' mr='8' mt='4'>
            <Stack spacing='12' align='flex-start'>
                <Box>
                    <Text fontWeight={'bold'} color={'gray.400'} fontSize={'small'}>GERAL</Text>
                    <Stack spacing='4' mt={'8'} align={'stretch'}>
                        <Link display='flex' alignItems={'center'}>
                            <Icon as={RiDashboardLine} fontSize='20' />
                            <Text ml='4' fontWeight='bold'>Dashboard</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight={'bold'} color={'gray.400'} fontSize={'small'}>CONFIGURAÇÕES</Text>
                    <Stack spacing='4' mt={'8'} align={'stretch'}>
                        <Link display='flex' alignItems={'center'}>
                            <Icon as={RiUserSettingsLine} fontSize='20' />
                            <Text ml='4' fontWeight='bold'>Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}