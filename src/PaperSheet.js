import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './css/PaperSheet1.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className= "frontPageJokeCredit">
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">
          All Jokes are courtesy of "The Official Joke API" made available by 15DKatz on GitHub
        </Typography>
      </Paper>
    </div>
  );
}



export default withStyles(styles)(PaperSheet);
