export const generateColors = (arrayLength: number) => {  
  const colors = [];
  const saturation = 70;
  const lightness = 50; 

  for (let i = 0; i < arrayLength; i++) {
    const hue = ((i * 360) / arrayLength) % 360; 
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }

  return colors;
};
