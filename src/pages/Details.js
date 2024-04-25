import { Fragment } from "react";
import styled from "styled-components";
import { Typography, Paper } from "@mui/material";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Card = styled(Paper)`
  margin: 10px 0;
  padding: 15px 15px;
  width: 600px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const GroupName = styled(Typography)`
  color: #8f1c82;
  text-transform: capitalize;
  font-size: 18px;
`;

const TaskName = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: #28967e;
`;

const Status = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export default function Details({ taskDetails }) {
  return (
    <Fragment>
      {taskDetails && (
        <Card>
          <GroupName>Task Details</GroupName>
          <TaskName>{taskDetails.title}</TaskName>
          {taskDetails.completed ? (
            <Typography display={"flex"}>
              Status
              <Status style={{ color: "#28967e" }}>
                {" "}
                completed &nbsp;
                <FaRegCheckCircle
                  style={{ position: "relative", margin: "-3px 2px" }}
                />
              </Status>
            </Typography>
          ) : (
            <Typography display={"flex"}>
              Status
              <Status style={{ color: "red" }}>
                &nbsp; Not completed{" "}
                <MdOutlineCancel
                  style={{ position: "relative", margin: "-3px 2px" }}
                />
              </Status>
            </Typography>
          )}
        </Card>
      )}
    </Fragment>
  );
}
