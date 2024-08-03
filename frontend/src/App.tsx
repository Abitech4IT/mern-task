import { Container, Grid, Typography } from "@mui/material";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import SelectInput from "./components/SelectInput";

function App() {
  return (
    <Container
      sx={{
        backgroundColor: "lightblue",
        height: "400px",
        marginTop: "100px",
        padding: 5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3" align="center">
            Task Management System
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextInput
            title="Task Title"
            name="task"
            placeholder="Enter your task"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button type="submit" variant="contained" sx={{ marginTop: 4 }}>
            Add Task
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SelectInput
            size="small"
            name="country"
            value=""
            title={
              <Typography fontSize={16} fontWeight={600}>
                Filter By
              </Typography>
            }
            menuItems={[
              { title: "Completed", value: "completed" },
              { title: "Pending", value: "pending" },
            ]}
            sx={{
              marginBottom: 3,
              p: 0.5,
              borderRadius: 1,
              outline: "none",
              border: "1px solid",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                borderStyle: "none",
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
