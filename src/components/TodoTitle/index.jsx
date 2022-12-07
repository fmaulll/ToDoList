import { Box, Grid, IconButton, InputBase, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/Back.svg";
import { ReactComponent as PenIcon } from "../../assets/Pen.svg";
import { OutsideWrapper } from "../OutsideWrapper";

const TodoTitle = ({ onClickBack, handleEdit, title, id }) => {
  const inputTitle = useRef(null);
  const [dataRequest, setDataRequest] = useState({ id, title: "" });
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeTitle = (e) => {
    setDataRequest((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  const handleClickEdit = () => {
    if (dataRequest.title !== title) {
      handleEdit(dataRequest.title);
    }
    setIsEdit(!isEdit);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
      handleClickEdit();
    }
  };

  const onBlur = (e) => {
    e.preventDefault()
    setIsEdit(false)
    handleClickEdit()
  }

  useEffect(() => {
    setDataRequest((prev) => {
      return {
        ...prev,
        title,
      };
    });
  }, [title]);

  return (
    <Grid container alignItems="center">
      <Grid item sx={{ marginRight: "20px" }}>
        <IconButton onClick={onClickBack} data-cy="todo-back-button">
          <BackIcon />
        </IconButton>
      </Grid>
      <Grid item sx={{ marginRight: "20px" }}>
        {isEdit ? (
          <OutsideWrapper callback={() => setIsEdit(false)} ref={inputTitle}>
            <InputBase
              autoFocus
              data-cy="todo-title"
              onKeyDown={onKeyDown}
              onBlur={onBlur}
              tabIndex="0"
              sx={{
                borderBottom: "2px solid #111111",
                fontSize: "36px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#111111",
              }}
              value={dataRequest.title}
              onChange={handleChangeTitle}
            />
          </OutsideWrapper>
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
            {title}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <IconButton onClick={handleClickEdit} data-cy="todo-title-edit-button">
          <PenIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoTitle;
