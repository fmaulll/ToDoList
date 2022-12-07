import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddButton from "../../components/AddButton";
import TodoTitle from "../../components/TodoTitle";
import EmptyTodo from "../../assets/EmptyTodo.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  addTodoList,
  checkTodoList,
  deleteTodoList,
  editTitleActivity,
  editTodoList,
  getDetailActivity,
} from "../apiServices";
import TodoItem from "../../components/TodoItem";
import AddTodoModal from "../../components/AddTodoModal";
import DeleteModal from "../../components/DeleteModal";
import EditTodoModal from "../../components/EditTodoModal";
import Filter from "../../components/Filter";
import { Box } from "@mui/system";
import AddButtonTodo from "../../components/AddButtonTodo";
import SuccessDelete from "../../components/SuccessDelete";

const dummy = [
  {
    id: 7835,
    title: "iiii",
    activity_group_id: 20615,
    is_active: 1,
    priority: "high",
  },
  {
    id: 7834,
    title: "aaaa",
    activity_group_id: 20615,
    is_active: 1,
    priority: "very-high",
  },
  {
    id: 7833,
    title: "ayam",
    activity_group_id: 20615,
    is_active: 0,
    priority: "very-low",
  },
];

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [dataTodo, setDataTodo] = useState({ id: "", title: "", priority: "" });
  const [activityTitle, setActivityTitle] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickBack = () => {
    navigate(-1);
  };

  const getDetailActivityApi = () => {
    setIsLoading(true);
    getDetailActivity(id)
      .then((response) => {
        setData(response.todo_items);
        setIsLoading(false);
        setActivityTitle(response.title);
        console.log(response);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const handleEditTitle = (val) => {
    setIsLoading(true);
    const dataRequest = { title: val };
    editTitleActivity(id, dataRequest)
      .then((response) => {
        if (response) {
          getDetailActivityApi();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const handleAddTodo = (dataHit) => {
    setIsLoading(true);
    const dataRequest = { ...dataHit, activity_group_id: id };
    addTodoList(dataRequest)
      .then((response) => {
        if (response) {
          getDetailActivityApi();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const handleCheck = (todoId, dataHit) => {
    setIsLoading(true);
    checkTodoList(todoId, dataHit)
      .then((response) => {
        if (response) {
          getDetailActivityApi();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const handleDeleteTodo = () => {
    setIsLoading(true);
    deleteTodoList(dataTodo.id)
      .then((response) => {
        if (response) {
          setOpenSuccess(true);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const handleEditTodo = (todo) => {
    setIsLoading(true);
    editTodoList(todo.id, { title: todo.title, priority: todo.priority })
      .then((response) => {
        if (response) {
          getDetailActivityApi();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  const handleSort = (key) => {
    let sorted = [...data];
    if (sorted && sorted.length > 0) {
      if (key === "latest") {
        setData(sorted.sort((a, b) => b.id - a.id));
        console.log("newest");
      }
      if (key === "oldest") {
        setData(sorted.sort((a, b) => a.id - b.id));
        console.log("oldest");
      }
      if (key === "az") {
        setData(sorted.sort((a, b) => a.title.localeCompare(b.title)));
        console.log("az");
      }
      if (key === "za") {
        setData(sorted.sort((a, b) => b.title.localeCompare(a.title)));
        console.log("za");
      }
      if (key === "unfinished") {
        setData(sorted.sort((a, b) => b.is_active - a.is_active));
        console.log("unfinished");
      }
    }
  };

  useEffect(() => {
    getDetailActivityApi();
  }, []);
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <TodoTitle
            title={activityTitle}
            handleEdit={handleEditTitle}
            onClickBack={handleClickBack}
          />
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Filter handleSort={handleSort} />
            <AddButtonTodo onClick={() => setOpenAddModal(true)} />
          </Box>
        </Grid>
      </Grid>
      {data?.length > 0 ? (
        <Grid container spacing={2} sx={{ marginTop: "48px" }}>
          {data?.map((item, index) => (
            <Grid key={item.id} item xs={12}>
              <TodoItem
                data-cy={`todo-item`}
                data={item}
                handleCheck={handleCheck}
                onClickDelete={(todoId, title) => {
                  setDataTodo({ id: todoId, title: title });
                  setOpenDeleteModal(true);
                }}
                handleEdit={(item) => {
                  setDataTodo({
                    id: item.id,
                    title: item.title,
                    priority: item.priority,
                    is_active: item.is_active,
                  });
                  setOpenEditModal(true);
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Grid item sx={{ marginTop: "97px" }}>
            <img
              data-cy="todo-empty-state"
              src={EmptyTodo}
              style={{ cursor: "pointer" }}
              onClick={() => setOpenAddModal(true)}
            />
          </Grid>
        </Grid>
      )}
      <AddTodoModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        handleAddTodo={handleAddTodo}
      />
      <EditTodoModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        handleEditTodo={handleEditTodo}
        data={dataTodo}
      />
      <DeleteModal
        type="List Item"
        title={dataTodo.title}
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
        }}
        onClickDelete={() => {
          setOpenDeleteModal(false);
          handleDeleteTodo();
        }}
      />
      <SuccessDelete
        open={openSuccess}
        onClose={() => {
          setOpenSuccess(false);
          getDetailActivityApi();
        }}
      />
    </div>
  );
};

export default Detail;
