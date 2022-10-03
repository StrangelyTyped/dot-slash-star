import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Text } from 'react-konva';

const LevelStar = (props) => {
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
                onMouseOver={props.onHover}
                onMouseOut={props.onUnhover}
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
                listening={false}
            />
      </>
    )
}

export default LevelStar;