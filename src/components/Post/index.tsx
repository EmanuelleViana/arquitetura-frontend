import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import "./style.scss";

export interface PostInfo {
  id?: number;
  title?: string;
  description?: string;
  year?: number;
  thumb?: any;
  category?: string;
}

function Post(info: PostInfo) {
  return (
    <div id="post">
      <Grid display="flex" container spacing={2}>
        <Grid item className="margin-auto">
          <img className="thumb" src={info.thumb}></img>
        </Grid>
        <Grid item>
          <Stack spacing={2}  className="container-post">
            <h3 className="subtitle-bold dark">{info.title}</h3>
            <div>
              <span className="chip-sm bg-pink">{info.year}</span>
              <span className="text text-light">{info.category}</span>
            </div>
            <p className="text dark">{info.description}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Post;
