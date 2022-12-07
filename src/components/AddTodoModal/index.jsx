import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as CrossIcon } from "../../assets/Cross.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/ChevronDown.svg";
import Priority from "../Priority";

const selectItems = [
  { label: "Very High", value: "very-high", test: "very-high" },
  { label: "High", value: "high", test: "high" },
  { label: "Medium", value: "normal", test: "medium" },
  { label: "Low", value: "low", test: "low" },
  { label: "Very Low", value: "very-low", test: "very-low" },
];

const AddTodoModal = ({ open, onClose, handleAddTodo }) => {
  const [disabled, setDisabled] = useState(false);
  const [dataRequest, setDataRequest] = useState({
    activity_group_id: "",
    title: "",
    priority: "",
  });

  const handlechange = (key, value) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleClickAdd = () => {
    handleAddTodo(dataRequest);
    onClose();
  };

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={open}
      onClose={onClose}
    >
      <Box
        data-cy="modal-add"
        sx={{
          width: "830px",
          height: "403px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "0 30px",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E5E5E5",
          }}
        >
          <Typography
            data-cy="modal-add-title"
            sx={{
              fontSize: "18px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: "#111111",
            }}
          >
            Tambah List Item
          </Typography>
          <IconButton data-cy="modal-add-close-button" onClick={onClose}>
            <CrossIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ padding: "0 30px", display: "flex", flexDirection: "column" }}
        >
          <Typography
            data-cy="modal-add-name-title"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "18px",
              color: "#111111",
              marginBottom: "9px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            NAMA LIST ITEM
          </Typography>
          <OutlinedInput
            data-cy="modal-add-name-input"
            onChange={(e) => handlechange("title", e.target.value)}
            sx={{
              borderRadius: "6px",
              marginBottom: "40px",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "#111111",
              fontFamily: "'Poppins', sans-serif",
            }}
            placeholder="Tambahkan nama list item"
          />
          <Typography
            data-cy="modal-add-priority-title"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "18px",
              color: "#111111",
              marginBottom: "9px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            PRIORITY
          </Typography>
          <FormControl
            sx={{
              maxWidth: "205px",
              height: "52px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <Select
              onChange={(e) => handlechange("priority", e.target.value)}
              value={dataRequest.priority}
              id="priority"
              sx={{
                borderRadius: "6px",
                fontFamily: "'Poppins', sans-serif",
                ".MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                },
              }}
              IconComponent={ChevronDownIcon}
              data-cy="modal-add-priority-dropdown"
            >
              {selectItems.map((item, index) => (
                <MenuItem
                  data-cy="modal-add-priority-item"
                  key={index}
                  value={item.value}
                >
                  <Priority severity={item.value} />
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            padding: "0 30px",
            height: "88px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            borderTop: "1px solid #E5E5E5",
          }}
        >
          <button
            disabled={dataRequest.title === ""}
            data-cy="modal-add-save-button"
            onClick={handleClickAdd}
            style={{
              border:"none",
              backgroundColor: "#16ABF8",
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
                backgroundColor: "#109de3",
              },
            }}
          >
            Simpan
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTodoModal;
