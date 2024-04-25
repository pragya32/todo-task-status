import { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { Grid, Typography, Button } from "@mui/material";

import Groups from "./Groups";
import AddNewGroup from "./AddNewGroup";
import Details from "./Details";

const Heading = styled(Typography)`
  font-weight: 700;
  font-size: 20px;
  color: #8f1c82;
`;

const PrimaryButton = styled(Button)`
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  border-radius: 25px;
  background-color: #8f1c82;
  &:hover {
    background-color: #8f1c82;
  }
`;

export default function TodoStatus() {
  const [groups, setGroups] = useState([
    { id: "1", name: "group1", from: 1, to: 2 },
  ]);
  const [taskDetails, setTaskDetails] = useState("");

  function addGroup(group) {
    setGroups((group) => [
      ...group,
      { id: "2", name: "", from: null, to: null },
    ]);
  }

  return (
    <Fragment>
      <Grid container spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Heading>Todo Task Groups </Heading>
        </Grid>

        <Grid item xs={6}>
          <Groups groups={groups} setTaskDetails={setTaskDetails} />

          <AddNewGroup groups={groups} setGroups={setGroups} />

          <PrimaryButton
            disabled={
              groups[groups.length - 1].from === null ||
              groups[groups.length - 1].to === null
            }
            onClick={addGroup}
            variant="contained"
          >
            Add New Group
          </PrimaryButton>
        </Grid>

        <Grid item xs={6}>
          <Details taskDetails={taskDetails} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
