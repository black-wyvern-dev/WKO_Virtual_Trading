import React, {useEffect, useState} from 'react';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/core/Skeleton';
import Button from '@material-ui/core/Button';

export default function CCButton(props) {
  const [backgroundColor, setBackgroundColor] = useState('background.default');
  const [color, setColor] = useState(props.color === undefined ? 'text.white' : props.color);
  const [flash, setFlash] = useState(false);
  const [flashTime, setFlashTime] = useState(props.flashTime === undefined ? '1s' : props.flashTime);
  const [customStyle, setCustomStyle] = useState(props.customStyle === undefined ? {} : props.customStyle);
  const [text, setText] = useState(props.text === undefined ? 'FlashBtn' : props.text);
  const [classes, setClasses] = useState(props.className === undefined ? {} : props.className);
  const [containerStyle, setContainerStyle] = useState(props.containerStyle === undefined ? {} : props.containerStyle);
  const [status, setStatus] = useState(props.status === undefined ? 'default' : props.status);

  useEffect(() => {
    if(props.backgroundColor !== undefined) {
      setBackgroundColor(props.backgroundColor);
    }
    if(props.style !== undefined) {
      setCustomStyle(props.style);
    }
    if(props.text !== undefined) {
      setText(props.text);
    }
    if(props.className !== undefined) {
      setClasses(props.className);
    }
    if(props.containerStyle !== undefined) {
      setContainerStyle(props.containerStyle);
    }
    if(props.status !== undefined) {
      if(props.status === status) return;
      if(props.status === 'flash') setFlash('pulse');
      else setFlash(false);
      setStatus(props.status);
    }
  }, [props])

  const handleButtonClick = () => {
    if (props.onClick !== undefined) props.onClick(text, status);
  };

  return (
    <Box sx={containerStyle}
      style={{position: 'relative'}}
    >
      <Skeleton
        variant="rect"
        className={classes}
        sx={{
            backgroundColor: backgroundColor,
            animationDuration: flashTime,
            color: color,
            cursor: 'pointer',
            ...customStyle,
        }}
        animation={flash}
      >
        {text}
      </Skeleton>
      <Button
        variant="outlined"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 10,
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          top: 0,
          left: 0,
        }}
        color={props.theme !== undefined ? props.theme : 'dark'}
        onClick={handleButtonClick}
      />
    </Box>
  );
}