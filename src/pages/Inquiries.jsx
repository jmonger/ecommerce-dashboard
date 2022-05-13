import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import InquiryDataService from "../services/inquiries.service";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const sample_inquiries = [
  {
    name: "Marcel Might",
    email: "m.might@gmail.com",
    phone: "555555555",
    message: "Need help with a trip",
  },
  {
    name: "Jack Smith",
    email: "j.smith@gmail.com",
    phone: "555555543",
    message: "Need help with a destination",
  },
  {
    name: "Jerod Knee",
    email: "j.knee@gmail.com",
    phone: "555555554",
    message: "Planning a family vacation",
  },
];

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    retrieveInquiries();
  }, []);

  const retrieveInquiries = () => {
    InquiryDataService.getAll()
      .then((response) => {
        setInquiries(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Inquiries</h1>
      <List>
        {inquiries.map((inquiry, index) => (
          <ListItemButton key={index}>
            <ListItemText
              primary={<h3>{inquiry.name}</h3>}
              secondary={
                <div>
                  <Typography>
                    <i className="bx bx-phone"></i> {inquiry.phone}
                    <br />
                    <i className="bx bx-paper-plane"></i> {inquiry.email}
                    <br />
                    <i className="bx bx-message-detail"></i> {inquiry.message}
                  </Typography>
                  <FormControlLabel control={<Switch />} label="Contacted?" />

                </div>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Inquiries;
