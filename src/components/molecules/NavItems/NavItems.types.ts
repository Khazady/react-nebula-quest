export type NavItemsProps = React.PropsWithChildren<{
  orientation?: "vertical" | "horizontal";
  className?: React.ComponentProps<"nav">["className"];
}>;
