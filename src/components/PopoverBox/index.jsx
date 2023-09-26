import { Popover, Typography } from "@mui/material";
import { Icon } from "../Icon";
import { PopoverButton } from "./styled";
import { useState } from "react";

export function PopoverBox() {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <PopoverButton
        onClick={(e) => setAnchorElement(e.currentTarget)}
        aria-describedby={id}>
        {" "}
        <Icon
          id="info-icon"
          width="20px"
          height="20px"
          fill="var(--clr-pink)"
        />
      </PopoverButton>
      <Popover
        id={id}
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(null)}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <Typography
          display="flex"
          alignItems="center"
          gap="8px"
          fontSize="inherit"
          padding="8px">
          <Icon
            id="info-icon"
            width="16px"
            height="16px"
            fill="var(--clr-dark)"
          />
          Log in to book venues
        </Typography>
      </Popover>
    </>
  );
}
