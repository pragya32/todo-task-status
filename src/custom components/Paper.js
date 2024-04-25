import { spacing } from "@mui/system";
import styled from "styled-components";
import { Paper as MuiPaperWithoutSpacing, Grid } from "@mui/material";

const MuiPaper = styled(MuiPaperWithoutSpacing)(spacing);

const NonShadowPaper = styled(MuiPaper)`
`;

export default function Paper({
  gridSpacing,
  variant,
  noGrid,
  gridProps,
  ...props
}) {
  return (
    <NonShadowPaper variant={variant} p="25px" {...props}>
      {Boolean(noGrid) ? (
        props.children
      ) : (
        <Grid
          container
          alignItems="flex-start"
          {...gridProps}
          spacing={Boolean(gridSpacing) ? gridSpacing : 4}
        >
          {props.children}
        </Grid>
      )}
    </NonShadowPaper>
  );
}
