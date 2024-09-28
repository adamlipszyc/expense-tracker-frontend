import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PaymentsIcon from "@mui/icons-material/Payments";
import SchoolIcon from "@mui/icons-material/School";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PaidIcon from "@mui/icons-material/Paid";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LockIcon from "@mui/icons-material/Lock";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import "./TrackingItem.css";
import WorkIcon from "@mui/icons-material/Work";

const TrackingItem = ({
  id,
  category,
  amount,
  date,
  description,
  handleDeleteExpense,
}) => {
  const generateIcon = () => {
    {
      switch (category) {
        case "Housing":
          return <HomeIcon />;
          break;

        case "Transportation":
          return <DirectionsTransitIcon />;
          break;

        case "Food/Drink":
          return <FastfoodIcon />;
          break;

        case "Healthcare":
          return <HealthAndSafetyIcon />;
          break;

        case "Personal Care":
          return <SelfImprovementIcon />;
          break;

        case "Entertainment":
          return <LiveTvIcon />;
          break;

        case "Debt and Savings":
          return <PaymentsIcon />;
          break;

        case "Insurance":
          return <LockIcon />;
          break;

        case "Education":
          return <SchoolIcon />;
          break;

        case "Gifts and Donations":
          return <CardGiftcardIcon />;
          break;

        case "Miscellaneous":
          return <MiscellaneousServicesIcon />;
          break;

        case "Taxes":
          return <PaidIcon />;
          break;

        default:
          return <QuestionMarkIcon />;
          break;
      }
    }
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="tracking-item-container"
      onClick={() => setExpanded(!expanded)}
    >
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(e) => {
              e.preventDefault;
              handleDeleteExpense(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>{generateIcon()}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={category} secondary={date.slice(0, 10)} />
        <ListItemText
          primary={"$ " + amount}
          primaryTypographyProps={{
            fontSize: 18,
          }}
        />
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ListItem sx={{ pl: 10, pt: 0 }}>
          <ListItemText
            secondary={description}
            secondaryTypographyProps={{ fontSize: 15 }}
          />
        </ListItem>
      </Collapse>
    </div>
  );
};

export default TrackingItem;
