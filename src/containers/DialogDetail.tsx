import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        เกี่ยวกับ
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          เกี่ยวกับ
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            1. 60114440350 สิริภราด์  กิ่งจันทร์
          </Typography>
          <Typography gutterBottom>
            2. เว็บเกม เรียงหมายเลข ประลองปัญญา
          </Typography>
          <Typography gutterBottom>
            3. วัตถุประสงค์ของซอฟต์แวร์ : เพื่อเล่นเกมผ่อนคลาย ฝึกสมองก่อให้เกิดการวิเคราะห์ วางแผน สร้างเสริมความทรงจำให้ดีขึ้น
          </Typography>
          <Typography gutterBottom>
            4. ปัญหาที่สนใจ : ในการเล่นเกมเรียงตัวเลข ต้องมีการกดปุ่มลูกศรขึ้น ลง ซ้าย ขวา ที่คีย์บอร์ดซึ่งการกระทำนี้ ทำหลายครั้ง 
          </Typography>
          <Typography gutterBottom>
            5. Pattern ที่เลือกใช้ :
          </Typography>
          <Typography gutterBottom>
            6. เหตุผลที่ใช้ : 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ปิด
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}