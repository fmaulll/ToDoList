import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as WarningIcon } from "../../assets/Warning.svg";

const DeleteModal = ({ open, onClose, onClickDelete, title, type }) => {
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={open}
      onClose={onClose}
    >
      <Box
        data-cy="modal-delete"
        sx={{
          width: "445px",
          height: "295px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          padding: "45px 60px",
        }}
      >
        <WarningIcon data-cy="modal-delete-icon" />
        <Typography
          data-cy="modal-delete-title"
          sx={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Apakah anda yakin menghapus {type} <br />
          <span style={{ fontWeight: 700 }}>“{title}”?</span>
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            data-cy="modal-delete-cancel-button"
            onClick={() => {
              onClose();
            }}
            sx={{
              backgroundColor: "#F4F4F4",
              height: "54px",
              width: "159px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#4A4A4A",
              fontSize: "18px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "45px",
            }}
          >
            Batal
          </Button>
          <Button
            data-cy="modal-delete-confirm-button"
            onClick={onClickDelete}
            sx={{
              backgroundColor: "#ED4C5C",
              height: "54px",
              width: "159px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFFFFF",
              fontSize: "18px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "45px",
              "&:hover": {
                backgroundColor: "#c23e4b",
              }
            }}
          >
            Hapus
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
