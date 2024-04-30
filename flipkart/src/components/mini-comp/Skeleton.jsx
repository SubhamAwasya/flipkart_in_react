import Grid from "./Grid"; // Import the Grid component (assuming it exists)

function Skeleton() {
  const pro = Array.from({ length: 30 }, (_, index) => index + 1); // Create an array of numbers from 1 to 30

  return (
    <Grid>
      {pro.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 mx-auto w-full min-w-36 max-w-80"
        >
          <div className="skeleton w-full aspect-square"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </Grid>
  );
}

export default Skeleton;
