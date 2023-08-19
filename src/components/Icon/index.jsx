import icons from "../../assets/icons.svg";

export function Icon({ id, width = "24px", height = "24px", ...props }) {
  return (
    <svg
      {...props}
      height={height}
      width={width}>
      <use href={`${icons}#${id}`} />
    </svg>
  );
}
