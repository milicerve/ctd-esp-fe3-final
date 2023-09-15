import * as React from 'react';
import Head from 'next/head'
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general'
import { Personaje } from 'interface/personajes'
import { getCharacter } from 'dh-marvel/services/marvel/marvel.service'
import { GetServerSideProps, NextPage } from 'next'
import { Box, Card } from '@mui/material';
import Image from 'next/image';

interface Props {
    character: Personaje
}

const PersonajePage: NextPage<Props> = ({ character }) => {

    return (
        <LayoutGeneral >
            <Box >
                <Card sx={{ marginTop: 10, padding: 3, gap: 10, height: "fit-content" }}>
                    <div>{character.name}</div>
                    <Image
                        alt={character.name}
                        src={character.thumbnail.path.concat(".", character.thumbnail.extension)}
                        width={300}
                        height={300}
                    />
                    <p>{character?.description}</p>
                </Card>
            </Box>
        </LayoutGeneral>
    )
}

export default PersonajePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = Number(context.params?.id);
    const character = await getCharacter(id)

    return {
        props: {
            character
        }
    }
}