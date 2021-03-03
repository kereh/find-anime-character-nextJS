import React, { Fragment } from "react";
import { List,ListItem,ListItemAvatar,ListItemText,Avatar,Typography } from "@material-ui/core";

export default function ListData ({ data }) {

    if (data.search_results == undefined) return "";

    return (
        <Fragment>
            {Object.values(data.search_results).map((data) => {
                return (
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ width: '100px',height: '100px',marginRight: '20px' }}>
                                    <img src={data.character_image} alt={data.desc}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data.name} secondary={data.desc}/>
                        </ListItem>
                    </List>
                );
            })}
        </Fragment>
    );
}