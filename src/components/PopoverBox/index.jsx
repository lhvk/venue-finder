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
          fill="var(--clr-primary)"
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
          maxWidth="300px"
          display="flex"
          alignItems="start"
          gap="8px"
          fontSize="inherit"
          padding="8px">
          <Icon
            id="info-icon"
            width="24px"
            height="24px"
            fill="var(--clr-dark)"
          />
          Only registered customers are allowed to book venues
        </Typography>
      </Popover>
    </>
  );
}
