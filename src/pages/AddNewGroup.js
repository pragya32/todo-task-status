import { Fragment, useState } from "react";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { Grid, IconButton, Paper } from "@mui/material";

import TextField from "../custom components/TextField";

const Card = styled(Paper)`
  margin: 10px 0;
  padding: 15px 15px;
  width: 600px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export default function AddNewGroup({ groups, setGroups }) {
  const [msg, setMessage] = useState("");

  return (
    <Card>
      <h5>{msg}</h5>
      <Grid container spacing={2}>
        {groups.map((group, index) => (
          <Fragment>
            <Grid item xs={4}>
              <TextField
                onChange={(e) => handleGroupChange(e, index)}
                label="Group Name"
                value={group.name}
              ></TextField>
            </Grid>

            <Grid item xs={3}>
              <TextField
                value={group.from}
                label="From"
                onChange={(e) => handleFrom(e, index)}
                type="number"
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                value={group.to}
                label="To"
                type="number"
                onChange={(e) => handleTo(e, index)}
              ></TextField>
            </Grid>

            <Grid
              item
              xs={2}
              style={{
                display: "flex",
                justifyContent: "end",
                alignSelf: "center",
              }}
            >
              <IconButton
                style={{
                  padding: "0px",
                  alignItems: "end",
                }}
                onClick={() => handleDelete(index)}
              >
                <MdDeleteOutline color="red" />
              </IconButton>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Card>
  );

  function handleGroupChange(e, index) {
    let groupTask = [...groups];
    groupTask[index].name = e.target.value;
    setGroups(groupTask);
  }

  function handleDelete(index) {
    let allGroup = [...groups];
    allGroup.splice(index);
    setGroups(allGroup);
  }

  function handleFrom(e, index) {
    let groupTask = [...groups];

    let alreadyExistFrom = groupTask.filter(
      (groupTask) => parseInt(groupTask.from) === parseInt(e.target.value)
    );

    let alreadyExistTo = groupTask.filter(
      (groupTask) => parseInt(groupTask.to) === parseInt(e.target.value)
    );

    if (
      e.target.value > 10 ||
      alreadyExistFrom.length > 0 ||
      alreadyExistTo.length > 0 ||
      parseInt(e.target.value) !== parseInt(groups[groups.length - 2].to + 1)
    ) {
      setMessage("The value you entered for the group task is not right");
    } else {
      setMessage("");
    }

    groupTask[index].from = e.target.value;
    setGroups(groupTask);
  }

  function handleTo(e, index) {
    let groupTask = [...groups];

    let alreadyExist = groupTask.filter(
      (groupTask) => parseInt(groupTask.to) === parseInt(e.target.value)
    );

    if (
      alreadyExist.length > 0 ||
      e.target.value > 10 ||
      parseInt(e.target.value) <= parseInt(groups[groups.length - 1].from)
    ) {
      setMessage("The value you entered for the group task is not right");
    } else {
      setMessage("");
    }

    groupTask[index].to = e.target.value;
    setGroups(groupTask);
  }
}
