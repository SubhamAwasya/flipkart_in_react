import Grid from "./Grid";

function Skeleton() {
  const pro = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <Grid>
      {pro.map((item) => (
        <div className="flex flex-col gap-4 mx-auto w-full min-w-64 max-w-80">
          <div className="skeleton h-[256px] w-full aspect-square"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </Grid>
  );
}

export default Skeleton;
