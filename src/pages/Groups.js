import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { Chip, Grid, IconButton, Typography, Paper } from "@mui/material";
import { Fragment } from "react";

const Card = styled(Paper)`
  margin: 10px 0;
  padding: 15px 15px;
  width: 600px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ChipColor = styled(Chip)`
  color: #fff;
  margin: 2px;
`;

const GroupName = styled(Typography)`
  color: #8f1c82;
  text-transform: capitalize;
  font-size: 18px;
`;

export default function Groups({ groups, setTaskDetails }) {
  return (
    <Fragment>
      {groups.map(
        (group, i) =>
          group.from !== null &&
          group.to !== null && (
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <div style={{ alignSelf: "center", display: "flex" }}>
                    <svg
                      style={{ position: "relative", margin: "7px" }}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="5"
                        fill={i % 2 === 0 ? "#8f1c82" : "#f3b61f"}
                      />
                    </svg>
                    <GroupName>{group.name}</GroupName>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={2}
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <IconButton
                    style={{
                      padding: "0px",
                      alignItems: "end",
                    }}
                  >
                    <MdDeleteOutline color="red" />
                  </IconButton>
                </Grid>

                <Grid item xs={12}>
                  {task(group)}
                </Grid>
              </Grid>
            </Card>
          )
      )}
    </Fragment>
  );

  function task(task) {
    let numbers = [];
    for (let i = task.from; i <= task.to; i++) {
      numbers.push(i);
    }

    return numbers.map((num) => (
      <ChipColor
        onClick={() => handleChip(task, num)}
        style={{
          background: num % 2 === 0 ? "#8f1c82" : "#f3b61f",
          color: "#fff",
        }}
        label={"Task " + num}
      />
    ));
  }

  function handleChip(task, num) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + num)
      .then((response) => response.json())
      .then((data) => setTaskDetails(data));
  }
}
