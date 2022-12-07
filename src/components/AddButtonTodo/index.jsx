import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as AddIcon } from "../../assets/Add.svg";

const AddButtonTodo = ({ onClick }) => {
  return (
    <Button
      data-cy="todo-add-button"
      onClick={onClick}
      sx={{
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
        "&:hover":{
          backgroundColor: "#109de3",
        },
      }}
    >
      <AddIcon style={{ marginRight: "11px" }} />
      Tambah
    </Button>
  );
};

export default AddButtonTodo;
