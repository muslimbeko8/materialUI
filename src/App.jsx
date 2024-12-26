import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Alert,
  Tabs,
  Tab,
  Box,
  Modal,
  LinearProgress,
  CircularProgress,
  Stack,
} from "@mui/material";

export default function App() {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <Box sx={{ maxWidth: "lg", mx: "auto", p: 4, "& > *": { mb: 4 } }}>
      <Card>
        <CardHeader title="Buttons" />
        <CardContent>
          <Stack spacing={2}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Text Fields" />
        <CardContent>
          <Stack spacing={3}>
            <TextField label="Standard" variant="standard" />
            <TextField label="Outlined" variant="outlined" />
            <TextField
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="standard"
            />
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Alerts" />
        <CardContent>
          <Stack spacing={2}>
            <Alert severity="success">This is a success alert.</Alert>
            <Alert severity="info">This is an info alert.</Alert>
            <Alert severity="warning">This is a warning alert.</Alert>
            <Alert severity="error">This is an error alert.</Alert>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Tabs>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography>Tab {selectedTab + 1}</Typography>
        </Box>
      </Card>

      <div>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              Text in a Modal
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>

      <Card>
        <CircularProgress size={48} />
        <CircularProgress size={32} color="success" />
      </Card>
    </Box>
  );
}
