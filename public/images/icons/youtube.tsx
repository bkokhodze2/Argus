interface ILari {
  color?: string;
  classes?: string;
}

function Youtube({color, classes}: ILari) {
  return (
      <svg className={`${classes}`} width="24" height="24" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5487_5119)">
          <path
              d="M17 5H7C4.79086 5 3 6.79086 3 9V15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15V9C21 6.79086 19.2091 5 17 5Z"
              stroke={color}
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9L15 12L10 15V9Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_5487_5119">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
  );
}

export default Youtube;