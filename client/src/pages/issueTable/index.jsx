import React from "react";
import { Box, useTheme, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material"; // Import the Delete icon
import { tokens } from "../../theme";
import { mockDataIssue } from "../../data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDelete = (selectedRows) => {
    // Handle deletion logic here
    console.log("Deleting rows:", selectedRows);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 200,
    },
    {
      field: "des",
      headerName: "Description",
      headerAlign: "left",
      align: "left",
      width: 100,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Board" subtitle="Welcome to your Board Members" />
      </Box>
      <Box
        m="8px 0 0 0"
        width="100%"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataIssue}
          columns={columns}
          components={{
            Toolbar: (props) => (
              <GridToolbar {...props}>
                <IconButton
                  color="inherit"
                  onClick={() => handleDelete(props.selectionModel)}
                >
                  <Delete />
                </IconButton>
              </GridToolbar>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
