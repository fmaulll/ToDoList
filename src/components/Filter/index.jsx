import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { ReactComponent as FilterIcon } from "../../assets/Sort.svg";
import { ReactComponent as NewestIcon } from "../../assets/Newest.svg";
import { ReactComponent as OldestIcon } from "../../assets/Oldest.svg";
import { ReactComponent as SortAzIcon } from "../../assets/SortAz.svg";
import { ReactComponent as SortZaIcon } from "../../assets/SortZa.svg";
import { ReactComponent as UnfinishedIcon } from "../../assets/Unfinished.svg";

const filterItem = [
  {
    label: "Terbaru",
    icon: <NewestIcon />,
    key: "latest",
  },
  {
    label: "Oldest",
    icon: <OldestIcon />,
    key: "oldest",
  },
  {
    label: "A-Z",
    icon: <SortAzIcon />,
    key: "az",
  },
  {
    label: "Z-A",
    icon: <SortZaIcon />,
    key: "za",
  },
  {
    label: "Belum Selesai",
    icon: <UnfinishedIcon />,
    key: "unfinished",
  },
];

const Filter = ({ handleSort }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ marginRight: "18px" }}>
      <IconButton data-cy="todo-sort-button" sx={{ padding: 0 }} onClick={handleClick}>
        <FilterIcon />
      </IconButton>
      <Menu
        data-cy="sort-parent"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {filterItem.map((item, index) => (
          <MenuItem
            // data-cy={`sort-${item.key}`}
            data-cy={`sort-selection`}
            key={index}
            onClick={() => {
              handleSort(item.key);
              handleClose();
            }}
          >
            {item.icon} {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Filter;
