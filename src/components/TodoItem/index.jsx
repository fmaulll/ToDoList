import { Checkbox, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ReactComponent as TrashIcon } from "../../assets/Trash.svg";
import { ReactComponent as PenIcon } from "../../assets/Pen.svg";
import Priority from "../Priority";

const TodoItem = ({ onClickDelete, data, handleCheck, handleEdit }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClickEdit = () => {
    handleEdit(data)
  };

  const handleClickDelete = () => {
    onClickDelete(data.id, data.title)
  }

  const handleClickCheck = (e) => {
    setIsChecked(e.target.checked);
    handleCheck(data.id, { is_active: !isChecked ? 0 : 1 });
  };

  useEffect(() => {
    setIsChecked(data?.is_active === 1 ? false : true);
  }, [data]);
  return (
    <Box
      sx={{
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          data-cy="todo-item-checkbox"
          onChange={handleClickCheck}
          checked={isChecked}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <Priority data-cy="todo-item-priority-indicator" severity={data.priority} />
        {isChecked ? (
          <Typography
            data-cy="todo-item-title"
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "27px",
              color: "#888888",
              fontFamily: "'Poppins', sans-serif",
              textDecorationLine: "line-through",
            }}
          >
            {data.title}
          </Typography>
        ) : (
          <Typography
            data-cy="todo-item-title"
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "27px",
              color: "#111111",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {data.title}
          </Typography>
        )}

        <IconButton
          onClick={handleClickEdit}
          data-cy="todo-item-edit-button"
          sx={{ marginLeft: "20px" }}
        >
          <PenIcon />
        </IconButton>
      </Box>

      <IconButton data-cy="todo-item-delete-button" onClick={handleClickDelete}>
        <TrashIcon />
      </IconButton>
    </Box>
  );
};

export default TodoItem;
