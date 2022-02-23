import {Box, Flex, SimpleGrid, Text, theme} from "@chakra-ui/react";
import {ApexOptions} from 'apexcharts';

import dynamic from "next/dynamic";
import Head from "next/head";

// FAZ COM QUE O O CHART SÓ SEJA CARREGADO NO BROWSER
const Chart = dynamic(() => import('react-apexcharts'), {ssr: false})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-02-18T00:00:00.000Z',
            '2022-02-19T00:00:00.000Z',
            '2022-02-20T00:00:00.000Z',
            '2022-02-21T00:00:00.000Z',
            '2022-02-22T00:00:00.000Z',
            '2022-02-23T00:00:00.000Z',
            '2022-02-24T00:00:00.000Z',
            '2022-02-25T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [
    {name: 'series1', data: [31, 17, 19, 30, 54, 109, 90, 70]}
]


export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard | CompanyName</title>
            </Head>
            <main>
                <Flex w="100%" my='6' mx="auto" px="6">
                    <SimpleGrid gap='4' flex="1" minChildWidth="320px" alignItems={'flex-start'}>
                        <Box
                            p='8'
                            bg='gray.800'
                            boxShadow='dark-lg'
                            rounded='md'
                            pb='4'
                        >
                            <Text fontSize="small" mb="4">HOJE</Text>
                            <Chart options={options} series={series} type="area" height={160}/>
                        </Box>
                        <Box
                            p='8'
                            bg='gray.800'
                            boxShadow='dark-lg'
                            rounded='md'
                            pb='4'
                        >
                            <Text fontSize="small" mb="4">ONTEM</Text>
                        </Box>
                        <Box
                            p='8'
                            bg='gray.800'
                            boxShadow='dark-lg'
                            rounded='md'
                            pb='4'
                        >
                            <Text fontSize="small" mb="4">SEMANA</Text>
                        </Box>
                        <Box
                            p='8'
                            bg='gray.800'
                            boxShadow='dark-lg'
                            rounded='md'
                            pb='4'
                        >
                            <Text fontSize="small" mb="4">MÊS</Text>
                        </Box>

                    </SimpleGrid>
                </Flex>
            </main>
        </>
    )
}