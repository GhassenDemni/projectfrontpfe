import { useEffect, useState } from "react";
import BarChart from "./form/BarChart";
import LineChart from "./form/LineChart";
import PieChart from "./form/PieChart";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import UserService from "../../services/userService";
import { UserData } from "./Data";
import React from "react";
function ChartJS() {
  const [users, setUsers] = useState([]);
  const [obj, setObj] = useState([]);
  const US = new UserService();
  useEffect(() => {
    // getAllFB();
  }, []);
  // const getAllFB = () => {
  //   US.getAll().then((res) => {
  //     setObj(res.data.data);
  //     console.log("****OBJ*******", res.data.data);
  //   });
  // };
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Users news",
        data: UserData.map((data) => data.old),
        backgroundColor: ["#1E4DB7", "#A7E3F4", "red", "black", "green"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <div>
        <div style={{ width: "500px" }}>
          {/* <BarChart chartData={userData} />
        <LineChart chartData={userData} /> */}
        </div>
        <div style={{ width: "500px" }}>
          {/* <PieChart chartData={userData}/> */}
        </div>
      </div>
      <Table>
        <TableRow>
          <TableCell>
            <BarChart chartData={userData} />
          </TableCell>
          <TableCell>
            <PieChart chartData={userData} />
          </TableCell>
          <TableCell>
            {" "}
            <LineChart chartData={userData} />
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
}
export default ChartJS;
