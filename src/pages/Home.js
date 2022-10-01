import React, { Component } from 'react';
import { Stage, Layer, Star, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 

function MapStar(props) {
    const navigate = useNavigate();
    
    return (
        <>
            <Star
                x={props.x}
                y={props.y}
                fill={"yellow"}
                onClick={() => navigate(`/level/${props.level}`)}
                numPoints={5}
                innerRadius={props.width / 2}
                outerRadius={props.height / 2}
            />
            <Text
                x={props.x - 6}
                y={props.y - 8}
                text={props.level}
                fill={"black"}
                onClick={() => navigate(`/level/${props.level}`)}
                align={"center"}
                fontSize={20}
                fontStyle={"bold"}
            />
      </>
    );
}

class Home extends Component {
  render() {
    let totalStars = 5;

    let maxWidth = window.innerWidth / totalStars;

    let starWidth = maxWidth / 4;
    let starHeight = maxWidth / 2;

    let yPadding = starHeight / 1.5;

    let stars = [];

    for (let index = 0; index < totalStars; index++) {
        let starX = (index * maxWidth) + (maxWidth / 2);
        let starY = randomNumber(yPadding, window.innerHeight - yPadding);

        stars.push(
            <MapStar level={`${index + 1}`} x={starX} y={starY} width={starWidth} height={starHeight} />
        );
    }

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>{stars}</Layer>
      </Stage>
    );
  }
}

export default Home;