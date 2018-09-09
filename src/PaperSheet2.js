import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './css/PaperSheet.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet2(props) {
  const { classes } = props;

  return (
    <div className="wynJokeContainer2">
      <Paper id="donkey" className={classes.root} elevation={24}>
        <Typography id="creditText" component="p">
          <em>React-App made by Simon, Dardo, and Pio at Wyncode in Miami, FL.</em>
        </Typography>
      </Paper>
    </div>
  );
}



export default withStyles(styles)(PaperSheet2);
