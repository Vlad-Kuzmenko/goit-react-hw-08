import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { Button, Paper, Typography, Box } from "@mui/material";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success("Contact deleted successfully");
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body1">{number}</Typography>
      <Box mt={1}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Paper>
  );
};

export default Contact;
