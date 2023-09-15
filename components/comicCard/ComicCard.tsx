import React, { FC } from 'react'
import { Comic } from 'interface/comics';
import { Button, CardActions, CardContent, Typography, Card } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';


interface Props {
    result: Comic
}

const ComicCard: FC<Props> = ({ result }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/comics/${result.id}`);
    };

    const handleClickComprar = () => {
        router.push(`/checkout/${result.id}`);
    };


    return (
        <Card sx={{ width: "auto", maxWidth: 500, height: 500, padding: 3, marginBottom: 3, marginTop: 3 }}>
            <Image
                width={250}
                height={250}
                src={result?.thumbnail.path.concat(".", result?.thumbnail.extension)}
                alt={result.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                </Typography>
                {router.pathname === "/checkout/[id]" && <div>{`Precio $ ${result.price}`}</div>}
            </CardContent>

            {
                router.pathname === "/" ?
                    <CardActions>
                        <Button onClick={handleClick} size="medium" variant="outlined" color="primary">
                            Ver Detalle
                        </Button>
                        <Button onClick={handleClickComprar} size="medium" variant="outlined" color="primary">
                            Comprar
                        </Button>
                    </CardActions>
                    : router.pathname === "/comics/[id]" ?
                        <CardActions >
                            <Button onClick={handleClickComprar} disabled={result.stock === 0 ? true : false} size="medium" variant="outlined" color="primary">
                                {result.stock === 0 ? "Sin Stock" : "Comprar"}
                            </Button>
                        </CardActions>
                        :
                        <CardActions >
                            <Button onClick={handleClick} size="medium" variant="outlined" color="primary">
                                Ver Detalle
                            </Button>
                        </CardActions>
            }
        </Card>
    )
}

export default ComicCard