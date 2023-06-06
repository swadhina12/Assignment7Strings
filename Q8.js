//You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
      return true; // If there are 0 or 1 points, they are always on a straight line
    }
  
    // Calculate the slope between the first two points
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = (y1 - y0) / (x1 - x0);
  
    // Check the slope between each subsequent pair of points
    for (let i = 2; i < coordinates.length; i++) {
      const [xi, yi] = coordinates[i];
      const [xPrev, yPrev] = coordinates[i - 1];
      const currentSlope = (yi - yPrev) / (xi - xPrev);
  
      if (currentSlope !== initialSlope) {
        return false; // Slopes are not equal, points do not lie on a straight line
      }
    }
  
    return true; // All slopes are equal, points lie on a straight line
  }
  
  // Example usage
  const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
  const isStraightLine = checkStraightLine(coordinates);
  console.log(isStraightLine); // Output: true
  