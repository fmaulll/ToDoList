import { Box, Grid, IconButton, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { ReactComponent as TrashIcon } from "../../assets/Trash.svg";
const ActivityItem = ({ data, onClickTitle, onClickDelete }) => {
  return (
    <Box
      sx={{
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
        minHeight: "210px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Typography
        data-cy="activity-item-title"
        onClick={onClickTitle}
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "27px",
          color: "#111111",
          cursor: "pointer",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {data.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          data-cy="activity-item-date"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "21px",
            color: "#888888",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {moment(data.created_at).format("DD MMMM YYYY")}
        </Typography>
        <IconButton
          data-cy="activity-item-delete-button"
          onClick={onClickDelete}
        >
          <TrashIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ActivityItem;
