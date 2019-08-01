import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image, url} = album;
  const { albumArtImageStyle, headerTextStyle, thumbnailContainerStyle, headerContentStyle, thumbnail_style} = styles;
  return (
    <Card>
      <CardSection>
        <View style = {thumbnailContainerStyle}>
          <Image style = {thumbnail_style} source = {{uri: thumbnail_image}}/>
        </View>
        <View style = {headerContentStyle}>
    <Text style = {headerTextStyle}>{title}</Text>
    <Text>{artist}</Text>
    </View>
    </CardSection>

    <CardSection>
      <Image style = {albumArtImageStyle} source = {{uri: image}} />
    </CardSection>

    <CardSection>
      <Button onPress = {() => Linking.openURL(url)}>
      Buy Now!
      </Button>
    </CardSection>
</Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnail_style:{
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle:{
    fontSize: 18
  },
  albumArtImageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;