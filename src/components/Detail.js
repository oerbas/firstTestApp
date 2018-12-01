import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Detail = ({ record }) => {
    const { title, artist, thumbnail_image, image, url } = record;
    const { thumbnailStyle, headerContent, thumbnailContainer, headerText, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={ thumbnailContainer }>
                   <Image source={{ uri: thumbnail_image }} style={ thumbnailStyle } />
                </View>
                <View style={headerContent}>
                    <Text style={ headerText }>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image }} style={ imageStyle } />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default Detail;