import { Button } from "@material-ui/core";
function Dashboard() {
  return (
    <div>
      <div>Login successful !</div>
      <Button
        style={{ marginTop: "10rem" }}
        variant="contained"
        color="secondary"
      >
        logout
      </Button>
    </div>
  );
}
export default Dashboard;
