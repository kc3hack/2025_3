import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

function HoverPopper(props: TooltipProps) {
  const backgroundColor = "#ffffff80";
  const color = "#000";

  return (
    <Tooltip
      {...props}
      slotProps={{
        tooltip: {
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: backgroundColor,
            color: color,
            borderRadius: 3,
            minHeight: 48,
          },
        },
        arrow: {
          sx: {
            color: backgroundColor,
            fontSize: 24,
          },
        },
      }}
      arrow
    ></Tooltip>
  );
}

export default HoverPopper;
