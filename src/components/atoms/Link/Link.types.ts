export type LinkProps = React.PropsWithChildren<{
  href: React.ComponentProps<"a">["href"];
  onClick?: React.ComponentProps<"a">["onClick"];
  className?: React.ComponentProps<"a">["className"];
}>;
