import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSeciton from './CardSection';

const Detail = (props) => {
    return (
        <Card>
            <CardSeciton>
            <Text>{props.record.title}</Text>
            </CardSeciton>
        </Card>
    );
};

export default Detail;