import * as React from "react";
import { Personaje } from "interface/personajes";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  character: Personaje;
}

const PersonajePage: NextPage<Props> = ({ character }) => {
  return (
    <Box>
      <Card sx={{ marginTop: 5, padding: 3, gap: 10, height: "fit-content" }}>
        <Typography variant="h2" fontWeight="bold">
          {character.name}
        </Typography>
        <Image
          alt={character.name}
          src={character.thumbnail.path.concat(
            ".",
            character.thumbnail.extension
          )}
          width={300}
          height={300}
        />
        <p>{character?.description}</p>
      </Card>
    </Box>
  );
};

export default PersonajePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id);
  const character = await getCharacter(id);

  return {
    props: {
      character,
    },
  };
};
