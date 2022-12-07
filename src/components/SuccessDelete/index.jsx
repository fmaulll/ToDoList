import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ReactComponent as WarningCircleIcon } from "../../assets/WarningCircle.svg";

const SuccessDelete = ({ open, onClose }) => {
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={open}
      onClose={onClose}
    >
      <Box
        data-cy="modal-information"
        sx={{
          width: "460px",
          height: "38px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          padding: "20px 30px",
        }}
      >
        <WarningCircleIcon
          data-cy="modal-information-icon"
          style={{ marginRight: "10px" }}
        />
        <Typography
          data-cy="modal-information-title"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Activity berhasil dihapus
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessDelete;
