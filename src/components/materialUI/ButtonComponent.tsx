import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {};

const ButtonComponent = (props: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <div>
      <Stack spacing={4} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
        <Tooltip title="Click to see loading">
          <IconButton onClick={() => setLoading(true)} loading={loading}>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  );
};

export default ButtonComponent;
