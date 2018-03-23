import React from 'react'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '10px 5px',
    padding: '20px',
  },
})

class Debt extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography variant="headline" gutterBottom align="center">

              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Typography variant="headline" gutterBottom align="center">
                Debt Management
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography variant="headline" gutterBottom align="center">

              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Debt);
