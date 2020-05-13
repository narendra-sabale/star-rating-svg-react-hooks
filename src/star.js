

import React, {useState, useCallback} from 'react';

export default ({fill, id, setSelectedRating, starFillColor, starEmptyColor, starBorderColor, setNoOfHoveredStars, isReadOnly, starSpacing, width, height}) => {
  const [isMouseDown,  setIsMouseDown] = useState(false)
  
  const onMouseEnter = useCallback(() => {
    if (isReadOnly) return
    setNoOfHoveredStars(id)
  }, [id, setNoOfHoveredStars])

  const onMouseLeave = useCallback(() => {
    setNoOfHoveredStars(null)
  }, [setNoOfHoveredStars])

  const onMouseDown = useCallback(() => {
    if (isReadOnly) return
    setIsMouseDown(true)
  }, [])

  const onMouseUp = useCallback(() => {
    setIsMouseDown(false)
  }, [])

  const onClick = useCallback(() => {
    if (isReadOnly) return
    setSelectedRating(id)
  }, [id, setSelectedRating])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={width || "43"} 
      height={height || "42"} 
      style={{padding : `${starSpacing || '0px'}`, cursor: `${isReadOnly ? '' : 'pointer' }`}}
      viewBox="0 0 43 42"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
      >
      <defs>
        <linearGradient id="prefix__a" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9752FF"/>
          <stop offset="100%" stopColor="#5E93FF"/>
        </linearGradient>
      </defs>
      <path 
        fill={fill ? starFillColor ? starFillColor : "url(#prefix__a)" : starEmptyColor ? starEmptyColor : "none"}
        fillRule="evenodd" stroke={ starBorderColor ? starBorderColor : "url(#prefix__a)"}
        strokeWidth="2.4" 
        d="M157.66 35.948l-11.176 5.174.905-12.63c.07-.584-.12-1.169-.52-1.6l-8.376-9.02 12.299-3.044c.577-.114 1.074-.475 1.36-.988l5.999-10.751 6.697 10.751c.286.513.783.874 1.36.988l12.083 2.378-8.16 9.686c-.4.431-.59 1.016-.52 1.6l1.47 12.22-11.74-4.764c-.534-.247-1.148-.247-1.681 0z" 
        transform={`scale(${isMouseDown ? 0.9 : 1}) translate(-137 -1)`}/>
    </svg>
  );
}
