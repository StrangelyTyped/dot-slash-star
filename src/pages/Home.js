import React, { Component } from 'react';
import { Stage, Layer, Star, Text, Line } from 'react-konva';
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

    let landscape = window.screen.orientation.type == "landscape-primary";

    let starsObjs = [];
    let stars = [];
    let lines = [];

    for (let index = 0; index < totalStars; index++) {
        var starWidth;
        var starHeight;
        var starX;
        var starY;

        if (landscape) {
          let maxWidth = window.innerWidth / totalStars;

          starWidth = maxWidth / 4;
          starHeight = maxWidth / 2;

          let yPadding = starHeight / 1.5;

          starX = (index * maxWidth) + (maxWidth / 2);
          starY = randomNumber(yPadding, window.innerHeight - yPadding);
        } else {
          let maxHeight = window.innerHeight / totalStars;

          starWidth = maxHeight / 4;
          starHeight = maxHeight / 2;

          let xPadding = starWidth * 1.5;

          starX = randomNumber(xPadding, window.innerWidth - xPadding);
          starY = (index * maxHeight) + (maxHeight / 2);
        }

        stars.push(
            <MapStar level={`${index + 1}`} x={starX} y={starY} width={starWidth} height={starHeight} />
        );

        starsObjs.push({
          level: index + 1,
          x: starX,
          y: starY,
          width: starWidth,
          height: starHeight
        })
    }

    for (let index = 0; index < totalStars - 1; index ++) {
      let starFrom = starsObjs[index];
      let starTo = starsObjs[index + 1];

      lines.push(
        <Line
          points={[starFrom.x, starFrom.y, starTo.x, starTo.y]}
          stroke={"grey"}
        />
      )
    }

    return (
      <Stage width={window.innerWidth} height={window.innerHeight} style={{backgroundColor: "black"}}>
        <Layer>{lines}{stars}</Layer>
      </Stage>
    );
  }
}

export default Home;