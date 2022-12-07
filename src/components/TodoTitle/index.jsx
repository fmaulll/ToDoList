import { Grid, IconButton, InputBase, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/Back.svg";
import { ReactComponent as PenIcon } from "../../assets/Pen.svg";

const TodoTitle = ({ onClickBack, handleEdit, title }) => {
  const inputTitle = useRef(null);
  const [todoTitle, setTodoTitle] = useState(title);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleClickEdit = () => {
    if (isEdit) {
      if (todoTitle !== title) {
        handleEdit(todoTitle);
      }
    }
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    setTodoTitle(title);
  }, [title]);
  return (
    <Grid container alignItems="center">
      <Grid item sx={{ marginRight: "20px" }}>
        <IconButton
          onClick={onClickBack}
          data-cy="todo-back-button"
        >
          <BackIcon />
        </IconButton>
      </Grid>
      <Grid item sx={{ marginRight: "20px" }}>
        {isEdit ? (
          <InputBase
            ref={inputTitle}
            data-cy="todo-title"
            sx={{
              borderBottom: "2px solid #111111",
              fontSize: "36px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#111111",
            }}
            value={todoTitle}
            onChange={handleChangeTitle}
          />
        ) : (
          <Typography
            onClick={() => setIsEdit(true)}
            data-cy="todo-title"
            sx={{
              fontSize: "36px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#111111",
            }}
          >
            {todoTitle}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <IconButton
          onClick={handleClickEdit}
          data-cy="todo-title-edit-button"
        >
          <PenIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoTitle;
