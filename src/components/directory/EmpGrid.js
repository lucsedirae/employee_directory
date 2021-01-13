import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { DataGrid } from "@material-ui/data-grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textOverflow: "none",
  },
}));

const columns = [
  { field: "id", headerName: "Emp ID", width: 120 },
  { field: "firstName", headerName: "First Name", width: 180 },
  { field: "lastName", headerName: "Last Name", width: 180 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Phone", width: 180 },
];

const EmpGrid = () => {
  const [employees, setEmployees] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees().then((employees) => {
      setEmployees(employees.data.results);
    });
  }

  const rows = [
    employees.map((employee) => ({
      id: employee.id.value,
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.name,
      phone: employee.phone,
    })),
  ];

  console.table(rows[0]);

  return (
    <Box alignContent="center" style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={employees.map((employee) => ({
          id: employee.id.value,
          firstName: employee.name.first,
          lastName: employee.name.last,
          email: employee.email,
          phone: employee.phone,
        }))}
        columns={columns}
        pageSize={10}
        className={classes.root}
      />
    </Box>
  );
};

export default EmpGrid;
