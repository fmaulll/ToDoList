import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddButton from "../../components/AddButton";
import EmptyActivity from "../../assets/EmptyActivity.png";
import ActivityItem from "../../components/ActivityItem";
import {
  addActivityGroup,
  deleteActivityGroup,
  getActivityGroup,
} from "../apiServices";
import DeleteModal from "../../components/DeleteModal";
import SuccessDelete from "../../components/SuccessDelete";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography>Loading...</Typography>
      </Grid>
    </Grid>
  );
};

const Dashboard = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [titleDelete, setTitleDelete] = useState(null);

  const handleClickTitle = (id) => {
    navigate(`/detail/${id}`)
  }

  const handleAddActivity = () => {
    addActivityGroup()
      .then((response) => {
        if (response) {
          getActivityGroupApi();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDeleteActivity = () => {
    deleteActivityGroup(idDelete)
      .then((response) => {
        if (response) {
          setOpenSuccess(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getActivityGroupApi = () => {
    setIsLoading(true);
    getActivityGroup()
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getActivityGroupApi();
  }, []);

  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography
            data-cy="activity-title"
            sx={{
              fontSize: "36px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
            }}
          >
            Activity
          </Typography>
        </Grid>
        <Grid item>
          <AddButton
            data-cy="activity-add-button"
            onClick={handleAddActivity}
          />
        </Grid>
      </Grid>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.length > 0 ? (
            <Grid sx={{ marginTop: "50px" }} container spacing={3}>
              {data.map((item, index) => (
                <Grid key={item.id + index} item xs={matches ? 3 : 6}>
                  <ActivityItem
                    data-cy={`activity-item-${index}`}
                    data={item}
                    onClickDelete={() => {
                      setOpenModal(true);
                      setIdDelete(item.id);
                      setTitleDelete(item.title);
                    }}
                    onClickTitle={()=>handleClickTitle(item.id)}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container justifyContent="center">
              <Grid item sx={{ marginTop: "59px" }}>
                <img
                  data-cy="activity-empty-state"
                  src={EmptyActivity}
                  style={{ cursor: "pointer" }}
                  onClick={handleAddActivity}
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
      <DeleteModal
        type="activity"
        title={titleDelete}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        onClickDelete={() => {
          setOpenModal(false);
          handleDeleteActivity();
        }}
      />
      <SuccessDelete
        open={openSuccess}
        onClose={() => {
          setOpenSuccess(false)
          getActivityGroupApi();
        }}
      />
    </div>
  );
};

export default Dashboard;
