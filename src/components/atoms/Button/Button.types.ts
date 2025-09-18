export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = React.PropsWithChildren<{
  type?: React.ComponentProps<"button">["type"];
  className?: React.ComponentProps<"button">["className"];
  onClick?: React.ComponentProps<"button">["onClick"];
  variant?: ButtonVariant;
}>;
