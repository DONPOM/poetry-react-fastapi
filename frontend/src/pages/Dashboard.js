import { Card, CardHeader, CardContent } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2




const Dashboard = () => {
    return (
      <>
        <h2>Dashboard</h2>
        <Grid container spacing={2}>
          <Grid xs={8}>
          <Card>
            <CardHeader title='Card Title' subheader='subtitle' />
            <CardContent>This is the card content</CardContent>
          </Card>
          </Grid>
          <Grid xs={4}>
          <Card>
            <CardHeader title='Card Title' subheader='subtitle' />
            <CardContent>This is the card content</CardContent>
          </Card>
          </Grid>
          <Grid xs={4}>
          <Card>
            <CardHeader title='Card Title' subheader='subtitle' />
            <CardContent>This is the card content</CardContent>
          </Card>
          </Grid>
          <Grid xs={8}>
          <Card>
            <CardHeader title='Card Title' subheader='subtitle' />
            <CardContent>This is the card content</CardContent>
          </Card>
          </Grid>
        </Grid>
      </>
    );

  };
  
  export default Dashboard;