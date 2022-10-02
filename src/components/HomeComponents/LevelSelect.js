import React from 'react';
import LevelStar from './LevelStar';
import { Stage, Layer, Line } from 'react-konva';
import LevelData from "../../data/levels";

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
}

const LevelSelect = (props) => {
    let totalStars = LevelData.length - 1;

    let landscape = window.screen.orientation.type === "landscape-primary";

    let starsObjs = [];
    let stars = [];
    let lines = [];

    for (let index = 0; index < totalStars; index++) {
        var starWidth;
        var starHeight;
        var starX;
        var starY;

        if (landscape) {
          let maxWidth = props.width / totalStars;

          starWidth = maxWidth / 4;
          starHeight = maxWidth / 2;

          let yPadding = starHeight / 1.5;

          starX = (index * maxWidth) + (maxWidth / 2);
          starY = randomNumber(yPadding, props.height - yPadding);
        } else {
          let maxHeight = props.height / totalStars;

          starWidth = maxHeight / 4;
          starHeight = maxHeight / 2;

          let xPadding = starWidth * 1.5;

          starX = randomNumber(xPadding, props.width - xPadding);
          starY = (index * maxHeight) + (maxHeight / 2);
        }

        stars.push(
            <LevelStar
              level={`${index + 1}`}
              x={starX}
              y={starY}
              width={starWidth}
              height={starHeight}
              onHover={() => props.onHover(index)}
            />
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
          strokeWidth={5}
        />
      )
    }

    return (
        <Stage width={props.width} height={props.height} style={{backgroundImage: 'url("map-background.jpg")', backgroundSize: "cover", backgroundPosition: "center"}}>
            <Layer>{lines}{stars}</Layer>
        </Stage>
    )
}

export default LevelSelect;