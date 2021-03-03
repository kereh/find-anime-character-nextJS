import React, { Fragment,useState } from "react";
import { 
    Container,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Grid,
    Typography 
} from "@material-ui/core";
import useSWR from "swr";

import Search from "../Search/Search";
import List from "../List/List.jsx";

const fetcher = url => fetch(url).then(res => res.json());

export default function Content () {

    const [name, setName] = useState();
    const { data, error } = useSWR(`https://acd-api.herokuapp.com/${name}`, fetcher);

    return (
        <Fragment>
            <Container maxWidth="md">
                <Card>
                    <CardHeader title="Find Anime Character" style={{ textAlign: 'center' }} subheader="Made By Ronaldo Kereh"/>
                    <CardContent>
                        <Typography style={{ textAlign: 'center' }}>Simple Application To Find Anime Character With Name</Typography>
                        <div style={{ textAlign: 'center',marginTop: '10px' }}>
                            <Search text={name} setText={setName} />
                        </div>
                        {!data && (
                            <div style={{ textAlign: 'center',marginTop: '10px' }}>
                                <CircularProgress color="secondary" />
                            </div>
                        )}
                        {data && (
                            <div style={{ textAlign: 'center',marginTop: '10px' }}>
                                <List data={data}/>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </Fragment>
    );
}