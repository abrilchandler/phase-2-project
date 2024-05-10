import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Bodybuilder({bodybuilder}) {
    return (
        <Card variant="outlined" key={bodybuilder.id}>
            <CardContent>
                <h2>{bodybuilder.name}  |  {bodybuilder.titles}</h2>
          </CardContent>
        </Card>
    )
}

export default Bodybuilder;
