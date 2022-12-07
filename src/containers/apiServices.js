import axios from "axios";

const apiUrl = "https://todo.api.devcode.gethired.id";

export const getActivityGroup = async () => {
  try {
    const result = await axios({
      url: `${apiUrl}/activity-groups?email=maul2821@gmail.com`,
      method: "GET",
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
};

export const addActivityGroup = async () => {
  try {
    const result = await axios({
      url: `${apiUrl}/activity-groups`,
      method: "POST",
      data: { email: "maul2821@gmail.com", title: "New Activity" },
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
};

export const deleteActivityGroup = async (id) => {
  try {
    const result = await axios({
      url: `${apiUrl}/activity-groups/${id}`,
      method: "DELETE",
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
};

export const getDetailActivity = async (id) => {
  try {
    const result = await axios({
      url: `${apiUrl}/activity-groups/${id}`,
      method: "GET",
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
};

export const editTitleActivity = async(id, dataHit) => {
  try {
    const result = await axios({
      url: `${apiUrl}/activity-groups/${id}`,
      method: "PATCH",
      data: dataHit,
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
}

export const addTodoList = async(dataHit) => {
  try {
    const result = await axios({
      url: `${apiUrl}/todo-items`,
      method: "POST",
      data: dataHit,
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
}

export const checkTodoList = async(id, dataHit) => {
  try {
    const result = await axios({
      url: `${apiUrl}/todo-items/${id}`,
      method: "PATCH",
      data: dataHit,
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
}

export const deleteTodoList = async(id) => {
  try {
    const result = await axios({
      url: `${apiUrl}/todo-items/${id}`,
      method: "DELETE",
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
}

export const editTodoList = async(id, dataHit) => {
  try {
    const result = await axios({
      url: `${apiUrl}/todo-items/${id}`,
      method: "PATCH",
      data: dataHit
    });
    const { data, status } = result;
    return data;
  } catch (error) {
    alert(error);
  }
}

