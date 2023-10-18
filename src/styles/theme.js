export const theme =Object.freeze({
    colors: {
        primary: '#7986cb',
        secondary: '#2b2b2b',
        success: '#4caf50',
        danger: '#f44336 ',
        
        bg: 'red',
        font: '#19191B',
      },
      media: {
        laptpp: '(min-width: 1440px)',
        tablet: '(min-width: 768px)',
        mobile: '(max-width: 768px)',
      },
      spacing: value => `${4 * value}px`,
})